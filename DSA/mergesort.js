function merge(a, m, b, n) {
   
    let idx = m + n - 1;  
    let i = m - 1;        
    let j = n - 1;         

    while (i >= 0 && j >= 0) {
       
        if (a[i] >= b[j]) {
            a[idx] = a[i]; 
            i--;             
        } else {
            a[idx] = b[j]; 
            j--;             
        }
        idx--; 
    }


    while (i >= 0) {
        a[idx] = a[i]; 
        i--;            
        idx--;          
    }

   
    while (j >= 0) {
        a[idx] = b[j]; 
        j--;           
        idx--;      
    }
}


