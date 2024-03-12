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

var hasPathSum = function(root, targetSum) {
    let dfs = (node, curr) => {
        if (!node) {
            return false;
        }
        
        // if both children are null, then the node is a leaf
        if (!node.left && !node.right) {
            return (curr + node.val) == targetSum;
        }
        
        curr += node.val;
        let left = dfs(node.left, curr);
        let right = dfs(node.right, curr);
        return left || right;
    }
    
    return dfs(root, 0);
};

hasPathSum(root, 22);
