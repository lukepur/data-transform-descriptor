module.exports = (input) => {
    return input.numbers.reduce((memo, item) => {
        return memo + item;
    }, 0);
}