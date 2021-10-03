var expect = require('chai').expect;
var lengthOfLongestSubstring = require('../src/index').lengthOfLongestSubstring;

describe('longest substring without repeating characters', () => {
	it('Should return a number', () => {
		expect(lengthOfLongestSubstring("")).to.be.a('number');

		expect(lengthOfLongestSubstring("abcabcbb")).to.be.a('number');
		expect(lengthOfLongestSubstring("bbbbb")).to.be.a('number');
		expect(lengthOfLongestSubstring("pwwkew")).to.be.a('number');
	});
	it('Should return 0 when imput string is empty ', () =>{
		expect(lengthOfLongestSubstring("")).to.be.equals(0);
	});
	it('Should return 1 ', () =>{
		const res = 1;
		expect(lengthOfLongestSubstring("a")).to.be.equal(res);
		expect(lengthOfLongestSubstring("1")).to.be.equal(res);
		expect(lengthOfLongestSubstring(" ")).to.be.equal(res);
		expect(lengthOfLongestSubstring("aaaaa")).to.be.equal(res);
		expect(lengthOfLongestSubstring("bbbbb")).to.be.equal(res);
		expect(lengthOfLongestSubstring("11111")).to.be.equal(res);
		expect(lengthOfLongestSubstring("  ")).to.be.equal(res);
	});
	it('Should return 2 ', () =>{
		const res = 2;
		expect(lengthOfLongestSubstring("ab")).to.be.equal(res);
		expect(lengthOfLongestSubstring("12")).to.be.equal(res);
		expect(lengthOfLongestSubstring("112")).to.be.equal(res);
		expect(lengthOfLongestSubstring("ababbc")).to.be.equal(res);
;
	});
	it('Should return 3 ', () =>{
		const res = 3;
		expect(lengthOfLongestSubstring("abcabcbb")).to.be.equal(res);
		expect(lengthOfLongestSubstring("ababcbb")).to.be.equal(res);
		expect(lengthOfLongestSubstring("abababc")).to.be.equal(res);
		expect(lengthOfLongestSubstring("pwwkew")).to.be.equal(res);
		expect(lengthOfLongestSubstring("dvdf")).to.be.equal(res);
	});
	it('Should return 4 ', () =>{
		const res = 4;
		expect(lengthOfLongestSubstring("abcdbcb")).to.be.equal(res);
		expect(lengthOfLongestSubstring("poiuujh")).to.be.equal(res);
		expect(lengthOfLongestSubstring("pwwkezw")).to.be.equal(res);
	});

  
});