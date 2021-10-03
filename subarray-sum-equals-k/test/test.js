var expect = require('chai').expect;
var subarraySum = require('../src/index').subarraySum;

describe('subarraySum equals K', () => {
	it('Should return a number', () => {
		expect(subarraySum([1,1,1],2)).to.be.a('number');
		expect(subarraySum([1,2,3],3)).to.be.a('number');
	});
	it('Should return 0  ', () =>{
		const res = 0;
		expect(subarraySum([1,1,1],5)).to.be.equals(res);
	});
	it('Should return 1 ', () =>{
		const res = 1;
		expect(subarraySum([1,1,5],5)).to.be.equals(res);
	});
	it('Should return 2 ', () =>{
		const res = 2;
		expect(subarraySum([1,2,3],3)).to.be.equals(res);
		expect(subarraySum([1,1,1],2)).to.be.equals(res);
	});
	it('Should return 3 ', () =>{
		const res = 3;
		expect(subarraySum([1,1,1,1],2)).to.be.equals(res);
		expect(subarraySum([1,-1,0],0)).to.be.equals(res);

	});
  
});