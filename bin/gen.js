const YAML = require('yamljs')
const fs = require('fs')
const CodeGen = require('swagger-js-codegen').CodeGen

const file = process.argv[2]
const out = process.argv[3]

const swaggerSpec = YAML.load(file)

var source = CodeGen.getCustomCode({
  moduleName: 'Sample',
  className: 'Actions',
  lint: false,
  beautify: false,
  swagger: swaggerSpec,
  template: {
    class: fs.readFileSync('templates/class.mustache', 'utf-8'),
    method: fs.readFileSync('templates/method.mustache', 'utf-8'),
    type: fs.readFileSync('templates/type.mustache', 'utf-8')
  }
})

console.log(source)
fs.writeFileSync(out, source)
