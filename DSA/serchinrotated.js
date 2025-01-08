/**
 * Function to search for a target value in a rotated sorted array.
 * @param {number[]} nums - The rotated sorted array.
 * @param {number} target - The target value to find.
 * @returns {number} - The index of the target value, or -1 if not found.
 */
function search(nums, target) {
    // Initialize the low and high pointers
    let low = 0, high = nums.length - 1;

    // Perform binary search
    while (low <= high) {
        // Calculate the mid index
        let mid = Math.floor((high + low) / 2);

        // If the target is found at mid, return the index
        if (nums[mid] === target) {
            return mid;
        }
        // If the left half is sorted
        else if (nums[mid] >= nums[low]) {
            
            if (nums[low] <= target && target <= nums[mid]) {
                high = mid - 1; 
            } else {
                low = mid + 1; 
            }
        }
        
        else {
            // Check if the target lies within the right half
            if (nums[mid] <= target && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1; 
            }
        }
    }

    return -1;
}
