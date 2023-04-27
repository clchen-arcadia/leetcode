/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (intervals.length === 0) return [newInterval];

  let mergeIndices = [];
  let leftFreeMinBorder = null;
  let rightFreeMaxBorder = null;

  for (let i = 0; i < intervals.length; i++) {
    if (
      isInInterval(intervals[i], newInterval[0])
      && isInInterval(intervals[i], newInterval[1])
    ) {
      return intervals;
    }

    if (isInInterval(newInterval, intervals[i][0])
      || isInInterval(newInterval, intervals[i][1])
    ) {
      mergeIndices.push(i);
    }

    if (intervals[i][1] < newInterval[0] && leftFreeMinBorder === null) {
      leftFreeMinBorder = i;
    }
    if (intervals[i][0] > newInterval[1] && rightFreeMaxBorder === null) {
      rightFreeMaxBorder = i;
    }
  }

  if (mergeIndices.length === 0) {
    if (leftFreeMinBorder === null) {
      intervals.unshift(newInterval);
      return intervals;
    }
    if (rightFreeMaxBorder === null) {
      intervals.push(newInterval);
      return intervals;
    }

    intervals.splice(rightFreeMaxBorder, 0, newInterval);
    return intervals;
  }

  const [firstMergeIdx, lastMergeIdx] = [
    mergeIndices[0],
    mergeIndices[mergeIndices.length - 1]
  ];
  const newStitchedInterval = [
    Math.min(newInterval[0], intervals[firstMergeIdx][0]),
    Math.max(newInterval[1], intervals[lastMergeIdx][1])
  ];

  intervals.splice(firstMergeIdx, mergeIndices.length, newStitchedInterval);
  return intervals;
};

function isInInterval(interval, val) {
  return val >= interval[0] && val <= interval[1];
}

function mergeIntervals(inter1, inter2) {
  return [inter1[0], inter2[1]];
}
