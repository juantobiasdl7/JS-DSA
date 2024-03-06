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

// Create the nodes
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const nodeK = new Node("K");

// Link the nodes to form 1 <-> 2 <-> 3
node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;


console.log(node1);

addNodeModified(node2, nodeK);

