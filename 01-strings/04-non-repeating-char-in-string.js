//@ts-check
/**
 * Program to check non repeative character in a string.
 * Example: Geeksforgeeks. 'f' is the non repeative character in the string.
 */

const strToCheck = "javascript";

/**
 * @param {string} str 
 */
function findFirstNonRepeatedChar(str) {
    /** @type {Record<string, number>} */
    const charCount = {};

    for(let i=0; i<str.length; i++){
        const ch = str[i];
        charCount[ch] = (charCount[ch] || 0) + 1;
    };

    for(let j=0; j<str.length; j++){
        const ch = str[j];
        if(charCount[ch] === 1) return ch;
    }

    return null;
}

console.log(`Non-repeative character in ${strToCheck} is ${findFirstNonRepeatedChar(strToCheck)}`);