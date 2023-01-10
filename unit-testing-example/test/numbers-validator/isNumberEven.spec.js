/* eslint-disable max-len */
const {expect} = require('chai');
const {describe, beforeEach, it} = require('mocha');
const NumbersValidator = require('C:/Users/Andrei_Kramski/source/repos/unit-testing-example/app/numbers-validator.js');

describe('isNumberEven', function() {
  let validator;

  beforeEach(function() {
    validator = new NumbersValidator();
  });

  afterEach(function() {
    validator = null;
  });

  it('should return true if number is even', function() {
    expect(validator.isNumberEven(4)).to.be.equal(true);
  });

  it('should throw an error when provided a string', () =>{
    expect(()=>{
      validator.isNumberEven('nod');
    }).to.throw('[nod] is not of type "Number" it is of type "string"');
  });
});
