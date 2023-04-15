// Ejercicio 1

function sum (a,b) {
    return a + b
};

var resultSum = sum(2,3);

console.log('Ejercicio 6a =', resultSum)

// Ejercicio 2

function suma (a,b) {
    if(typeof a !== 'number' || typeof b !== 'number'){
        alert('Los parametros tienen que ser tipo numero');
        return NaN;
    }
    return a + b
};

console.log('Ejercicio 6b =', sum(2,'Funciones'))

// Ejercicio 3

function validateInteger (number) {
    var numberVerification = number % 1;
    if(numberVerification === 0) {
        return true;
    } else {
        return false
    }
};

console.log('Ejercicio 6c =', validateInteger(3))

// Ejercicio 4

function sumValidation (a,b) {
    if(!validateInteger(a) || !validateInteger(b)){
        if(a === true && b === false){
            b = Math.round(b);
            alert("El segundo número no es un número entero. Se redondeará a " + b);
        } else if(a === false && b === true){
            a = Math.round(a);
            alert("El primer número no es un número entero. Se redondeará a " + a);
        } else {
            a = Math.round(a);
            b = Math.round(b);
            alert("Ambos números no son enteros. Se redondearán a " + a + " y " + b);
        }
    }
    return a + b;
};

console.log('Ejercicio 6d =', sumValidation(3.2,3.4))

//Ejercicio 5

function newValidation (a,b){
    return sumValidation(a,b)
};

console.log('Ejercicio 6e =', newValidation(2.3,4.2))
