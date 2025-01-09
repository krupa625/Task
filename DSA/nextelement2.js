/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let ans = new Array(nums.length).fill(-1);
        for (let i = 0; i < nums.length; i++) {
            let j = (i + 1) % nums.length;
            while (i !== j) {
                if (nums[j] > nums[i]) {
                    ans[i] = nums[j];
                    break;
                } else {
                    j = (j + 1) % nums.length;
                }
            }
        }
        return ans;
}; 


//time complexity : O(n2)
