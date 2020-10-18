class Stack {

    constructor() {
        this.arr = [];
    }

    push(ele) {
        this.arr.push(ele);
    }

    pop() {
        return this.arr.pop();
    }

    peek() {
        return this.arr[this.arr.length - 1]
    }

    isEmpty() {
        return this.arr.length === 0;
    }

    getSize() {
        return this.arr.length;
    }
}

var isValid = function (s) {
    var strStack = new Stack();
    for(let i of s) {
        if (i === '(' || i === '{' || i === '[') {
            strStack.push(i);
        } else {
            if (i === ')' && strStack.peek() === '(') {
                strStack.pop();
            } else 
            if (i === ']' && strStack.peek() === '[') {
                strStack.pop();
            } else
            if (i === '}' && strStack.peek() === '{') {
                strStack.pop();
            } else {
                return false;
            }
        }
    }
    return strStack.isEmpty();
}
