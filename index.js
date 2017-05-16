const validate = require('validate.js');

validate.validators.isArray = function (value, opts, key, attributes) {
  return Array.isArray(value) ? null : 'is not an array';
};

module.exports = function (inputContstraints, outputConstraints, fn, meta = {}) {
  console.log('validate:', validate({input: []}, inputContstraints));
  console.log('inputContstraints:', inputContstraints);
  console.log('meta:', meta);

  return {
    meta () {
      return JSON.stringify(meta, null, 2);
    },
    validateInput (input) {
      return validate(input, inputContstraints);
    },
    run (input) {
      const validateResults = validate(input, inputContstraints);
      if (validateResults) return validateResults;
      return fn(input);
    }
  }
};
