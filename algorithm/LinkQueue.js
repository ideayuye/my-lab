
class Node{
    constructor(e, next) {
        this.val = e;
        this.next = next;
    }
}

class LinkQueue{

    constructor() {
        this.dummyHead = new Node(null, null);
        this.size = 0;
    }

    add(index, ele) {
        let cur = this.dummyHead;
        for(let i = 0 ; i < index; i++) {
            cur = cur.next;
        }
        cur.next = new Node(ele, cur.next);
        this.size ++;
    }

    findRecursion(head, index, count = -1) {
        count ++;
        if (count === index) {
            return head
        }
        return this.findRecursion(head.next, index, count);
    }

    find(index) {
        return this.findRecursion(this.dummyHead, index);
    }

    addLast(ele) {
        return this.add(this.size, ele);
    }

    addFirst(ele) {
        return this.add(0, ele);
    }

    remove(index) {
        if (!Number.isInteger(index) || index >= this.size || index < 1) {
            return -1;
        }
        let cur = this.dummyHead;
        for(let i = 0 ; i < index - 1; i++) {
            cur = cur.next;
        }
        const temp = cur.next;
        cur.next = cur.next.next;
        this.size --;
        return temp;
    }

    getSize() {
        return this.size;
    }

    toString() {
        let cur = this.dummyHead.next;
        for(let i = 1; i <= this.size; i ++) {
            console.log(cur.val);
            cur = cur.next;
        }
    }
}

let link1 = new LinkQueue();
link1.addLast('a');
link1.addLast('b');
link1.addLast('b1');
link1.addLast('c');

link1.toString();
console.log('--------')

console.log(link1.find(3));

console.log('--------')
link1.remove(3);
link1.remove(2);
link1.toString();

module.exports = LinkQueue;
