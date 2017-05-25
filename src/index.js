const Validator = require('data-structure-validator');
const validatorContext = {
  isNumber: value => typeof value === 'number',
  arraySum: arr => arr.reduce((memo, item) => memo + item, 0),
  greaterThanOrEqual: (num, target) => num >= target
};

module.exports = function (inputConstraints, outputConstraints, fn, meta = {}) {
  const inputValidator = new Validator(inputConstraints, validatorContext);
  const outputValidator = new Validator(outputConstraints, validatorContext);
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
      const results = inputValidator.validate(input);
      if (results) {
        return { inputErrors: results };
      }
      return undefined;
    },
    run (input) {
      // validate input
      const inputValidateResults = inputValidator.validate(input);
      if (inputValidateResults) return { inputErrors: inputValidateResults };

      // run fn
      const output = fn(input);
      
      // validate output
      const outputValidateResults = outputValidator.validate({ output });
      if (outputValidateResults) return { outputErrors: outputValidateResults}

      // completed successfully
      return output;
    }
  }
};
