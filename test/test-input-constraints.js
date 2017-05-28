// input must have a 'numbers' property which
//   - is an array
//   - where all members are numbers
//   - at least 2 members
module.exports = function () {
  return [
    {
      id: 'numbers',
      type: 'array',
      required: true,
      validations: [
        {
          fn: 'greaterThanOrEqual',
          args: [
            {
              fn: 'arraySum',
              args: ['$value']
            },
            10
          ],
          message: 'input must sum to at least 10'
        }
      ],
      children: {
        type: 'number'
      }
    }
  ];
};
