
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

    addLast(ele) {
        return this.add(this.size, ele);
    }

    addFirst(ele) {
        return this.add(0, ele);
    }

    getSize() {
        return 
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
