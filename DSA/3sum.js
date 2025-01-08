/**
 * Function to find all unique triplets in the array which gives the sum of zero.
 * @param {number[]} nums - The input array of integers.
 * @returns {number[][]} - An array of arrays, where each subarray is a triplet that sums to zero.
 */
function threeSum(nums) {
    // Sort the array to make it easier to find triplets and avoid duplicates
    nums.sort((a, b) => a - b);

    // Initialize the result array and a set to track unique triplets
    let result = [];
    let uniqueTriplets = new Set();

    // Loop through each number in the array as a potential first number of a triplet
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        let k = nums.length - 1;

        // Use two pointers to find pairs that sum to the negative of nums[i]
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];

            // If the sum is zero, add the triplet to the set
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

    // Convert the set of unique triplets back to an array
    uniqueTriplets.forEach(triplet => {
        result.push(JSON.parse(triplet));
    });

    return result;
}
