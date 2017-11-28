import { createUserAction } from './a'

console.log(createUserAction.REQUEST)

console.log(createUserAction.request({
  body: {
    name: 'hi',
    age: 20,
  },
}))

