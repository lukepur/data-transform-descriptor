// Simple worker function to add an array of numbers
module.exports = (input) => {
    return input.numbers.reduce((memo, item) => {
        return memo + item;
    }, 0);
}