function maxSubArray(nums) {
    // intialization of max array
    let max = nums[0];
    
    // current array sum intit with 0
    let sum = 0;

    // loop for array 
    for (let i = 0; i < nums.length; i++) {
        // Add the current element to the running sum
        sum += nums[i];

        // replace max if sum is greater
        if (sum >= max) {
            max = sum;
        }

        // if nagative replace with 0
        if (sum <= 0) {
            sum = 0;
        }
    }

    // retuen the sum which is found
    return max;
}
