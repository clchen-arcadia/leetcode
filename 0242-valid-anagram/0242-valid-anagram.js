/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const letterFreqCounter = {};
    
    for (let char of s) {
        if (letterFreqCounter[char] === undefined) letterFreqCounter[char] = 1;
        else letterFreqCounter[char]++;
    }
    
    for (let char of t) {
        if (letterFreqCounter[char] === undefined) return false;
        else {
            letterFreqCounter[char]--;
            if (letterFreqCounter[char] === 0) delete letterFreqCounter[char];
        }
    }
    
    if (Object.keys(letterFreqCounter).length === 0) return true;
    else return false;
};