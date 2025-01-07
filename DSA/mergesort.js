function merge(a, m, b, n) {
    // Step 1: Initialize pointers
    let idx = m + n - 1;  // Index for the last position in array 'a'
    let i = m - 1;         // Pointer for the last element of 'a'
    let j = n - 1;         // Pointer for the last element of 'b'

    // Step 2: Merge elements from 'a' and 'b' starting from the end
    while (i >= 0 && j >= 0) {
        // Compare elements from both arrays and put the larger one in 'a[idx]'
        if (a[i] >= b[j]) {
            a[idx] = a[i];  // Place 'a[i]' at the end of 'a'
            i--;             // Move the pointer 'i' backward
        } else {
            a[idx] = b[j];  // Place 'b[j]' at the end of 'a'
            j--;             // Move the pointer 'j' backward
        }
        idx--;  // Move the index in 'a' backward
    }

    // Step 3: If there are remaining elements in 'a', copy them to 'a[idx]'
    while (i >= 0) {
        a[idx] = a[i];  // Copy the remaining element from 'a'
        i--;            // Move the pointer 'i' backward
        idx--;          // Move the index in 'a' backward
    }

    // Step 4: If there are remaining elements in 'b', copy them to 'a[idx]'
    while (j >= 0) {
        a[idx] = b[j];  // Copy the remaining element from 'b'
        j--;            // Move the pointer 'j' backward
        idx--;          // Move the index in 'a' backward
    }
}


