/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0, sum = 0;
    let sumsStore = new Map();
    sumsStore.set(0,1);
    for(let r=0; r<nums.length; r++){
        sum += nums[r];
        let element = sumsStore.get(sum-k);
        if(typeof(element)!= 'undefined'){
            count += element;
        }
        let sumCount = sumsStore.get(sum);
        typeof(sumCount)=='undefined'?sumCount=0:null;
        sumsStore.set(sum,sumCount + 1);
    }
    return count;
};

exports.subarraySum = subarraySum;