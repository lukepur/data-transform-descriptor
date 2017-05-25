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
          fn: 'isNumber',
          args: ['$value'],
          message: 'All numbers must be of type number'
        },
        {
          fn: 'greaterThanOrEqual',
          args: [
            {
              fn: 'arraySum',
              args: ['$.numbers']
            },
            10
          ],
          message: 'input must sum to at least 10'
        }
      ]
    }
  ];
};
