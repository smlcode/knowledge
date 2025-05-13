/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    //head = 1,2,3,4,5
    //r = 4
    //l = 2

    if(left === right) {
        return head;
    }

    let rightNode: ListNode = head;

    let timesToRight = right - 1;
    while(timesToRight > 0) { //3:2, 2:3, 1:4
        rightNode = rightNode.next;
        timesToRight--;
    }

    let prev: ListNode = head;
    let curr: ListNode = head;

    let position: number = 1;
    while(curr && position <= right) {
        const currONext: ListNode = curr.next;
        if(position == left) {
            prev.next = rightNode; //1 -> 4
            curr.next = rightNode.next; // 2 -> 5
        } else if (position > left) {
            curr.next = prev; // 3 -> 2
        }

        prev = curr; //1
        curr = currONext; //2
        position++;//2
    }
    if(left === 1) {
        return rightNode;
    }
    return head;
};