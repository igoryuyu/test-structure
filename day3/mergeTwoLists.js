/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function(l1, l2) {
  let preHead = new ListNode(-1)
  let prev = preHead
  
  while (l1 !== null && l2 !== null) {
      if (l1.val < l2.val) {
          prev.next = l1
          l1 = l1.next
      } else {
          prev.next = l2
          l2 = l2.next
      }
      prev = prev.next
  }
  prev.next = l1 === null ? l2 : l1
  return preHead.next
};

// 输入
// [1,2,4]
// [1,3,4]
// 输出
// [1,1,2,3,4,4]
// 预期结果
// [1,1,2,3,4,4]