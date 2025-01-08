class Solution {
    // Function returns the second largest element
    getSecondLargest(arr) {
        // Step 1: Initialize two variables to keep track of largest and second largest numbers
        let large = -1;    
        let slarge = -1;   

        // Step 2: Loop through the array to find the largest and second largest elements
        for (let i = 0; i < arr.length; i++) {
            // Step 3: If the current element is greater than 'large', update both 'large' and 'slarge'
            if (arr[i] > large) {
                slarge = large;  
                large = arr[i];   // Update 'large' to the current element
            }
            // Step 4: If the current element is greater than 'slarge' and not equal to 'large', update 'slarge'
            else if (arr[i] > slarge && arr[i] !== large) {
                slarge = arr[i];  
            }
        }

        // Step 5: Return the second largest number found
        return slarge;  // If no second largest found, it will return -1
    }
}
