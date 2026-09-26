//@ts-check
/**
 * Check given number is prime or not
 */

const numToVal = 7;

/** @param {number} num */
function checkPrime(num) {
    let isPrime = true;
    for(let i = 2; i<num; i++){
        if(num % i == 0) isPrime = false;
    }
    return isPrime;
};

console.log(`${numToVal} is a prime number? ${checkPrime(numToVal)}`);