/* eslint-disable max-len */
const {expect} = require('chai');
const {describe, beforeEach, it} = require('mocha');
const NumbersValidator = require('C:/Users/Andrei_Kramski/source/repos/unit-testing-example/app/numbers-validator.js');

describe('getEvenNumbersFromArray', function() {
  let validator;

  beforeEach(function() {
    validator = new NumbersValidator();
  });

  it('should return an array of even numbers when provided with proper data',
      function() {
        const arrayOfRandomNumbers = [2, 7, 12, 17, 1, 55, 32, 10];
        expect(validator.getEvenNumbersFromArray(arrayOfRandomNumbers))
            .to.be.eql([2, 12, 32, 10]);
      });

  it('should throw an error if array is not full of numbers', () => {
    const arrayOfValues = [5, '2', 11, 222];
    expect(() => {
      validator.getEvenNumbersFromArray(arrayOfValues);
    }).to.throw('[5, 2, 11, 222] is not an array of "Numbers"');
  });
});
