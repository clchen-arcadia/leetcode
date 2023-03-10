/**
 * Pseudocode:
 *    create a letter-freq counter for each word
 *    use shadow equality checker to compare letter-freq counters to group anagrams
 *    scan and clean this list to get the nested array output
 *
 * Pseudocode 2:
 *    comparing two strings sorted will be equal IFF they are anagrams
 *    leverage this to speed up the algorithm
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

  const nestedTaggedWords = [];

  for (let str of strs) {
    const sortedString = Array.from(str).sort().join('');
    const insertTuple = [[str], sortedString];

    let insertBool = false;
    for (let tuple of nestedTaggedWords) {
      if (tuple[1] === insertTuple[1]) {
        tuple[0].push(str);
        insertBool = !insertBool;
        break;
      }
    }
    if (!insertBool) {
      nestedTaggedWords.push(insertTuple);
    }

  }

  const nestedWordsCleaned = [];

  for (let tuple of nestedTaggedWords) {
    nestedWordsCleaned.push(tuple[0]);
  }

  return nestedWordsCleaned;
};

function buildLetterFreqCounter(str) {
  const letterFreqCounter = {};

  for (let char of str) {
    if (letterFreqCounter[char] === undefined) {
      letterFreqCounter[char] = 1;
    }
    else {
      letterFreqCounter[char]++;
    }
  }

  return letterFreqCounter;
}

function checkShallowEquality(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}
