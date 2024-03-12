class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Removed the IIFE, just define the main function
function main() {
    // The following code builds a tree that looks like the structure provided
    let root = new TreeNode(0);
    let one = new TreeNode(1);
    let two = new TreeNode(2);
    let three = new TreeNode(3);
    let four = new TreeNode(4);
    let five = new TreeNode(5);
    let six = new TreeNode(6);
    let seven = new TreeNode(7);
    let eight = new TreeNode(8);

    root.left = one;
    root.right = two;

    one.left = three;
    one.right = four;

    two.right = five;

    three.left = six;

    four.left = seven;
    four.right = eight;

    // Return the root of the tree
    return root;
}

// Call main and assign the returned root to a variable
let root = main();

var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return Math.max(left, right) + 1;
};

maxDepth(root);
