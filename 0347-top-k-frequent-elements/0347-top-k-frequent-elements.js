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

  const keys = Object.keys(freqCount);

  const topElements = [];

  // Seed first k elements as tuples, first the element, then its count
  for (let i = 0; i < k; i++) {
    topElements.push([keys[i], freqCount[keys[i]]]);
  }

  // Sort the tuples from highest freq count to lowest
  topElements.sort((a, b) => b[1] - a[1]);

  // Loop over the remaining elements, if the count is higher than the lowest count,
  // then replace that element tuple and resort the list.
  for (let i = k; i < keys.length; i++) {
    if (freqCount[keys[i]] > topElements[topElements.length - 1][1]) {
      topElements[topElements.length - 1] = [keys[i], freqCount[keys[i]]];
      topElements.sort((a, b) => b[1] - a[1]);
    }
  }

  // Clean the list by remove the tuple count, and leaving only the element
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
