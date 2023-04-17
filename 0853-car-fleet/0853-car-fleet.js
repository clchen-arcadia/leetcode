/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, positions, speeds) {
  if (positions.length !== speeds.length) throw new Error("invalid positions and speeds");

  const stitchedVectors = [];

  for (let i = 0; i < positions.length; i++) {
    stitchedVectors.push([positions[i], speeds[i]]);
  }

  stitchedVectors.sort((a, b) => a[0] - b[0]);

  let fleetsCount = 0;
  let timeToTarget = -1;

  while (stitchedVectors.length !== 0) {
    const currVector = stitchedVectors.pop();

    const tempTimeToTarget = (target - currVector[0]) / currVector[1];
    if (tempTimeToTarget > timeToTarget) {
      fleetsCount++;
      timeToTarget = tempTimeToTarget;
    }
  }

  return fleetsCount;
};