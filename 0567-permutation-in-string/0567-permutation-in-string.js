/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  if (s1.length > s2.length) return false;

  for (let i = 0; i <= s2.length - s1.length; i++) {
    const substring = s2.slice(i, i + s1.length);
    const freqCounter = getFreqCounter(substring);
    if (checkPermFromFreqCounter(s1, freqCounter)) return true;
  }

  return false;
};

function getFreqCounter(string) {
  let freqCounter = {};

  for (let char of string) {
    if (freqCounter[char] === undefined) {
      freqCounter[char] = 1;
    } else {
      freqCounter[char]++;
    }
  }

  return freqCounter;
}

function checkPermFromFreqCounter(string, freqCounter) {
  for (let char of string) {
    if (freqCounter[char] === undefined) return false;
    else {
      freqCounter[char]--;
      if (freqCounter[char] === 0) delete freqCounter[char];
    }
  }

  return Object.keys(freqCounter).length === 0;
}
