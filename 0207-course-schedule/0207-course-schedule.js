/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const adjacencyList = {};
  const setPossible = new Set();

  for (let i = 0; i < numCourses; i++) {
    adjacencyList[i] = [];
  }

  for (let prereq of prerequisites) {
    adjacencyList[prereq[0]].push(prereq[1].toString());
  }

  while (_scanAdjacencyList()) {
    console.log(`_scanAdjacencyList executed`);
  }

  return numCourses === setPossible.size;

  function _scanAdjacencyList() {
    let isImproved = false;

    for (let key of Object.keys(adjacencyList)) {
      if (adjacencyList[key].every(e => setPossible.has(e))) {
        isImproved = true;
        setPossible.add(key);
        delete adjacencyList[key];
      }
    }

    return isImproved;
  }
};

