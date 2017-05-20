const assert = require('assert');
const transformer = require('../src/index');
const inputConstraints = require('./test-input-constraints');
const outputConstraints = require('./test-output-constraints');
const fn = require('./test-input-fn');

const adder = transformer(inputConstraints(), outputConstraints(), fn, {name: 'Worker'});

assert.equal(adder.meta().name, 'Worker');
assert.notEqual(adder.meta().inputConstraints, undefined);
assert.notEqual(adder.meta().outputConstraints, undefined);
assert.equal(adder.validateInput({numbers: [1,2]}), undefined);
assert.equal(adder.validateInput({numbers: ['1',2]}).numbers[0], 'Numbers must be an array of numbers (some items aren\'t "number" type)');
assert.equal(adder.run({numbers: [1,2,3]}), 6);
assert.equal(adder.run({}).inputErrors.numbers[0], 'Numbers must be an array of numbers (got undefined)');
assert.equal(adder.run({numbers: ['1',2,3]}).inputErrors.numbers[0], 'Numbers must be an array of numbers (some items aren\'t "number" type)');

console.log('Tests successful');

process.exit();
