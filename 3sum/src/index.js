/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort();
    var result = [];
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let k=j+1; k<nums.length; k++){
                if(i==j){
                    break;
                }
                if(i !== k && j !== k){
                    let sum = nums[i] + nums[j] + nums[k];
                    if(sum == 0){
                        if(result.indexOf([nums[i],nums[j],nums[k]]) == -1){
                            result.push([nums[i],nums[j],nums[k]]);
                        }
                    }
                }
            }
        }
    }
    console.log('========== Result =========');
    console.log(result);
    return result;
};

exports.threeSum = threeSum;