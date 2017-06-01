const Q = require('q');

// Simple worker functions to add an array of numbers
module.exports = {
    arraySum: (input, ctx) => {
        const { reduce } = ctx;
        return reduce(input.numbers, (memo, item) => {
            return memo + item;
        }, 0);
    },
    arraySumAsync: (input, ctx) => {
        const deferred = Q.defer();
        const { reduce } = ctx;
        
        deferred.resolve(
            reduce(input.numbers, (memo, item) => {
                return memo + item;
            }, 0)
        );

        return deferred.promise;
    }
}