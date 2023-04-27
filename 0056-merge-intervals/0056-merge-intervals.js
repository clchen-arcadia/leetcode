/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const mergeGroups = [];

  for (let i = 0; i < intervals.length - 1; i++) {
    if (isInInterval(intervals[i], intervals[i + 1][0])) {
      const group = [i, i + 1];

      let j = i + 2;
      while (j < intervals.length) {
        if (
          group.map(idx => intervals[idx]).some(
            inter => isInInterval(inter, intervals[j][0])
          )
        ) {
          group.push(j);
          j++;
        } else {
          break;
        }
      }

      mergeGroups.push(group);
      i = j - 1;
    }
  }

  mergeGroups.reverse();

  for (let group of mergeGroups) {
    intervals.splice(
      group[0],
      group.length,
      mergeMany(...group.map(i => intervals[i]))
    );
  }

  return intervals;
};

function isInInterval(interval, val) {
  return val >= interval[0] && val <= interval[1];
}

function mergeMany(...intervals) {
  return [
    Math.min(...intervals.map(i => i[0])),
    Math.max(...intervals.map(i => i[1]))
  ];
}
