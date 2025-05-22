/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function diameterOfBinaryTree(root: TreeNode | null): number {
    if(root == null) {
        return 0;
    }

    let left = root.left == null ? 0 : helper(root.left, 0) ;
    let right = root.right == null ? 0 : helper(root.right, 0);
    return left + right;

};

//find depth of left and right and return their sum.
function helper(node: TreeNode, depth: number): number {
    if(node == null) {
        return depth;
    }

    let currDepth = depth + 1;

    let left: number = helper(node.left, currDepth);
    let right: number = helper(node.right, currDepth);

    return Math.max(left, right);
}