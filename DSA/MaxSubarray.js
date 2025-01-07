function maxSubArray(nums) {
    // Step 1: Initialize the maximum subarray sum to the first element
    let max = nums[0];
    
    // Step 2: Initialize the sum of the present subarray to 0
    let sum = 0;

    // Step 3: Iterate  array through
    for (let i = 0; i < nums.length; i++) {
        // Add the current element to the running sum
        sum += nums[i];

        // Step 4: Update max if the current sum is greater than the previous max
        if (sum >= max) {
            max = sum;
        }

        // Step 5: If the running sum becomes negative, reset it to 0
        if (sum <= 0) {
            sum = 0;
        }
    }

    // Step 6: Return the maximum sum found
    return max;
}
