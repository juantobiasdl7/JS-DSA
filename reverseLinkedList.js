class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

// Create the nodes
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

// Link the nodes to form 1 <-> 2 <-> 3
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
// node2.next = node3;
// node3.prev = node2;
// node3.next = node4;
// node4.prev = node3;
// node4.next = node5;
// node5.prev = node4;

//console.log(node1);

var reverseBetween = function(head, left, right) {

    let counter = 1;
    let leftNode = head;
    let landPreviousToTheleftNode = head;
    let nextNode = null;

    //Check if left == right, if true, simply return the head
    if (left == right) {
        return head;
    }

    //Identify the left node and save a reference
    for(let i = 1; i < left; i++){
        leftNode = leftNode.next;
        counter += 1;
    }

    if (left > 1) {
        for(let i = 2; i < counter; i++){
            landPreviousToTheleftNode = landPreviousToTheleftNode.next;
        }
    }

    console.log(leftNode);
    console.log(counter);

    let prevNode = leftNode;
    let curr = leftNode.next;

    //Revers the linkedlist from left to right
    while (counter < right ) {
            console.log(counter);
        nextNode = curr.next;
            console.log(`Valor de nextNode: ${nextNode.val}`);
        curr.next = prevNode;
            console.log(`Valor de curr.next: ${curr.next.val}`);
        prevNode = curr;
            console.log(`Valor de prevNode: ${prevNode.val}`);
        curr = nextNode;
            console.log(`Valor de curr: ${curr.val}`);
        counter += 1;
    }

    leftNode.next = nextNode;

    if (left > 1){
        landPreviousToTheleftNode.next = prevNode;
    }

    if (left == 1){
        console.log(`Valor de prevNode: ${prevNode.val}`);
        console.log(prevNode);
        return prevNode;
    }else{
        console.log(`--Valor de Head: ${head.val}`);
        console.log(head);
        return head;
    }

};

reverseBetween(node1, 2, 4);