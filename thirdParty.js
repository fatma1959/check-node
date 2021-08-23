var _ = require('lodash')
const arr = _.compact([0, 1, false, 2, '', 'test', null, undefined, 'bonjour', 3]);
console.log(arr)