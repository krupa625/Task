/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numMap = new Map(); // Using Map for better performance in lookups
    
    for (let i = 0; i < nums.length; i++) {
        let rem = target - nums[i];
        
        if (numMap.has(rem)) {
            return [numMap.get(rem), i];
        }
        
        numMap.set(nums[i], i);
    }
    
    // As per the problem statement, there will always be exactly one solution
    throw new Error("No solution found");
};

// Example usage:
console.log(twoSum([2, 7, 11, 15], 9));  // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));       // Output: [1, 2]
console.log(twoSum([3, 3], 6));          // Output: [0, 1]
