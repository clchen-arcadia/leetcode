/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length === 0) return true;
    
    let start = 0;
    let end = s.length - 1;
    
    while (start < end) {
        if (!s[start].toLowerCase().match(/[0-9a-z]/)) {
            start++;
        } else if(!s[end].toLowerCase().match(/[0-9a-z]/)){
            end--;
        } else {
            if(s[start].toLowerCase() !== s[end].toLowerCase()) {
                return false;
            }
            
            start++;
            end--;
        } 
    }
    
    return true;
};
