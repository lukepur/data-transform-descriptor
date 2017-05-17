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
