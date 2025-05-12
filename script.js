function convertToRoman(num) {
    // Define Roman numeral symbols and their values
    const romanSymbols = [
        ['M', 1000], 
        ['D', 500], 
        ['C', 100], 
        ['L', 50], 
        ['X', 10], 
        ['V', 5], 
        ['I', 1]
    ];
    
    let result = '';
    
    // Loop through each Roman numeral symbol-value pair
    for (let i = 0; i < romanSymbols.length; i++) {
        // While num is greater than or equal to the value of the Roman symbol
        while (num >= romanSymbols[i][1]) {
            result += romanSymbols[i][0]; // Append the Roman numeral symbol
            num -= romanSymbols[i][1];    // Subtract the value from num
        }
    }

    return result;
}

// Test the function with various inputs
console.log(convertToRoman(14));   // Output: XIV
console.log(convertToRoman(798));  // Output: DCCXCVIII
console.log(convertToRoman(1000)); // Output: M
console.log(convertToRoman(4));    // Output: IV
console.log(convertToRoman(36));   // Output: XXXVI
console.log(convertToRoman(3999)); // Output: MMMCMXCIX

module.exports = convertToRoman
