const papa = require('papaparse');
const lodash = require('lodash');

module.exports = lodash.assign(
  {},
  lodash,
  {
    papaparse: papa
  }
);