class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
        this.minObject={};
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);

        //compare min value between minStack and val
        if(this.minStack.length ===0) this.minStack.push(val)
        else {
        let min =Math.min(val, this.minStack.at(-1));
        this.minStack.push(min);
        }
    }

    /**
     * @return {void}
     */
    pop() {
       this.stack.pop();
       this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.at(-1);
       
    }

    /**
     * @return {number}
     */
    getMin() {
        //compare every time number is pushed with minimum;
        return this.minStack.at(-1);
    }
}

const minStack = new MinStack();
minStack.push(1);
minStack.push(2);
minStack.push(0);
console.log(minStack.getMin()) // return 0
minStack.pop();
console.log(minStack.top());    // return 2
console.log(minStack.getMin()); // return 1