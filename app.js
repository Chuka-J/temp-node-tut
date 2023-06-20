// npm global command, comes with node 
// npm version 

// local dependency - use it only in this particular project 
// npm 1 <packageName>

// global dependency - use it in any projet
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

const _ = require('lodash')
const items = [1, [2, [3, [4]]]]
const newItems = _.flatMapDeep(items)
console.log(newItems);