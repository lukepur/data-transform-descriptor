const Q = require('q');
const Validator = require('data-structure-validator');
const validatorContext = require('./validation-context/validation-context');

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

    validateInput (input, isAsync = false) {
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
      if (outputValidateResults) return { outputErrors: outputValidateResults };

      // completed successfully
      return output;
    },

    runAsync (input) {
      const deferred = Q.defer();
      // validate input
      const inputValidateResults = inputValidator.validate(input);
      if (inputValidateResults) deferred.resolve({ inputErrors: inputValidateResults });

      // run fn
      Q(fn(input))
      .then(output => {
        // validate output
        const outputValidateResults = outputValidator.validate({ output });
        if (outputValidateResults) deferred.resolve({ outputErrors: outputValidateResults });

        // completed successfully
        deferred.resolve(output);
      });
      
      return deferred.promise;
    }
  }
};
