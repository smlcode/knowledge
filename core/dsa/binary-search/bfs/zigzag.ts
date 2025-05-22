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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (root === null) {
        return [];
    }

    let queue = [root];
    let zigZag = [];
    let startLeft = true;

    while (queue.length > 0) {
        let nextQueue = [];
        let row = [];
        for (let i = 0; i < queue.length; i++) {
            // row.push(queue[i].val);
            if (startLeft) {
                row.push(queue[i].val);
            } else {
                row.unshift(queue[i].val);
            }

            if (queue[i].left) {
                nextQueue.push(queue[i].left);
            }

            if (queue[i].right) {
                nextQueue.push(queue[i].right);
            }
        }

        // if(!startLeft) {
        //     let reversedRow = [];
        //     for(let i = row.length - 1; i >= 0; i--) {
        //         reversedRow.push(row[i]);
        //     }
        //       zigZag.push(reversedRow);
        // } else {
        //      zigZag.push(row);
        // }
        zigZag.push(row);
        queue = nextQueue;
        startLeft = !startLeft;
    }

    return zigZag;
}