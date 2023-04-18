/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let [leftM, rightM] = [0, matrix.length - 1];
    let checkM = null;

    while (leftM <= rightM) {
      checkM = Math.floor((leftM + rightM) / 2);
      const checkVal = matrix[checkM][0];

      if (checkVal === target) {
        return true;
      } else if (checkVal > target) {
        rightM = checkM - 1;
      } else if (checkVal < target) {
        //we want the largest row idx M with matrix[M][0] less than target
        leftM = checkM;
      }

      if (rightM - leftM <= 1) {
        if (
          matrix[leftM]?.[0] === target
          || matrix[rightM]?.[0] === target
          ) return true;
        else if(matrix[rightM]?.[0] < target) {
          checkM = rightM;
          break;
        } else {
          checkM = leftM;
          break;
        }
      }
    }

    // binary search on row idx checkM

    let [leftN, rightN] = [0, matrix[checkM].length - 1]
    let checkN = null;

    while (leftN <= rightN) {
      checkN = Math.floor((leftN + rightN) / 2);
      const checkVal = matrix[checkM][checkN];

      if (checkVal === target) return true;
      else if (checkVal > target) {
        rightN = checkN - 1;
      } else if (checkVal < target) {
        leftN = checkN + 1;
      }

    }

    return false;

};