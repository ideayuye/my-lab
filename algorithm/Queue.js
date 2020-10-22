
class Queue {
    constructor() {
        this.arr = [];
    }

    enQueue(ele) {
        this.arr.push(ele);
    }

    deQueue() {
        if (this.arr.length) {
            return this.arr.shift();
        }
    }

    front() {
        return this.arr[0];
    }

    tail() {
        return this.arr[this.arr.length - 1];
    }

    toString() {
        console.log(this.arr);
    }

    clear() {
        this.arr = [];
    }
}
