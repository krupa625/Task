var isValid = function(s) {
     const stack = [];
        for (let i of s) {
            if (i === '{' || i === '(' || i === '[') {
                stack.push(i);
            } else if (
                stack.length > 0 &&
                ((i === '}' && stack[stack.length - 1] === '{') ||
                 (i === ')' && stack[stack.length - 1] === '(') ||
                 (i === ']' && stack[stack.length - 1] === '['))
            ) {
                stack.pop();
            } else {
                return false;
            }
        }
        return stack.length === 0;
    
};


// time complexity : O(n)
