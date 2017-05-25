const { expect } = require('chai');
const Transformer = require('../src/index');
const inputConstraints = require('./test-input-constraints');
const outputConstraints = require('./test-output-constraints');
const fn = require('./test-input-fn');

const adder = Transformer(inputConstraints(), outputConstraints(), fn, {name: 'Worker'});

describe('data-transform-descriptor:', () => {
  it('should be a function', () => {
    expect(Transformer).to.be.a('function');
  });

  describe('meta():', () => {
    it('should get/set correct name', () => {
      expect(adder.meta().name).to.eql('Worker');
    });
  
    it('should get/set inputConstraints', () => {
      expect(adder.meta().inputConstraints).to.be.an('array');
      expect(adder.meta().inputConstraints.length).to.eql(1);
    });

    it('should get/set outputConstraints', () => {
      expect(adder.meta().outputConstraints).to.be.an('array');
      expect(adder.meta().outputConstraints.length).to.eql(1);
    });
  });

  describe('validateInput():', () => {
    it('should return undefined for correct input', () => {
      expect(adder.validateInput({numbers: [1, 2]})).to.be.undefined;
    });

    it('should return correct message for incorrect input', () => {
      const result = adder.validateInput({numbers: ['1', 2]}).inputErrors;
      expect(result[0].target).to.eql('numbers.0');
      expect(result[0].message).to.eql('All numbers must be of type number');
    });
  });

  describe('run():', () => {
    it('should return correct output for valid input', () => {
      expect(adder.run({numbers: [1,2,3]})).to.eql(6);
    });

    it('should return messages for incorrect input', () => {
      const result = adder.run({numbers: ['1', 2]}).inputErrors;
      expect(result.length).to.eql(1);
      expect(result[0].target).to.eql('numbers.0');
      expect(result[0].message).to.eql('All numbers must be of type number');
    });

    it('should return messages for null input', () => {
      const result = adder.run({}).inputErrors;
      expect(result.length).to.eql(1);
      expect(result[0].target).to.eql('numbers');
      expect(result[0].message).to.eql('numbers is required');
    });
  });
});
