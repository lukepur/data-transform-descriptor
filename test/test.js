const assert = require('assert');
const transformer = require('../index');
const inputConstraints = require('./test-input-constraints');
const outputConstraints = require('./test-output-constraints');
const fn = require('./test-input-fn');

const adder = transformer(inputConstraints(), outputConstraints(), fn, {name: 'Worker'});

assert.equal(adder.meta().name, 'Worker');
assert.notEqual(adder.meta().inputConstraints, undefined);
assert.notEqual(adder.meta().outputConstraints, undefined);
assert.equal(adder.run({numbers: [1,2,3]}), 6);
assert.equal(adder.run({}).inputErrors.numbers[0], 'Numbers is not an array');
assert.equal(adder.run({numbers: ['1',2,3]}).inputErrors.numbers[0], 'Numbers should only contain members of type number');

console.log('Adder result:', adder.run({numbers: [1,2,3]}))

process.exit();