/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let left = 0;
  let best = 0;
  const map = new Map();

  function checkMap(map, k) {
    let maxTuple = [null, 0];
    for (let key in map) {
      if (map[key] > maxTuple[1]) {
        maxTuple[0] = key;
        maxTuple[1] = map[key];
      }
    }

    let sumForK = 0;
    for (let key in map) {
      if (key === maxTuple[0]) continue;
      sumForK += map[key];
    }

    return k >= sumForK;
  }
  // function logMapElements(value, key, map) {
  //   console.log(`m[${key}] = ${value}`);
  // }

  for (let right = 0; right < s.length; right++) {
    // console.log(`for loop executing with right=${right}, `);
    // console.log('map is...');
    // map.forEach(logMapElements);

    const char = s[right];
    if (map[char] === undefined) map[char] = 1;
    else map[char]++;

    while (!checkMap(map, k)) {
      // console.log(`while loop executing with map=...`);
      // map.forEach(logMapElements);


      const leftChar = s[left];
      left++;
      map[leftChar] -= 1;
      if (map[leftChar] === 0) map.delete(leftChar);
    }

    best = Math.max(best, right - left + 1);
  }

  return best;
};

// console.log(
//   characterReplacement(
//   "AABABBA",
//   1
//   )
// );
