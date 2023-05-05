/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const combosOutput = [];

  function _combinationSum(runningCombo, runningTarget) {
    if (runningTarget === 0) {
      if (combosOutput.every(c => !isEqualArrays(c, runningCombo))) {
        combosOutput.push(runningCombo.slice());
      }
      return;
    }

    for (const candidate of candidates) {
      if (candidate <= runningTarget) {
        runningCombo.push(candidate);
        runningTarget -= candidate;

        _combinationSum(runningCombo, runningTarget);

        runningCombo.pop();
        runningTarget += candidate;
      }
    }
  }

  _combinationSum([], target);

  return combosOutput;
};

function isEqualArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let freqCount = {};
  for (let x of arr1) {
    if (freqCount[x] === undefined) {
      freqCount[x] = 1;
    } else {
      freqCount[x]++;
    }
  }

  for (let y of arr2) {
    if (freqCount[y] === undefined) {
      return false;
    } else {
      freqCount[y]--;
      if (freqCount[y] === 0) {
        delete freqCount[y];
      }
    }
  }

  return Object.keys(freqCount).length === 0;
}

// combinationSum([2,3,6,7], 7);
