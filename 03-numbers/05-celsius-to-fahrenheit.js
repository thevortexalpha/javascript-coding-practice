//@ts-check
/**
 * Convert given Celsius to Fahrenheit by formula Fahrenheit=(Celsius×9/5)+32
 * Convert given Fahrenheit to Celsius by formula Celsius=(Farhrenheit-32)*5/9
 */

const tempInC = 40;
const tempInF = 104;

/** @param {number} tempInCelsius */
function celsiusToFarhrenheit(tempInCelsius) {
    return (tempInCelsius * 9 / 5) + 32;
}

/** @param {number} tempInFarhrenheit */
function farhrenheitToCelsius(tempInFarhrenheit) {
    return (tempInFarhrenheit - 32) * 5 / 9;
}

console.log(`Celsius: ${tempInC}. Farhrenheit: ${celsiusToFarhrenheit(tempInC)}`);
console.log(`Celsius: ${farhrenheitToCelsius(tempInF)}. Farhrenheit: ${tempInF}`);