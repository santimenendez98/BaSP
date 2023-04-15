// Ejercicio 1

var word = 'estudiando javascript';

var wordUpperCase = word.toUpperCase();

console.log('Ejercicio 2a =', wordUpperCase)

// Ejercicio 2

var firstCharacters = word.substring(0, 5);

console.log('Ejercicio 2b =', firstCharacters)

// Ejercicio 3

var lastCharacters = word.substring(word.length - 3);

console.log('Ejercicio 2c =', lastCharacters)

// Ejercicio 4

var upperCaseAndLowerCase = word[0].toUpperCase() + word.substring(1);

console.log('Ejercicio 2d =', upperCaseAndLowerCase)

// Ejercicio 5

var spaceWord = word.indexOf(' ');

console.log('Ejercicio 2e =', spaceWord)

// Ejercicio 6

var firstWord = word.indexOf('e')

var secondWord = word.indexOf('j')

var newStringUpperCase = word.charAt(firstWord).toUpperCase() + word.substring(firstWord + 1, secondWord) + word.charAt(secondWord).toUpperCase() + word.substring(secondWord + 1)

console.log('Ejercicio 2f =', newStringUpperCase)