var removeNodes = function(head) {
    let stack = []
    while(head!=null){
        while(stack.length != 0 && head.val > stack[stack.length - 1]){
            stack.pop()
        }
        stack.push(head.val)
        head = head.next
    }
    head = new ListNode(stack[0] , null)
    let temp = head
    for(let i=1 ; i<stack.length ; i++){
        temp.next = new ListNode(stack[i] , null)
        temp = temp.next
    }
    return head
};
