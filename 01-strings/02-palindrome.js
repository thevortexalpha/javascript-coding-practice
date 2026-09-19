// @ts-check
/**
 * Program to check whether a string is a palindrome string.
 * Example: Malayalam (If we took the string and reversed it, the same word will appear.)
 */

const palString = "malayalam"

/** @param {string} str */
function isPalindrome(str) {
    const revStr = str.split("").reverse().join("");
    if (revStr === str) {
        return "is palindrome"
    } else {
        return "is not palindrome"
    };
}

console.log(`${palString} ${isPalindrome(palString)}`);