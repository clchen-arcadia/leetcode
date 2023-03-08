/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const stringNum = String(x);
    const upToIdx = Math.floor(stringNum.length / 2) - 1;
    for (let i=0; i <= upToIdx; i++) {
        if (stringNum[i] !== stringNum[stringNum.length - 1 - i]) {
            return false;
        }
    }
    return true;
};