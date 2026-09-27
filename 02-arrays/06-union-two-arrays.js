//@ts-check
/**
 * Union of Two Arrays i.e., combining and keeping only unique values in two arrays
 */

const arrayOne = [1, 2, 7, 4, 5];
const arrayTwo = [5, 6, 7, 2, 9];

/**
 * @param {Array<number>} arr1 
 * @param {Array<number>} arr2 
 */
function arrayUnion(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

console.log(arrayUnion(arrayOne, arrayTwo));