//@ts-check
/**
 * Find the largest number in an array
 */

const arrayOfNumbers = [1, 2, 12, 29, 100, 32, 29, 135];

/** @param {Array<number>} arr */
function findLargestInArray(arr) {
    let highestNum = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > highestNum) {
            highestNum = arr [i];
        }
    }

    return highestNum;
}

console.log(`Highest number in given number is ${findLargestInArray(arrayOfNumbers)}`);