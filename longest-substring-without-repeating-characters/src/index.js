/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let count = 0;
    let usedCharachtersKeys = []; 
    let usedCharachtersMap = new Map();
    let sArray = s.split('');

    for( let r=0, l=0; r<sArray.length; r++){
        let value = sArray[r];
        if(usedCharachtersKeys.indexOf(value) >= 0){
            l = Math.max(usedCharachtersMap.get(value),l);
        }
        else{
            usedCharachtersKeys.push(value);
        }
        count = Math.max(count, r - l + 1);
        usedCharachtersMap.set(value, r + 1);
        
        
    }
    
    return count;
};

exports.lengthOfLongestSubstring = lengthOfLongestSubstring;