//@ts-check
/**
 * Program to sort an array in Ascending Order
 * Program to sort an array in Descending Order
 */

const arrToAscSort = [12, 39, 25, 41, 57, 68, 72, 83, 99, 1, 9];

/** @param {Array<number>} arrToSort */
function sortArrayAsc(arrToSort) {
    for(let i=0; i<arrToSort.length; i++) {
        for(let j=i+1; j<arrToSort.length; j++) {
            if(arrToSort[i] > arrToSort[j]) {
                let temp = arrToSort[i];
                arrToSort[i] = arrToSort[j];
                arrToSort[j] = temp;
            }
        }
    }
    return arrToSort;
}

/** @param {Array<number>} arrToSort */
function sortArrayDesc(arrToSort) {
    const n = arrToSort.length;
    for(let i=0; i<n-1; i++) {
        for(let j=0; j<n-1-i; j++) {
            if(arrToSort[j] < arrToSort[j+1]) {
                let temp = arrToSort[j];
                arrToSort[j] = arrToSort[j+1];
                arrToSort[j+1] = temp;
            }
        }
    }
    return arrToSort;
}

console.log(`Asc sorted Array ${sortArrayAsc(arrToAscSort)}`);
console.log(`Desc sorted Array ${sortArrayDesc(arrToAscSort)}`);