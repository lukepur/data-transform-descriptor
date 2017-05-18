const validate = require('validate.js');
require('./validators/validators')(validate);

module.exports = function (inputConstraints, outputConstraints, fn, meta = {}) {
  return {
    meta () {
      return Object.assign(
        {},
        meta,
        {
          inputConstraints,
          outputConstraints
        }
      );
    },
    validateInput (input) {
      return validate(input, inputConstraints);
    },
    run (input) {
      // validate input
      const inputValidateResults = validate(input, inputConstraints);
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
