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
    let curr = null;
    let prevNode = null;

    while (fast && fast.next) {
        prevNode = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    curr = slow;

    console.log(prevNode);

    // Revert the linked list from the middle node onwards and save a reference to the last node

    while (curr) {
        prevNode = slow.next
        
    }

    
    // Sum the twin nodes one by one to check which sum is the greates.
    
};

pairSum(node0)
