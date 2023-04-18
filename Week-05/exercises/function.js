// Ejercicio 1

function sum(a, b) {
  return a + b;
}

var resultSum = sum(2, 3);

console.log("Ejercicio 6a =", resultSum);

// Ejercicio 2

function suma(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return NaN;
  }
  return a + b;
}

console.log("Ejercicio 6b =", suma(2, "Funciones"));

// Ejercicio 3

function validateInteger(number) {
  var numberVerification = number % 1;
  if (numberVerification === 0) {
    return true;
  } else {
    return false;
  }
}

console.log("Ejercicio 6c =", validateInteger(3));

// Ejercicio 4

function sumValidation(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    alert('A value is invalid');
    return NaN;
  } else if (!validateInteger(a) || !validateInteger(b)) {
    alert('A value is not a integer')
    a = Math.round(a);
    b = Math.round(b);
  }
  return a + b;
}

console.log("Ejercicio 6d =", sumValidation(3.6, 2));

//Ejercicio 5

function validationNum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    alert('A value is invalid');
    return NaN;
  } else if (!validateInteger(a) || !validateInteger(b)) {
    alert('A value is not integer');
    a = Math.round(a);
    b = Math.round(b);
  }
  return a + b;
}

function validation(value1, value2) {
  var validate = validationNum(value1, value2);
  if (typeof validate === "number") {
    return validationNum(value1, value2);
  } else {
    return value1 + value2;
  }
}

console.log("Ejercicio 6e =", validation(2.3,'2'));
