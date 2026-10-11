//@ts-check
/**
 * Program to find the longest word in the string.
 * Example: "Im the greatest" -> "greatest";
 */

const strToCheck = "This code finds the longest word in a given string";

/**
 * @param {string} str 
 */
function findLongestWordInString(str){
    const words = str.split(' ');
    let longestWord = '';

    for (let word of words) {
        if(word.length > longestWord.length) longestWord = word;
    }

    return longestWord;
}

console.log(`Longest word in "${strToCheck}" is ${findLongestWordInString(strToCheck)}`);