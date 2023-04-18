/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const [rows, cols] = [matrix.length, matrix[0].length];

  let [topRow, botRow] = [0, rows - 1];
  let checkRow = null;

  while (topRow <= botRow) {
    checkRow = Math.floor((topRow + botRow) / 2);
    const checkValSmall = matrix[checkRow][0];
    const checkValLarge = matrix[checkRow][cols - 1];

    if (checkValSmall > target) {
      botRow = checkRow - 1;
    } else if (checkValLarge < target) {
      topRow = checkRow + 1;
    } else {
      break;
    }
  }

  if (topRow > botRow) return false;

  let [left, right] = [0, cols - 1];

  while (left <= right) {
    const checkCol = Math.floor((left + right) / 2);
    const checkVal = matrix[checkRow][checkCol];

    if (checkVal > target) {
      right = checkCol - 1;
    } else if (checkVal < target) {
      left = checkCol + 1;
    } else {
      return true;
    }
  }

  return false;
};