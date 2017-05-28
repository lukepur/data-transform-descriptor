import CreateTransformer from 'data-transform-descriptor';

const inputConstraints = [
  {
    id: 'a',
    type: 'number',
    required: true
  },
  {
    id: 'b',
    type: 'number',
    required: true
  }
];

const outputConstraints = [
  {
    id: 'output',
    type: 'number',
    required: true
  }
];

const fn = (input) => input.a + input.b;

const meta = {
  name: 'Add'
};

export default CreateTransformer(inputConstraints, outputConstraints, fn, meta);
