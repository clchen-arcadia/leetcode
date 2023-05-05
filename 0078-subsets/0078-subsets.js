/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let outputSubsets = [];

  function _subsets(partialSet) {
    // console.log(`_subsets invoked with ${partialSet} which has length ${partialSet.length}`);

    outputSubsets.push(partialSet.slice());

    for (let num of nums) {
      // console.log(`for loops started with num=${num}`);

      if (!partialSet.includes(num)) {
        // console.log("you got here");

        partialSet.push(num);

        // console.log(`partial Set is now ${partialSet}`);
        if (outputSubsets.every(s => !isEqualArrays(s, partialSet))) {
          // outputSubsets.push(partialSet);
          // console.log("you got here 2");
          _subsets(partialSet);
        }
        partialSet.pop();
      }
    }


  }

  _subsets([]);

  return outputSubsets;
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