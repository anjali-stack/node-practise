const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')

console.log('names:', names)
console.log('sayHi:', sayHi)
console.log('data:', data)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
