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

function closestValue(root: TreeNode | null, target: number): number {
    if (!root) {
        return null;
    }

    let closest: number = root.val;
    let closestDiff: number = Math.abs(target - root.val);

    let currRow: TreeNode[] = [root];
    while (currRow.length > 0) {
        let nextRow: TreeNode[] = [];
        for (let node of currRow) {
            let currDiff = Math.abs(target - node.val);
            if(currDiff === closestDiff) {
                closest = Math.min(closest, node.val);
            } else if (currDiff < closestDiff) {
                closestDiff = currDiff;
                closest = node.val;
            }

            if (target > node.val) {
                if(node.right) {
                    nextRow.push(node.right);
                }
            } else {
                if(node.left) {
                    nextRow.push(node.left);
                }
            }
        }
        currRow = nextRow;
    }
    return closest;
};