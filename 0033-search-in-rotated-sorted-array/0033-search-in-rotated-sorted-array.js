/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length === 0) return -1;
  if (nums.length === 1) return nums[0] === target ? 0 : -1;

  const idxOfRotation = findMinIdx(nums);
  console.log("idxOfRotation is", idxOfRotation);

  function normRot(idx, len = nums.length, rot = idxOfRotation) {
    return (idx + len - rot) % len;
  }
  function getRot(idx, len = nums.length, rot = idxOfRotation) {
    return (idx + rot) % len;
  }

  let left = 0;
  let right = nums.length - 1;

  while ((left) <= (right)) {
    console.log(`while loops with left = ${left} and right = ${right}`);

    const curr = getRot(Math.floor(((left) + (right)) / 2));

    if (nums[curr] < target) {
      left = (normRot(curr) + 1);
    } else if (nums[curr] > target) {
      right = (normRot(curr) - 1);
    } else {
      return curr;
    }
  }

  return -1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMinIdx = function(nums) {
  if (nums.length === 0) throw new Error('invalid input');
  if (nums.length === 1) return 0;

  let [left, right] = [0, nums.length - 1];
  const [leftVal, rightVal] = [nums[left], nums[right]];

  if (leftVal <= rightVal) return left;

  let currLeastIdx = null;

  while (left <= right) {
      const curr = Math.floor((left + right) / 2);

      const isOnLesserSide = nums[curr] <= rightVal;

      if (isOnLesserSide) {
          currLeastIdx = curr;
          right = curr - 1;
      } else {
          left = curr + 1;
      }
  }

  return currLeastIdx;
};