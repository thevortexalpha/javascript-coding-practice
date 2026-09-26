//@ts-check
/**
 * The frequency function counts how many times each number appears in an array. 
 */

const arrayWithDuplicates = [2, 3, 5, 2, 1, 3, 3, 5, 1, 2, 69];

/** @param {Array<number>} arrayWithDup */
function frequency(arrayWithDup) {
    const freqRep = {};

    for(let i=0; i<arrayWithDup.length; i++){
        if(freqRep[arrayWithDup[i]]) {
            freqRep[arrayWithDup[i]] += 1
        } else {
            freqRep[arrayWithDup[i]] = 1
        }
    }

    return freqRep;
}

console.log(frequency(arrayWithDuplicates));