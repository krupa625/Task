var sumZero = function(n) {
    let result = [];
    
    for (let k = 1; k <= Math.floor(n / 2); k++) {
        result.push(k, -k);
    }
    
    if (n % 2 !== 0) {
        result.push(0);
    }
    
    return result;
};
