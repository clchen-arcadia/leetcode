/**
 * Pseudocode:
 *    Scan over the nums array once to build the freq counter, O(N) process.
 *    Then scan over the keys of the freq counter once, keeping the k elements of highest count,
 *    this should be no slower than O(N) also.
 *    Edit, need to sort by highest count because any replacement must replace the element
 *    with the lowest count.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const freqCount = buildLetterFreqCounter(nums);

  console.log("freqCount is", freqCount);

  const keys = Object.keys(freqCount);

  const topElements = [];

  for (let i = 0; i < k; i++) {
    topElements.push([keys[i], freqCount[keys[i]]]);
  }

  topElements.sort((a, b) => b[1] - a[1]);

  console.log("topElements sorted to", topElements);
  for (let tuple of topElements) {
    console.log("tuple is ", tuple);

  }

  for (let i = k; i < keys.length; i++) {
    if (freqCount[keys[i]] > topElements[topElements.length - 1][1]) {
      topElements[topElements.length - 1] = [keys[i], freqCount[keys[i]]];
      topElements.sort((a, b) => b[1] - a[1]);
    }
  }

  for (let idx in topElements) {
    topElements[idx] = topElements[idx][0];
  }

  return topElements;
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

console.log(topKFrequent([6, 0, 1, 4, 9, 7, -3, 1, -4, -8, 4, -7, -3, 3, 2, -3, 9, 5, -4, 0],
  6));
