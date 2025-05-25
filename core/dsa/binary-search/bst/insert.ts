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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
    if (!root) {
        return new TreeNode(val);
    }

    let queue: TreeNode[] = [root];

    while(queue.length > 0){
        let nextQueue: TreeNode[] = [];
        for(let node of queue) {
            if(val > node.val) {
                if(node.right) {
                    nextQueue.push(node.right);
                } else {
                    node.right = new TreeNode(val);
                    return root;
                }
            } else {
                if(node.left) {
                    nextQueue.push(node.left)
                } else {
                    node.left = new TreeNode(val);
                    return root;
                }
            }
            queue = nextQueue;
        }
    }
    return root;
};