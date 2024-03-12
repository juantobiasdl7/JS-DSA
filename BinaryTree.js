class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

(function main() {
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

    // Console log the tree or any specific nodes if needed
    console.log(root);
    // ... more console.log calls can be made to inspect other nodes.

}());

let preorderDfs = node => {
    if (!node) {
        return;
    }

    console.log(node.val);
    preorderDfs(node.left);
    preorderDfs(node.right);
    return;
}

preorderDfs(root);
