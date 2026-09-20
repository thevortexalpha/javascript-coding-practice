//@ts-check
/**
 * The factorial function calculates the factorial of a given number num.
 * It initializes answer to 1, then multiplies it by each integer from 2 to num in a loop.
 * Example: Given 7. Answer -> 1*2*3*4*5*6*7 => 5040
 */

/** @param {number} num */
function factorialOfNumber(num) {
    let result = 1;
    for(let i=1; i<=num; i++){
        result *= i;
    }
    return result;
}

console.log(`Factorial of 7 is ${factorialOfNumber(7)}`);