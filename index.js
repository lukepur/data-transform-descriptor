const validate = require('validate.js');
require('./validators/validators')(validate);

module.exports = function (inputContstraints, outputConstraints, fn, meta = {}) {
  return {
    meta () {
      return JSON.stringify(Object.assign({}, meta, {
        inputContstraints,
        outputConstraints
      }), null, 2);
    },
    validateInput (input) {
      return validate(input, inputContstraints);
    },
    run (input) {
      // validate input
      const inputValidateResults = validate(input, inputContstraints);
      if (inputValidateResults) return { inputErrors: inputValidateResults };

      // run fn
      const output = fn(input);
      
      // validate output
      const outputValidateResults = validate({ output }, outputConstraints);
      if (outputValidateResults) return { outputErrors: outputValidateResults}

      // completed successfully
      return output;
    }
  }
};
