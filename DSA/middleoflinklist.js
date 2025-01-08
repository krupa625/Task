/**
 * Function to find the middle node of a singly linked list.
 * If there are two middle nodes, it returns the second middle node.
 * @param {ListNode} head - The head of the linked list.
 * @returns {ListNode} - The middle node of the linked list.
 */
function middleNode(head) {
    // Initialize two pointers, slow and fast, both starting at the head
    let slow = head;
    let fast = head;

    // Traverse the list with the fast pointer moving twice as fast as the slow pointer
    while (fast !== null && fast.next !== null) {
        // Move the slow pointer one step
        slow = slow.next;

        // Move the fast pointer two steps
        fast = fast.next.next;
    }

    // When the loop exits, the slow pointer will be at the middle node
    return slow;
}

