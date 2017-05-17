module.exports = (validate) => {
  validate.validators.isNumber = function (value) {
    return validate.isNumber(value) ? null : `must be a number (got ${typeof value})`;
  };

  validate.validators.isString = function (value) {
    return validate.isString(value) ? null : `must be a string (got ${typeof value}`;
  }
}