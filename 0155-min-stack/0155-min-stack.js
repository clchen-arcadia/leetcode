
class MinStack {
    constructor() {
        this._stack = [];
        this._min = Infinity;
    }
    
    push (val) {
        if (val <= this._min) {
            this._stack.push({min: this._min});
            this._min = val;
        }
        this._stack.push(val);
    }
    
    pop () {
        if (this._min === this._stack.pop()) {
            this._min = this._stack.pop().min;
        }
    }
    
    top () {
        return this._stack[this._stack.length - 1];
    }
    
    getMin () {
        return this._min;
    }
}
    
/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */