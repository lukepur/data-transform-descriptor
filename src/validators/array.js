module.exports = function (validate) {
  validate.validators.minArrayLength = function (value, minLength) {
    if (!Array.isArray(value)) return 'must be an array to have a min array length';
    return value.length < minLength ? `must contain at least ${minLength} members (got ${value.length})` : null;
  }
}
