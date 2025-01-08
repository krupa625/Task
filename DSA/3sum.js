/**
 * Function to find all unique triplets in the array which gives the sum of zero.
 * @param {number[]} nums - The input array of integers.
 * @returns {number[][]} - An array of arrays, where each subarray is a triplet that sums to zero.
 */
function threeSum(nums) {
    // sorting the array
    nums.sort((a, b) => a - b);

    // intialization
    let result = [];
    let uniqueTriplets = new Set();

    // loop for initial value of nums
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        let k = nums.length - 1;

        // Use two pointers to find pairs that sum to the negative of nums[i]
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];

            // If the sum is zero, json string representation (stringify)
            if (sum === 0) {
                uniqueTriplets.add(JSON.stringify([nums[i], nums[j], nums[k]]));
                j++;
                k--;
            } 
            // If the sum is less than zero, move the left pointer to the right
            else if (sum < 0) {
                j++;
            } 
            // If the sum is greater than zero, move the right pointer to the left
            else {
                k--;
            }
        }
    }

    // parse use for convert json string into the array
    uniqueTriplets.forEach(triplet => {
        result.push(JSON.parse(triplet));
    });

    return result;
}
