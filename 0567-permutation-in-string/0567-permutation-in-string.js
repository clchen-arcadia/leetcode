/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  if (s1.length > s2.length) return false;

  const s1FreqC = getFreqCounter(s1);

  let s2SubstringFreqC = getFreqCounter(s2.slice(0, s1.length));

  let window = [0, s1.length - 1];

  while (window[1] < s2.length) {
    if (checkFreqCounterEquality(s1FreqC, s2SubstringFreqC)) return true;

    const leftChar = s2[window[0]];
    const newChar = s2[window[1] + 1]; // might be undefined

    s2SubstringFreqC[leftChar]--;
    if (s2SubstringFreqC[leftChar] === 0) delete s2SubstringFreqC[leftChar];

    if (s2SubstringFreqC[newChar] === undefined) {
      s2SubstringFreqC[newChar] = 1;
    } else {
      s2SubstringFreqC[newChar]++;
    }

    window = [window[0] + 1, window[1] + 1];
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

function checkFreqCounterEquality(freqC1, freqC2) {
  const keys1 = Object.keys(freqC1);
  if (keys1.length !== Object.keys(freqC2).length) return false;

  for (let key of keys1) {
    if (freqC1[key] !== freqC2[key]) return false;
  }

  return true;
}