import CreateTransformer from 'data-transform-descriptor';

const inputConstraints = {
  a: { presence: true, isNumber: true },
  b: { presence: true, isNumber: true }
};
const outputConstraints = {
  output: { presence: true, isNumber: true }
};
const fn = (input) => input.a + input.b;
const meta = {
  name: 'Add'
};

export default CreateTransformer(inputConstraints, outputConstraints, fn, meta);
