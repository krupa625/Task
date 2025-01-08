/**
 * Function to find the index of the target in a sorted array, or the position where it should be inserted.
 * @param {number[]} nums - The sorted array of integers.
 * @param {number} target - The target value to find or insert.
 * @returns {number} - The index of the target or the insertion position.
 */
function searchInsert(nums, target) {
    // Initialize the low and high pointers
    let low = 0, high = nums.length - 1;
    let ans;

    // Perform binary search
    while (low <= high) {
        // Calculate the mid index to avoid potential overflow
        let mid = Math.floor(low + (high - low) / 2);

        // If the target is found at mid, store the index and break the loop
        if (nums[mid] === target) {
            ans = mid;
            break;
        } 
        // If the target is smaller than the mid value, adjust the high pointer
        else if (nums[mid] > target) {
            high = mid - 1;
        } 
        // If the target is larger than the mid value, adjust the low pointer
        else {
            low = mid + 1;
        }

        // For debugging: output the current mid index
        console.log(mid + " ");
    }

    // If the element is not found, determine the correct insertion position
    if (low > high) {
        // If the last checked position is less than the target, the target should be inserted after it
        ans = low;
    }

    // Return the final answer
    return ans;
}

