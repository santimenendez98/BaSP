// Ejercicio 1

var month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log ('Ejercicio 3a =', month[5] , month[11]);

// Ejercicio 2

var monthExercise3B = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log('Ejercicio 3b =', monthExercise3B.sort());

// Ejercicio 3

month.push('Ultimo mes');
month.unshift('Primer mes');

console.log('Ejercicios 3c =', month);

// Ejercicio 4

month.shift();
month.pop();

console.log('Ejercicio 3d =', month);

// Ejercicio 5

console.log('Ejercicio 3e =', month.reverse());

// Ejercicio 6

var monthString = month.join('-');

console.log('Ejercicio 3f =', monthString)

// Ejercicio 7

var monthExercise3G = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log('Ejercicio 3g =', monthExercise3G.slice(4, 11))