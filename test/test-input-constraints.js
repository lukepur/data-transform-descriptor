// input must have a 'numbers' property which
//   - is an array
//   - where all members are numbers
//   - at least 2 members
module.exports = function () {
  return {
    numbers: {
      isArrayOf: {
        type: 'number',
        minLength: 2
      }
    }
  }
};
