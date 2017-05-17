const transformer = require('../index');
const inputContstraints = require('./test-input-constraints');
const outputContstraints = require('./test-output-constraints');
const fn = require('./test-input-fn');

const myTransformer = transformer(inputContstraints(), outputContstraints(), fn, {name: 'Worker'});

console.log('calling meta():', myTransformer.meta());
console.log('running...', myTransformer.run({numbers: [1, 2, 3]}));

process.exit();