function secondLargest(nums) {
    // Step 1: Check if the array has enough elements
    if (nums.length < 2) {
        return null; // If there are less than two elements, no second largest number exists
    }

    // Step 2: Initialize two variables to hold the largest and second largest values
    let largest = -Infinity;
    let secondLargest = -Infinity;

    // Step 3: Loop through the array
    for (let i = 0; i < nums.length; i++) {
        // If the current number is greater than the largest number
        if (nums[i] > largest) {
            secondLargest = largest; // Update second largest
            largest = nums[i]; // Update largest
        }
        // If the current number is between largest and second largest
        else if (nums[i] > secondLargest && nums[i] !== largest) {
            secondLargest = nums[i]; // Update second largest
        }
    }

    // Step 4: Return the second largest number
    return secondLargest === -Infinity ? null : secondLargest;
}
