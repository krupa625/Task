var sumZero = function(n) {
    let result = [];
    
    for (let k = 1; k <= Math.floor(n / 2); k++) {
        result.push(k, -k); // add nagative and positive value of k 
    }
    
    if (n % 2 !== 0) {
        result.push(0);// if k is odd then return 0 
    }
    
    return result;//result of sum 
};
