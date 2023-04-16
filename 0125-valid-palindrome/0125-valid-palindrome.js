/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let charsLower = Array.from(s.toLowerCase());

    charsLower = charsLower.filter(char => (char.match(/[0-9a-z]/)));

    cleanedString = charsLower.join('');
    reverseCleanedString = charsLower.reverse().join('');

    return cleanedString === reverseCleanedString;
};
