var topKFrequent = function(nums, k) {
  const freqCount = buildLetterFreqCounter(nums);
  const pq = new PriorityQueue1((a, b) => a[1] - b[1]);

  for (let [num, count] of Object.entries(freqCount)) {
    pq.enqueue([num, count]);
    if (pq.size() > k) {
      pq.dequeue();
    }
  }

  const topElements = [];
  while (!pq.isEmpty()) {
    topElements.unshift(pq.dequeue()[0]);
  }

  return topElements;
};

class PriorityQueue1 {
  constructor(comparator) {
    this.heap = [];
    this.comparator = comparator || ((a, b) => a - b);
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  enqueue(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  dequeue() {
    const root = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.sinkDown(0);
    }
    return root;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.comparator(this.heap[index], this.heap[parentIndex]) < 0) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  sinkDown(index) {
    while (true) {
      const leftChildIndex = index * 2 + 1;
      const rightChildIndex = index * 2 + 2;
      let minIndex = index;
      if (leftChildIndex < this.heap.length && this.comparator(this.heap[leftChildIndex], this.heap[minIndex]) < 0) {
        minIndex = leftChildIndex;
      }
      if (rightChildIndex < this.heap.length && this.comparator(this.heap[rightChildIndex], this.heap[minIndex]) < 0) {
        minIndex = rightChildIndex;
      }
      if (minIndex !== index) {
        this.swap(index, minIndex);
        index = minIndex;
      } else {
        break;
      }
    }
  }

  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }
}

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

