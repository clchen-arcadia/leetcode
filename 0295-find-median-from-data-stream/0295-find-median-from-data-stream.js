
var MedianFinder = function() {
  this.array = [];

};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  if (this.array.length === 0) {
    this.array.push(num);
  } else if (this.array[0] > num) {
    this.array.unshift(num);
  } else if (this.array[this.array.length - 1] < num) {
    this.array.push(num);
    return;
  } else {
    for (let i = 0; i < this.array.length; i++) {
      if (num <= this.array[i]) {
        this.array.splice(i, 0, num);
        break;
      }
    }
  }

};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  const len = this.array.length
  if (len === 0) {
    return null;
  } else if (len % 2 === 1) {
    return this.array[Math.floor(len / 2)];
  } else {
    const idx2 = Math.floor(len / 2);
    const idx1 = idx2 - 1;
    return (
      (this.array[idx1] + this.array[idx2]) / 2
    );
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
