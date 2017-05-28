import CreateTransformer from 'data-transform-descriptor';

const inputConstraints = [
  {
    id: 'numbers',
    required: true,
    type: 'array',
    validations: [
      {
        fn: 'arrayMinLength',
        args: ['$value', 2],
        message: '$prop must have at least 2 numbers'
      }
    ],
    children: {
      type: 'number'
    }
  }
];
const outputConstraints = [
  {
    id: 'output',
    type: 'number',
    required: 'true'
  }
];

const fn = (input) => input.targets.reduce((memo, item) => memo + item, 0);

const meta = {
  name: 'Add Array'
};

export default CreateTransformer(inputConstraints, outputConstraints, fn, meta);
