const { expect } = require('chai');
const Transformer = require('../src/index');
const inputConstraints = require('./test-input-constraints');
const outputConstraints = require('./test-output-constraints');
const fns = require('./test-fn');

const adderSyncFn = Transformer(inputConstraints(), outputConstraints(), fns.arraySum, {name: 'Worker'});
const adderAsyncFn = Transformer(inputConstraints(), outputConstraints(), fns.arraySumAsync, {name: 'Worker'});

describe('runAsync', () => {
  describe('sync fn', () => {
    it('should return correct output for valid input', () => {
      return adderSyncFn.runAsync({numbers: [1,2,3,4]})
      .then(output => {
        expect(output).to.eql(10);
      });
    });

    it('should return messages for incorrect input', () => {
      return adderSyncFn.runAsync({numbers: ['1', 2]})
      .then(output => {
        const result = output.inputErrors;
        expect(result.length).to.eql(1);
        expect(result[0].target).to.eql('numbers.0');
        expect(result[0].message).to.eql('numbers.0 is not of type number (got string)');
      });
    });
  });

  describe('async fn', () => {
    it('should return correct output for valid input', () => {
      return adderAsyncFn.runAsync({numbers: [1,2,3,4]})
      .then(output => {
        expect(output).to.eql(10);
      });
    });

    it('should return messages for incorrect input', () => {
      return adderAsyncFn.runAsync({numbers: ['1', 2]})
      .then(output => {
        const result = output.inputErrors;
        expect(result.length).to.eql(1);
        expect(result[0].target).to.eql('numbers.0');
        expect(result[0].message).to.eql('numbers.0 is not of type number (got string)');
      });
    });
  });
});