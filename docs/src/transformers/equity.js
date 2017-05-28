import CreateTransformer from 'data-transform-descriptor';

const inputConstraints = [
  {
    id: 'assets',
    type: 'array',
    children: {
      type: 'object',
      children: [
        {
          id: 'description',
          type: 'string',
          required: true
        },
        {
          id: 'amount',
          type: 'number',
          required: true,
          validations: [
            {
              fn: 'positive',
              args: ['$value'],
              message: '$prop must be positive'
            },
            {
              fn: 'nonZero',
              args: ['$value'],
              message: '$prop must not be 0'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'liabilities',
    type: 'array',
    children: {
      type: 'object',
      children: [
        {
          id: 'description',
          type: 'string',
          required: true
        },
        {
          id: 'amount',
          type: 'number',
          required: true,
          validations: [
            {
              fn: 'positive',
              args: ['$value'],
              message: '$prop must be positive'
            },
            {
              fn: 'nonZero',
              args: ['$value'],
              message: '$prop must not be 0'
            }
          ]
        }
      ]
    }
  }
];

const outputConstraints = [
  {
    id: 'output',
    type: 'number',
    required: true
  }
];

const fn = (input) => {
  return input.assets.reduce((memo, asset) => memo + asset.amount, 0) -
         input.liabilities.reduce((memo, liability) => memo + liability.amount, 0);
};

const meta = {
  name: 'Equity'
};

export default CreateTransformer(inputConstraints, outputConstraints, fn, meta);
