# data-transform-descriptor
A tiny module to describe and implement data transforms/mappings.

Uses validate.js (and some custom validators) to document a data transformation in terms of input and output requirements.

Demo site: [https://lukepur.github.io/data-transform-descriptor/](https://lukepur.github.io/data-transform-descriptor/)

## Installation

```
npm install data-transform-descriptor
```

## Usage

```
const createTransformer = require('data-transform-descriptor');

const adder = createTransformer(
    // input constraints (see validate.js)
    { a: { presence: true, isNumber: true }, b: { presence: true, isNumber: true } },
    // output constraints
    { output: { presence: true, isNumber: true }},
    input => input.a + input.b,
    { name: 'Adder' }
);

adder.meta();
// -> { name: 'Adder', ...inputConstraints, ...outputConstraints }

adder.validateInput({a: 1, b: 2});
// -> undefined

adder.validateInput({a: 'a', b: 2});
// -> {a: ['a must be a number (got string)']}

adder.run({a: 1, b: 2});
// -> 3

adder.run({a: '1', b: 2});
// -> {a : ['a must be a number (got string))']}

adder.run({a: 1});
// -> {b : ["b is can't be blank", 'b must be a number (got undefined)']}
```

## Why?

The motivation for data-transform-descriptor is to build a simple framework for describing units of work against data.

This could be enhanced with tooling to build rich systems for composing these units of work into much more useful
workflows.

