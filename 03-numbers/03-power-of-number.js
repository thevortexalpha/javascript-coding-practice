//@ts-check
/**
 * The power function takes two arguments- base and exponent. 
 * It calculates the result of raising base to the power of exponent.
 * Example: 3 to the power of 2 is 9
 */

/**
 * @param {number} base 
 * @param {number} exponent 
 */
function powerOfNumber(base, exponent) {
    return base ** exponent;
}

console.log(`3 to the power of 4 is ${powerOfNumber(3, 4)}`);