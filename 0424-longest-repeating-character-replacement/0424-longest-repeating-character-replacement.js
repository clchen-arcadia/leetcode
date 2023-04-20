/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let [left, right] = [0, 0];
  let freqCounter = {};
  freqCounter.longest = 0;
  let outputLength = 0;

  while (right < s.length) {
    const char = s[right];

    if (freqCounter[char] === undefined) {
      freqCounter[char] = 1;
    } else {
      freqCounter[char]++;
    }

    freqCounter.longest = Math.max(freqCounter.longest, freqCounter[char]);

    let window = right - left + 1;

    const canSlide = k < window - freqCounter.longest;

    if (canSlide) {
      const leftChar = s[left];
      freqCounter[leftChar]--;

      left++;
      window = right - left + 1;
    }

    outputLength = Math.max(outputLength, window);
    right++;
  }

  return outputLength;
};