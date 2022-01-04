
const LinkQueue = require('./LinkQueue');

let link1 = new LinkQueue();
link1.addLast('a');
link1.addLast('b');
link1.addLast('b1');
link1.addLast('c');

var reverseList = function(head) {
    if (head == null || head.next == null) {
        return head;
    }
    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};

link1.dummyHead.next = reverseList(link1.dummyHead);
console.log('now -->')
console.log(link1.toString())
