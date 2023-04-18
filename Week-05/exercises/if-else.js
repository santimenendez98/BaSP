// Ejercicio 1

var randomNum = Math.random();

if(randomNum >= 0.5){
    console.log('Ejercicio 4a =', 'Greater than or equal to 0,5')
} else {
    console.log('Ejercicio 4a =', 'Lower than 0,5')
};

// Ejercicio 2

var age = 33;

if(age < 2){
    console.log('Ejercicio 4b =', 'Baby')
} else if(age >= 2 && age <= 12){
    console.log('Ejercicio 4b =', 'Kid')
} else if(age >= 13 && age <= 19){
    console.log('Ejercicio 4b =', 'Teen')
} else if(age >= 20 && age <= 30){
    console.log('Ejercicio 4b =', 'Young')
} else if(age >= 31 && age <= 60){
    console.log('Ejercicio 4b =', 'Adult')
} else if(age >= 61 && age <= 75){
    console.log('Ejercicio 4b =', 'Elderly')
} else if(age > 75){
    console.log('Ejercicio 4b =', 'Old Man`')
};