module.exports = (validate) => {
  validate.validators.isNumber = function (value) {
    return validate.isNumber(value) ? null : `must be a number (got ${typeof value})`;
  };

  validate.validators.isString = function (value) {
    return validate.isString(value) ? null : `must be a string (got ${typeof value}`;
  }

  validate.validators.dataType = function (value, type) {
    switch(type) {
      case 'string':
        return validate.isString(value) ? null : `must be a string (got ${typeof value}`;
      case 'number':
        return validate.isNumber(value) ? null : `must be a number (got ${typeof value})`;
      case 'object':
        return typeof value === 'object' ? null : `must be an object (got ${typeof value})`;
      case 'array':
        return Array.isArray(value) ? null : `must be an array (got ${typeof value})`;
      case 'array_of_strings': {
        if (!Array.isArray(value)) return `must be an array of strings (got ${typeof value})`;
        let allValues = value.reduce((memo, item) => memo && typeof item === 'string', true);
        return allValues ? null : `must be an array of strings (some items aren't "string" type)`;
      }
      case 'array_of_numbers': {
        if (!Array.isArray(value)) return `must be an array of numbers (got ${typeof value})`;
        let allValues = value.reduce((memo, item) => memo && typeof item === 'number', true);
        return allValues ? null : `must be an array of numbers (some items aren't "number" type)`;
      }
      case 'array_of_objects':{
        if (!Array.isArray(value)) return `must be an array of objects (got ${typeof value})`;
        let allValues = value.reduce((memo, item) => memo && typeof item === 'object', true);
        return allValues ? null : `must be an array of object (some items aren't "object" type)`;
      }
    }
  }
}
