var expect = require('chai').expect;
var FizzBuzz = require('../src/index').FizzBuzz;

describe('FizzBuzz', () => {
	it('Should return a string', () => {
		expect(FizzBuzz(0)).to.be.a('string');
		expect(FizzBuzz(1)).to.be.a('string');
		expect(FizzBuzz(3)).to.be.a('string');
		expect(FizzBuzz(5)).to.be.a('string');
		expect(FizzBuzz(15)).to.be.a('string');

	});
	it('Should return Fizz when number is only multiple of 3', () =>{
		const res = 'Fizz';
		expect(FizzBuzz(3)).to.be.equal(res);
		expect(FizzBuzz(6)).to.be.equal(res);
		expect(FizzBuzz(9)).to.be.equal(res);
		expect(FizzBuzz(12)).to.be.equal(res);
	});
	it('Should return Fizz when number is only multiple of 5', () =>{
		const res = 'Buzz';
		expect(FizzBuzz(5)).to.be.equal(res);
		expect(FizzBuzz(10)).to.be.equal(res);
		expect(FizzBuzz(20)).to.be.equal(res);
		expect(FizzBuzz(25)).to.be.equal(res);
	});
	it('Should return FizzBuzz when number is  multiple of 3 and 5', () =>{
		const res = 'FizzBuzz';
		expect(FizzBuzz(15)).to.be.equal(res);
		expect(FizzBuzz(30)).to.be.equal(res);
		expect(FizzBuzz(45)).to.be.equal(res);
		expect(FizzBuzz(60)).to.be.equal(res);
	});
	it('Should return num when number is not multiple of 3 or 5', () =>{
		const res = 'FizzBuzz';
		expect(FizzBuzz(1)).to.be.equal('1');
		expect(FizzBuzz(7)).to.be.equal('7');
		expect(FizzBuzz(14)).to.be.equal('14');
	});
  
});