
const LinkQueue = require('./LinkQueue');

let link1 = new LinkQueue();
link1.addLast('a');
link1.addLast('b');
link1.addLast('b1');
link1.addLast('c');

var reverseList = function(head) {
    let cur = head;
    let next = cur.next;
    while(cur.next) {
        cur = head.next;
        
    }
};
