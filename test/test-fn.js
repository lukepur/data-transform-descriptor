const Q = require('q');

// Simple worker functions to add an array of numbers
module.exports = {
    arraySum: (input) => {
        return input.numbers.reduce((memo, item) => {
            return memo + item;
        }, 0);
    },
    arraySumAsync: (input) => {
        const deferred = Q.defer();
        
        deferred.resolve(
            input.numbers.reduce((memo, item) => {
                return memo + item;
            }, 0)
        );

        return deferred.promise;
    }
}