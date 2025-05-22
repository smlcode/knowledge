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

function maxAncestorDiff(root: TreeNode | null): number {
    if(root == null) {
        return 0;
    }
    return dfs(root, root.val, root.val);

};

function dfs(node: TreeNode, currMax: number, currMin:number): number {

    if(node == null) {
        return currMax - currMin;
    }

    currMax = Math.max(currMax, node.val);
    currMin = Math.min(currMin, node.val);

    const left = dfs(node.left, currMax, currMin);
    const right = dfs(node.right, currMax, currMin);

    return Math.max(left, right);
}


// TreeNode class definition (if not already present)
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

// Function to create tree from array
function arrayToTree(arr: (number | null)[], index: number = 0): TreeNode | null {
    if (index >= arr.length || arr[index] === null) {
        return null;
    }

    const node = new TreeNode(arr[index]);
    node.left = arrayToTree(arr, 2 * index + 1);
    node.right = arrayToTree(arr, 2 * index + 2);

    return node;
}

// Test the function
const input = [8,3,10,1,6,null,14,null,null,4,7,13];
const root = arrayToTree(input);
const result = maxAncestorDiff(root);
console.log("Result:", result); // Should output: 7