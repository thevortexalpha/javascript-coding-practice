//@ts-check
/**
 * Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1.
 */

/** @param {number} endNum */
function fibonacciSeries(endNum) {
    let numOne = 0, numTwo = 1, nextNum = 0;

    for(let i=0; i<endNum; i++) {
        console.log(nextNum);
        nextNum = numOne + numTwo;
        numOne = numTwo;
        numTwo = nextNum;
    }
}

fibonacciSeries(10);