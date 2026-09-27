//@ts-check
/**
 * Intersection of Two Arrays i.e., find common value between two arrays
 */

const arrayOne = [1, 2, 7, 4, 5];
const arrayTwo = [5, 6, 7, 2, 9];

/**
 * @param {Array<number>} arr1 
 * @param {Array<number>} arr2 
 */
function arrayIntersection(arr1, arr2) {
    const set2 = new Set(arr2);
    return arr1.filter(value => set2.has(value));
}

console.log(`Intersection between given numbers is `, arrayIntersection(arrayOne, arrayTwo));