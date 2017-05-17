module.exports = function (validate) {
  validate.validators.isArrayOf = function (value, opts, key, attributes) {
    if (!Array.isArray(value)) return 'is not an array';

    // enforce type
    if (opts.type) {
      const allMembersOfType = value.reduce((memo, item) => {
        return memo && typeof item === opts.type;
      }, true);
      if (!allMembersOfType) return `should only contain members of type ${opts.type}`;
    }

    // enforce minLength
    if (opts.minLength && value.length < opts.minLength) return `must contain at least ${opts.minLength} members`;

    return null;
  };
}