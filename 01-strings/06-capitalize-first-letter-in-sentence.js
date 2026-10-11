//@ts-check
/**
 * Program to capitalize all the words's first letter in the given string.
 * Example: "Im the greatest" -> "Im The Greatest";
 */

const strToCheck = "splits it into an array of words, and capitalizes the first letter of each word";

/**
 * @param {string} str 
 */
function capitalizeFirstLetter(str) {
    const words = str.split(' ');

    for(let i=0; i<words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    return words.join(' ');
}

console.log(`${capitalizeFirstLetter(strToCheck)}`);