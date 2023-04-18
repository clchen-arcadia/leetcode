/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  if (piles.length > h) throw new Error(`Koko can't eat all the bananas`);

  const maxPile = Math.max(...piles);

  let [left, right] = [0, maxPile];
  let bestAns = null;

  while (left <= right) {
    const curr = Math.floor((left + right) / 2);

    let hoursCount = 0;
    for (let pile of piles) {
      hoursCount += Math.ceil(pile / curr);
    }

    if (hoursCount > h) {
      left = curr + 1;
    } else if (hoursCount <= h) {
      bestAns = curr;
      right = curr - 1;
    }
  }

  return bestAns;
};
