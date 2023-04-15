// Ejercicio 1

var array = ['curso', 'programacion','computadora','javascript','monitor'];

for(var i = 0; i < array.length; i++){
    alert(array[i])
};

// Ejercicio 2

for(var i = 0; i < array.length; i++){
   alert(array[i][0].toUpperCase() + array[i].substring(1))
};

// Ejercicio 3

var sentence = '';

for(var i = 0; i < array.length; i++){
    sentence += array[i] + " "
};
alert(sentence);

// Ejercicio 4

var emptyArray = [];

for(var i = 0; i < 10; i++){
    emptyArray.push(i)
};

console.log('Ejercicio 5d =', emptyArray);
