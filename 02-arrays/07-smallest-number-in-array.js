//@ts-check
/**
 * Find the smallest number in an array
 */

const arrayOfNumbers = [1, 2, 12, 29, 100, 32, 29, 135];

/** @param {Array<number>} arr */
function findSmallestInArray(arr) {
    let smallest = arr[0];
    for(let i=0; i<arr.length; i++) {
        if(arr[i] < smallest) smallest = arr[i];
    }
    return smallest;
};

console.log(`Smallest number in given array is ${findSmallestInArray(arrayOfNumbers)}`);