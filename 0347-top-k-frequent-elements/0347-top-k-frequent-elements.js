/**
 * Pseudocode:
 *    Scan over the nums array once to build the freq counter, O(N) process.
 *    Then scan over the keys of the freq counter once, keeping the k elements of highest count,
 *    this should be no slower than O(N) also.
 *    Edit, need to sort by highest count because any replacement must replace the element
 *    with the lowest count.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const freqCount = buildLetterFreqCounter(nums);
  const keys = Object.keys(freqCount);

  const topElementsHeap = new MaxHeap((a, b) => a[1] - b[1]);

  for (const [key, val] of Object.entries(freqCount)) {
    topElementsHeap.push([key, val]);
  }


  const topElements = [];

  for (let i=0; i < k; i++) {

    const topElement = topElementsHeap.pop();


    topElements.push(topElement[0]);
  }

  // Old implementation, keeping a sorted list of k elements and replacing the lowest count each time
  // const topElements = [];
  // // Seed first k elements as tuples, first the element, then its count
  // for (let i = 0; i < k; i++) {
  //   topElements.push([keys[i], freqCount[keys[i]]]);
  // }

  // // Sort the tuples from highest freq count to lowest
  // topElements.sort((a, b) => b[1] - a[1]);

  // // Loop over the remaining elements, if the count is higher than the lowest count,
  // // then replace that element tuple and resort the list.
  // for (let i = k; i < keys.length; i++) {
  //   if (freqCount[keys[i]] > topElements[topElements.length - 1][1]) {
  //     topElements[topElements.length - 1] = [keys[i], freqCount[keys[i]]];
  //     topElements.sort((a, b) => b[1] - a[1]);
  //   }
  // }

  // // Clean the list by remove the tuple count, and leaving only the element
  // for (let idx in topElements) {
  //   topElements[idx] = topElements[idx][0];
  // }

  return topElements;
};

function buildLetterFreqCounter(str) {
  const letterFreqCounter = {};

  for (let char of str) {
    if (letterFreqCounter[char] === undefined) {
      letterFreqCounter[char] = 1;
    }
    else {
      letterFreqCounter[char]++;
    }
  }

  return letterFreqCounter;
}

class MaxHeap {
  constructor(comparator) {
    this.tree = [];
    this.comparator = comparator || ((a, b) => a - b);
  }

  size() {
    return this.tree.length;
  }

  isEmpty() {
    return this.tree.length === 0;
  }

  push(value) {
    this.tree.push(value);
    this._bubbleUp(this.tree.length - 1);
  }

  pop() {
    const topVal = this.tree[0];
    this.swap(0, this.tree.length - 1);
    this.tree.pop();

    this._siftDown(0);

    return topVal;
  }

  _bubbleUp(idx) {
    console.log("_bubbleUp called with ", idx);

    let currIdx = idx;

    while (true) {
      if (currIdx === 0) {
        break;
      }

      const parentIdx = this.getParent(currIdx);
      console.log("parentIdx is", parentIdx);


      if (
        this.comparator(this.tree[currIdx], this.tree[parentIdx]) > 0
      ) {
        this.swap(currIdx, parentIdx);
        currIdx = parentIdx;
      } else {
        break;
      }
    }
  }

  _siftDown(idx) {
    console.log("_siftDown is called with ", idx);

    let currIdx = idx;

    while (true) {
      const leftIdx = this.getLeftChild(currIdx);
      const rightIdx = this.getRightChild(currIdx);
      const leftVal = this.tree[leftIdx];
      const rightVal = this.tree[rightIdx];
      const currVal = this.tree[currIdx];

      if (
        leftVal === undefined
        && rightVal === undefined
      ) {
        break;
      } else if (
        leftVal === undefined
        || rightVal === undefined
      ) {
        const oneChildIdx = (leftVal === undefined ? rightIdx : leftIdx);
        const oneChildVal = this.tree[oneChildIdx];

        if (this.comparator(currVal, oneChildVal) < 0) {
          this.swap(currIdx, oneChildIdx);
          currIdx = oneChildIdx;
        } else {
          break;
        }
      } else {
        const largestChildIdx = (
          this.comparator(leftVal, rightVal) > 0
            ? leftIdx
            : rightIdx
        );
        const largestChildVal = this.tree[largestChildIdx];
        if (
          this.comparator(currVal, largestChildVal) < 0
        ) {
          this.swap(currIdx, largestChildIdx);
          currIdx = largestChildIdx;
        } else {
          break;
        }
      }
    }
  }

  getParent(idx) {
    return Math.floor((idx - 1) / 2);
  }

  getLeftChild(idx) {
    return 2 * idx + 1;
  }

  getRightChild(idx) {
    return 2 * idx + 2;
  }

  swap(idx1, idx2) {
    [this.tree[idx1], this.tree[idx2]] = [this.tree[idx2], this.tree[idx1]];
  }
}