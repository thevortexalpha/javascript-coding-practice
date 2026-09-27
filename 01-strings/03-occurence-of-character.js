//@ts-check
/**
 * Program to count the occurrences of a character in a string in JavaScript
 * Example: Vibin. Check how man 'i'. Output -> 2
 */

const strToCheck = "GeeksForGeeks";

/**
 * @param {string} string 
 * @param {string} char 
 */
function findOccurence(string, char) {
    let count = 0;

    for(let i=0; i< string.length; i++){
        if(strToCheck[i] == char) count++;
    }

    return count;
}

// using split() method
/**
 * @param {string} string 
 * @param {string} char 
 */
function findOccurenceWithSplitMethod(string, char) {
    return string.split(char).length - 1;
}


console.log(`Without inbuilt method - Number of e in ${strToCheck} is ${findOccurence(strToCheck, 'e')}`);
console.log(`With inbuilt method - Number of e in ${strToCheck} is ${findOccurenceWithSplitMethod(strToCheck, 'e')}`);