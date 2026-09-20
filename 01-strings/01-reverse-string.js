// @ts-check
/**
 * Program to reverse a string in JavaScript.
 * Example: hello -> olleh
 */

const strToTest = "chocolate"

/** @param {string} str */
function reverseString(str) {
    return str.split("").reverse().join("");
};

/** @param {string} str */
function reverseStringWithoutInBuiltMethod(str) {
    let reversed = "";

    for(let i=0; i<str.length; i++){
        reversed = str[i] + reversed;
        console.log(`${reversed}`)
    }

    return reversed;
};

console.log(`Reversed value of ${strToTest} is ${reverseString(strToTest)}`);
console.log(`Reversed value of ${strToTest} is ${reverseStringWithoutInBuiltMethod(strToTest)}`);