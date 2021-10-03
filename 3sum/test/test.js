var expect = require('chai').expect;
var threeSum = require('../src/index').threeSum;

describe('3sum', () => {
	it('Should return an Array', () => {
		expect(threeSum([-1,0,1,2,-1,-4])).to.be.an('array');
		expect(threeSum([])).to.be.an('array');
		expect(threeSum([0])).to.be.an('array');
	});
	it('Should return empty  ', () =>{
		const res = [];
		expect(threeSum([])).to.be.an('array').that.is.empty;
		expect(threeSum([0])).to.be.an('array').that.is.empty;
	});
	it('Should return [[-1,-1,2],[-1,0,1]] ', () =>{
		const res = [[-1,-1,2],[-1,0,1]].toString();
		expect(threeSum([-1,0,1,2,-1,-4]).toString()).to.be.equals(res);
	});
  
});