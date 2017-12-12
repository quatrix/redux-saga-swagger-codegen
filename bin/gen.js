const YAML = require('yamljs')
const fs = require('fs')
const CodeGen = require('swagger-js-codegen').CodeGen
const path = require('path')
const _ = require('lodash')

const file = process.argv[2]
const outdir = process.argv[3]

const swaggerSpec = YAML.load(file)

const tags = new Set()

_.map(swaggerSpec.paths, p => {
  _.map(p, m => {
    _.map(m.tags, t => {
      tags.add(t)
    })
  })
})

for (const tag of tags) {
  const spec = _.cloneDeep(swaggerSpec)

  for (const path of Object.keys(spec.paths)) {
    for (const method of Object.keys(spec.paths[path])) {
      if (!_.includes(spec.paths[path][method].tags, tag)) {
        delete spec.paths[path][method]
      }
    }

    if (!Object.keys(spec.paths[path]).length) {
      delete spec.paths[path]
    }
  }

  const source = CodeGen.getCustomCode({
    moduleName: 'Sample',
    className: 'API//'+tag,
    lint: false,
    beautify: false,
    swagger: spec,
    template: {
      class: fs.readFileSync('templates/class.mustache', 'utf-8'),
      method: fs.readFileSync('templates/method.mustache', 'utf-8'),
      type: fs.readFileSync('templates/type.mustache', 'utf-8')
    }
  })

  console.log(source)
  fs.writeFileSync(path.join(outdir, tag + '.ts'), source)
}
