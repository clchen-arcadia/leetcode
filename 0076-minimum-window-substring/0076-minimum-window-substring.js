/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let [left, right] = [0, 0];
  let bestSubstring = null;

  const tFreqCounter = getFreqCounter(t);

  let sum = 0;
  for (let key of Object.keys(tFreqCounter)) {
    sum += tFreqCounter[key];
  }
  tFreqCounter.sum = sum;

  while (right < s.length) {

    // console.log(`execute while loop with right = ${right}`);
    // console.log(`tFreqCount is `);
    // for (let key of Object.keys(tFreqCounter)) {
    //   console.log(`key=${key}, val=${tFreqCounter[key]}`);
    // }


    const char = s[right];

    if (tFreqCounter[char] !== undefined) {
      tFreqCounter[char]--;
      if (tFreqCounter[char] >= 0) tFreqCounter.sum--;
    }

    if (tFreqCounter.sum === 0) {
      const validSubstring = s.slice(left, right + 1);

      if (bestSubstring === null) {
        // console.log(`bestSubstring was ${bestSubstring}, assigning ${validSubstring}`);
        bestSubstring = validSubstring;
      } else if (validSubstring.length < bestSubstring.length) {
        // console.log(`bestSubstring was ${bestSubstring}, assigning ${validSubstring}`);
        bestSubstring = validSubstring;
      }

      while (true) {

        // console.log(`execute nested while loop with left = ${left}`);
        // console.log(`tFreqCount is `);
        // for (let key of Object.keys(tFreqCounter)) {
        //   console.log(`key=${key}, val=${tFreqCounter[key]}`);
        // }

        const currLeftChar = s[left];

        if (tFreqCounter[currLeftChar] !== undefined) {
          tFreqCounter[currLeftChar]++;
          if (tFreqCounter[currLeftChar] > 0) {
            // no longer valid
            tFreqCounter[currLeftChar]--;
            break;
          }
        }

        left++;

        const betterSubstring = s.slice(left, right + 1);
        if (betterSubstring.length < bestSubstring.length) {
          // console.log(`bestSubstring was ${bestSubstring}, assigning ${betterSubstring}`);

          bestSubstring = betterSubstring;
        }
      }
    }

    right++;
  }

  if (bestSubstring === null) return '';
  else return bestSubstring;
};

// function satisfiesSubstring(freqC, freqCReq) {
//   const freqCReqCopy = JSON.parse(JSON.stringify(freqCReq));

//   for (let key of Object.keys(freqC)) {
//     if (freqCReqCopy[char] !== undefined) {
//       freqCReqCopy[char] -= freqC[key];
//       if (freqCReqCopy[char] <= 0) delete freqCReqCopy[char];
//     }
//   }

//   return Object.keys(freqCReqCopy).length === 0;
// }

function getFreqCounter(str) {
  const freqCounter = {};

  for (let char of str) {
    if (freqCounter[char] === undefined) {
      freqCounter[char] = 1;
    } else {
      freqCounter[char]++;
    }
  }

  return freqCounter;
}

// console.log(minWindow(
//   "ADOBECODEBANC",
//   "ABC"
// ));
