import CreateTransformer from 'data-transform-descriptor';

const inputConstraints = {
  targets: { presence: true, dataType: 'array_of_number' }
};
const outputConstraints = {
  output: { presence: true, dataType: 'number' }
};
const fn = (input) => input.targets.reduce((memo, item) => memo + item, 0);
const meta = {
  name: 'Add Array'
};

export default CreateTransformer(inputConstraints, outputConstraints, fn, meta);
