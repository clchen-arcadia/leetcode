/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const nodes = [];

  for (let i = 0; i < numCourses; i++) {
    nodes.push(new Node(i));
  }

  for (let prereq of prerequisites) {
    nodes[prereq[1]].prereqs.push(nodes[prereq[0]]);
  }

  const coursesAble = new Set(nodes.filter(n => n.prereqs.length === 0));

  let madeProgress = false;

  do {
    madeProgress = false;

    for (let node of nodes) {
      if (coursesAble.has(node)) continue;
      if (node.prereqs.every(n => coursesAble.has(n))) {
        coursesAble.add(node);
        madeProgress = true;
      }
    }
  } while(madeProgress)

  return coursesAble.size === numCourses;
};

class Node {
  constructor(id, prereqs) {
    this.id = id;
    this.prereqs = prereqs === undefined ? [] : prereqs;
  }
}
