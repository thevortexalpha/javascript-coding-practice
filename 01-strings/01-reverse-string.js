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

console.log(`Reversed value of ${strToTest} is ${reverseString(strToTest)}`);