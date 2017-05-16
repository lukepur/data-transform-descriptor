const transformer = require('../index.js');
const inputContstraints = require('./test-input-constraints.js');

const myTransformer = transformer(inputContstraints(), {}, (input)=>{
  console.log('running worker on', input);
  return 200;
}, {name: 'Worker'});

console.log('calling meta():', myTransformer.meta());
console.log('running...', myTransformer.run({input: [1]}));
