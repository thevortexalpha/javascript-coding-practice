//@ts-check
/**
 * Find the sum of numbers in an array.
 */

const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/** @param {Array<number>} array */
function sumOfArray(array) {
    let sumOfArr = 0;
    for(let i=0; i<array.length; i++){
        sumOfArr += array[i];
    }
    return sumOfArr;
}

console.log(`Sum of all the values in array is ${sumOfArray(arrNum)}`);