module.exports = function (validate) {
  require('./array')(validate);
  require('./type')(validate);
}