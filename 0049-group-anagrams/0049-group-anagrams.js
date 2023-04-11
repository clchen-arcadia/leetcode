/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const anagramsHashMap = new Object();

    for (let str of strs) {
      const sortedStr = str.split('').sort().join();
      if (anagramsHashMap[sortedStr] === undefined) {
        anagramsHashMap[sortedStr] = [str];
      } else {
        anagramsHashMap[sortedStr].push(str);
      }
    }

    return Object.values(anagramsHashMap);
};