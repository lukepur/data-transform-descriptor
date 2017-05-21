import CreateTransformer from 'data-transform-descriptor';

const inputConstraints = {
  a: { presence: true, dataType: 'number' },
  b: { presence: true, dataType: 'number' }
};
const outputConstraints = {
  output: { presence: true, dataType: 'number' }
};
const fn = (input) => input.a - input.b;
const meta = {
  name: 'Subtract'
};

export default CreateTransformer(inputConstraints, outputConstraints, fn, meta);
