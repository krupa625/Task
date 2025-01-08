class Solution {
    // Function returns the second largest element
    getSecondLargest(arr) {
        //  Initialize two variables to keep track of largest and second largest numbers
        let large = -1;    
        let slarge = -1;   

        // Loop through the array to find the largest and second largest elements
        for (let i = 0; i < arr.length; i++) {
            //  If the current element is greater than 'large', update both 'large' and 'slarge'
            if (arr[i] > large) {
                slarge = large;  
                large = arr[i];   // Update 'large' to the current element
            }
            //  If the current element is greater than 'slarge' and not equal to 'large', update 'slarge'
            else if (arr[i] > slarge && arr[i] !== large) {
                slarge = arr[i];  
            }
        }

        //  Return the second largest number found
        return slarge;  // If no second largest found, it will return -1
    }
}
