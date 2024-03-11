class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

let addNode = (node, nodeToAdd) => {
    let prevNode = node.prev;
    nodeToAdd.next = node;
    nodeToAdd.prev = prevNode;
    prevNode.next = nodeToAdd;
    node.prev = nodeToAdd;
}

let addNodeModified = (node, nodeToAdd) => {
    //let prevNode = node.prev;
    nodeToAdd.next = node;
    nodeToAdd.prev = node.prev;
    node.prev.next = nodeToAdd;
    node.prev = nodeToAdd;
}

let deleteNode = node => {
    let prevNode = node.prev;
    let nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
}


let deleteNodeModifies = node => {
    // let prevNode = node.prev;
    // let nextNode = node.next;
    node.prev.next = node.next;
    node.next.prev = node.prev;
}

// Create the nodes
const node0 = new Node(0);
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

// Link the nodes to form 1 <-> 2 <-> 3
node0.next = node1;
node1.prev = node0;
node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;

console.log(node0);

var pairSum = function(head) {

    // Apply the fast and slow algorithm to find the node in the middle an its previousNode.
    let slow = head;
    let fast = head;
    let prev = null;
    let middleHead = null;
    let afterNextNode = null;
    let counter = 0;
    let ans = 0

    while (fast && fast.next) {
        counter += 1;
        middleHead = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    console.log(counter);
    console.log(middleHead);
    console.log(slow);

    // Revert the linked list from the middle node onwards and save a reference to the last node

    let nextNode = slow.next;
    slow.next = null;

    while (nextNode != null) {
        middleHead.next = nextNode;
        afterNextNode = nextNode.next;
        nextNode.next = slow;
        slow = nextNode;
        nextNode = afterNextNode;
    }

    console.log(head);
    
    // Sum the twin nodes one by one to check which sum is the greates.

    let sloww = head;
    let fastt = head;

    for (let i = 0; i < counter; i++) {
        fastt = fastt.next;
    }

    console.log(fastt);

    while (fastt != null) {
        ans = Math.max(ans, sloww.val+fastt.val)
        console.log("helo")
        sloww = sloww.next;
        fastt = fastt.next;
    }

    return ans
    
};

pairSum(node0)
