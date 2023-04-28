// Variables

var inputs = document.querySelectorAll(".input");
var inputName = document.getElementById("name");
var validation = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
var inputEmail = document.getElementById("email");
var inputPassword = document.getElementById("password");
var inputSurname = document.getElementById("surname");
var inputPhone = document.getElementById("phone");
var repeatPassword = document.getElementById("repeat-password");
var inputDni = document.getElementById("dni");
var inputBirthday = document.getElementById("birthday");
var inputAddress = document.getElementById("address");
var inputLocation = document.getElementById("location");
var inputPostalCode = document.getElementById("postal-code");
var inputSubmit = document.getElementById("submit");
var formRegistration = document.getElementById("form-registration");

//Event Listeners

inputName.addEventListener("blur", validateName);
inputName.addEventListener("focus", quitErrorMessage);
inputSurname.addEventListener("blur", validationSurname);
inputSurname.addEventListener("focus", quitErrorMessage);
inputDni.addEventListener("blur", validationDni);
inputDni.addEventListener("focus", quitErrorMessage);
inputBirthday.addEventListener("blur", validationBirthday);
inputBirthday.addEventListener("focus", quitErrorMessage);
inputPhone.addEventListener("blur", validationPhone);
inputPhone.addEventListener("focus", quitErrorMessage);
inputAddress.addEventListener("blur", validationAddress);
inputAddress.addEventListener("focus", quitErrorMessage);
inputLocation.addEventListener("blur", validationLocation);
inputLocation.addEventListener("focus", quitErrorMessage);
inputPostalCode.addEventListener("blur", validationPostalCode);
inputPostalCode.addEventListener("focus", quitErrorMessage);
inputEmail.addEventListener("blur", validationEmail);
inputEmail.addEventListener("focus", quitErrorMessage);
inputPassword.addEventListener("blur", validationPassword);
inputPassword.addEventListener("focus", quitErrorMessage);
repeatPassword.addEventListener("blur", validationRepeatPassword);
repeatPassword.addEventListener("focus", quitErrorMessage);
inputSubmit.addEventListener("click", sendForm);
formRegistration.addEventListener("submit", function (event) {
  if (validateForm()) {
    sendForm();
  } else {
    event.preventDefault();
    alert("Some date is wrong");
  }
});

//Functions

// Input requeriment
inputs.forEach((element) => {
  {
    element.required = true;
  }
});

function sendForm() {
  validateForm();
}

function validateForm() {
  var validName = inputName.classList.contains("input-correct");
  var validSurname = inputSurname.classList.contains("input-correct");
  var validDni = inputDni.classList.contains("input-correct");
  var validBirthday = inputBirthday.classList.contains("input-correct");
  var validPhone = inputPhone.classList.contains("input-correct");
  var validAdress = inputAddress.classList.contains("input-correct");
  var validLocation = inputLocation.classList.contains("input-correct");
  var validPostalCode = inputPostalCode.classList.contains("input-correct");
  var validEmail = inputEmail.classList.contains("input-correct");
  var validPassword = inputPassword.classList.contains("input-correct");
  var validRepeatPassword = repeatPassword.classList.contains("input-correct");
  if (
    validName &&
    validSurname &&
    validDni &&
    validBirthday &&
    validPhone &&
    validAdress &&
    validLocation &&
    validPostalCode &&
    validEmail &&
    validPassword &&
    validRepeatPassword
  ) {
    var userAlert =
      "Name: " +
      inputName.value +
      "\n" +
      "Surname: " +
      inputSurname.value +
      "\n" +
      "DNI: " +
      inputDni.value +
      "\n" +
      "Birthday: " +
      inputBirthday.value +
      "\n" +
      "Phone: " +
      inputPhone.value +
      "\n" +
      "Address: " +
      inputAddress.value +
      "\n" +
      "City: " +
      inputLocation.value +
      "\n" +
      "Postal Code: " +
      inputPostalCode.value +
      "\n" +
      "Email: " +
      inputEmail.value +
      "\n" +
      "Password: " +
      inputPassword.value;
    alert(userAlert);

    //Vaciar form

    inputName.value = "";
    inputSurname.value = "";
    inputDni.value = "";
    inputBirthday.value = "";
    inputPhone.value = "";
    inputAddress.value = "";
    inputLocation.value = "";
    inputPostalCode.value = "";
    inputEmail.value = "";
    inputPassword.value = "";
    repeatPassword.value = "";

    //Vaciar form

    inputs.forEach((element) => {
      element.classList.remove("input-correct");
    });
  }
}

function containsLettersAndNumbersLocation(value) {
  for (var i = 0; i < value.length; i++) {
    var charCode = value.charCodeAt(i);
    if (
      !(charCode === 32) &&
      !(charCode >= 48 && charCode <= 57) && // números
      !(charCode >= 97 && charCode <= 122) // letras minúsculas
    ) {
      return false;
    }
  }
  return true;
}

function validateName(event) {
  var text = event.target.value;
  var spanElement = document.createElement("span");
  spanElement.classList.add("alert-message");
  inputName.insertAdjacentElement("afterend", spanElement);
  if (text.length === 0) {
    inputName.classList.remove("input-correct");
    inputName.classList.add("input-error");
    spanElement.textContent = "Name cannot be empty";
  }
  for (var i = 0; i < text.length; i++) {
    if (i < 3) {
      inputName.classList.remove("input-correct");
      inputName.classList.add("input-error");
      spanElement.textContent = "The minimum number of characters is 3";
    } else if (!isNaN(text.charAt(i))) {
      inputName.classList.remove("input-correct");
      inputName.classList.add("input-error");
      spanElement.textContent = "Name have to be letters";
    } else {
      inputName.classList.remove("input-error");
      inputName.classList.add("input-correct");
      spanElement.remove();
      return text;
    }
  }
}

function quitErrorMessage() {
  var alertMessage = document.querySelector(".alert-message");
  if (alertMessage) {
    alertMessage.remove();
    alertMessage.classList.remove("input-error");
  }
}

function validationSurname(event) {
  var text = event.target.value;
  var spanElement = document.createElement("span");
  spanElement.classList.add("alert-message");
  inputSurname.insertAdjacentElement("afterend", spanElement);
  if (text.length === 0) {
    inputSurname.classList.remove("input-correct");
    inputSurname.classList.add("input-error");
    spanElement.textContent = "Surname cannot be empty";
  }
  for (var i = 0; i < text.length; i++) {
    if (i < 3) {
      inputSurname.classList.remove("input-correct");
      inputSurname.classList.add("input-error");
      spanElement.textContent = "The minimum number of characters is 3";
    } else if (!isNaN(text.charAt(i))) {
      inputSurname.classList.remove("input-correct");
      inputSurname.classList.add("input-error");
      spanElement.textContent = "Surname have to be letters";
    } else {
      inputSurname.classList.remove("input-error");
      inputSurname.classList.add("input-correct");
      spanElement.remove();
    }
  }
}

function validationDni(event) {
  var dni = event.target.value;
  var spanElement = document.createElement("span");
  spanElement.classList.add("alert-message");
  inputDni.insertAdjacentElement("afterend", spanElement);
  if (typeof parseInt(dni) !== "number") {
    inputDni.classList.remove("input-correct");
    inputDni.classList.add("input-error");
    spanElement.textContent = "DNI have to be numbers";
  } else if (dni.length < 7) {
    inputDni.classList.remove("input-correct");
    inputDni.classList.add("input-error");
    spanElement.textContent = "The minimum number of characters is 7";
  } else {
    inputDni.classList.remove("input-error");
    inputDni.classList.add("input-correct");
    spanElement.remove();
  }
}

function validationBirthday(event) {
  var birthday = event.target.value;
  var birthdayDates = new Date(birthday);
  var birthdayYear = birthdayDates.getFullYear();
  var actualyDate = new Date();
  var actualyYear = actualyDate.getFullYear();
  var spanElement = document.createElement("span");
  spanElement.classList.add("alert-message");
  inputBirthday.insertAdjacentElement("afterend", spanElement);
  console.log(birthdayDates);
  if (birthday === "") {
    inputBirthday.classList.remove("input-correct");
    inputBirthday.classList.add("input-error");
    spanElement.textContent = "Birthday cannot be empty";
  } else if (actualyYear - birthdayYear < 13) {
    inputBirthday.classList.remove("input-correct");
    inputBirthday.classList.add("input-error");
    spanElement.textContent = "Minimum age is 13";
  } else {
    inputBirthday.classList.remove("input-error");
    inputBirthday.classList.add("input-correct");
    spanElement.remove();
  }
}

function validationPhone(event) {
  var phoneToNumber = parseInt(event.target.value);
  var phoneString = event.target.value;
  var spanElement = document.createElement("span");
  spanElement.classList.add("alert-message");
  inputPhone.insertAdjacentElement("afterend", spanElement);
  if (isNaN(phoneToNumber)) {
    inputPhone.classList.remove("input-correct");
    inputPhone.classList.add("input-error");
    spanElement.textContent = "Phone have to be numbers";
  } else if (phoneString.length < 10) {
    inputPhone.classList.remove("input-correct");
    inputPhone.classList.add("input-error");
    spanElement.textContent = "The valids digits for the number are 9";
  } else {
    inputPhone.classList.remove("input-error");
    inputPhone.classList.add("input-correct");
    spanElement.remove();
  }
}

function validationAddress(event) {
  var address = event.target.value;
  var addressBlank = address.indexOf(" ");
  var spanElement = document.createElement("span");
  spanElement.classList.add("alert-message");
  inputAddress.insertAdjacentElement("afterend", spanElement);
  if (address.length < 5) {
    inputAddress.classList.remove("input-correct");
    inputAddress.classList.add("input-error");
    spanElement.textContent = "The minimum number of characters is 5";
  } else if (addressBlank <= 0) {
    inputAddress.classList.remove("input-correct");
    inputAddress.classList.add("input-error");
    spanElement.textContent = "There needs to be a blank space";
  } else {
    inputAddress.classList.remove("input-error");
    inputAddress.classList.add("input-correct");
    spanElement.remove();
  }
}

function validationLocation(event) {
  var location = event.target.value;
  var spanElement = document.createElement("span");
  spanElement.classList.add("alert-message");
  inputLocation.insertAdjacentElement("afterend", spanElement);
  if (!containsLettersAndNumbersLocation(location)) {
    inputLocation.classList.remove("input-correct");
    inputLocation.classList.add("input-error");
    spanElement.textContent = "Characters must be alphanumeric";
  } else if (location.length < 3) {
    inputLocation.classList.remove("input-correct");
    inputLocation.classList.add("input-error");
    spanElement.textContent = "The minimum number of characters is 3";
  } else {
    inputLocation.classList.remove("input-error");
    inputLocation.classList.add("input-correct");
    spanElement.remove();
  }
}

function validationPostalCode(event) {
  var postalCode = parseInt(event.target.value);
  var postalCodeString = event.target.value;
  var spanElement = document.createElement("span");
  spanElement.classList.add("alert-message");
  inputPostalCode.insertAdjacentElement("afterend", spanElement);
  if (postalCodeString.length < 4) {
    inputPostalCode.classList.remove("input-correct");
    inputPostalCode.classList.add("input-error");
    spanElement.textContent = "The minimum number of characters is 5";
  } else if (isNaN(postalCode)) {
    inputPostalCode.classList.remove("input-correct");
    inputPostalCode.classList.add("input-error");
    spanElement.textContent = "Postal Code have to be numbers";
  } else {
    inputPostalCode.classList.remove("input-error");
    inputPostalCode.classList.add("input-correct");
    spanElement.remove();
  }
}
function validationEmail(event) {
  var email = event.target.value;
  var spanElement = document.createElement("span");
  spanElement.classList.add("alert-message");
  inputEmail.insertAdjacentElement("afterend", spanElement);
  if (validation.test(email)) {
    inputEmail.classList.remove("input-error");
    inputEmail.classList.add("input-correct");
    spanElement.remove();
  } else {
    inputEmail.classList.remove("input-correct");
    inputEmail.classList.add("input-error");
    spanElement.textContent = "The email format is wrong";
  }
}

function validationPassword(event) {
  var passwordValue = event.target.value;
  var upperCase = false;
  var lowerCase = false;
  var number = false;
  var spanElement = document.createElement("span");
  spanElement.classList.add("alert-message");
  inputPassword.insertAdjacentElement("afterend", spanElement);
  for (var i = 0; i < passwordValue.length; i++) {
    var charCode = passwordValue.charAt(i);
    if (charCode >= "0" && charCode <= "9") {
      number = true;
    } else if (charCode === charCode.toUpperCase()) {
      upperCase = true;
    } else if (charCode === charCode.toLowerCase()) {
      lowerCase = true;
    }
  }
  if (!number || !upperCase || !lowerCase) {
    inputPassword.classList.remove("input-correct");
    inputPassword.classList.add("input-error");
    spanElement.textContent =
      "This field needs a capital letter, a lower case letter and a number";
  } else if (passwordValue < 8) {
    inputPassword.classList.remove("input-correct");
    inputPassword.classList.add("input-error");
    spanElement.textContent = "The minimum number of characters is 5";
  } else {
    inputPassword.classList.remove("input-error");
    inputPassword.classList.add("input-correct");
    spanElement.remove();
  }
}

function validationRepeatPassword(event) {
  var text = event.target.value;
  var spanElement = document.createElement("span");
  spanElement.classList.add("alert-message");
  repeatPassword.insertAdjacentElement("afterend", spanElement);
  if (text !== inputPassword.value) {
    repeatPassword.classList.remove("input-correct");
    repeatPassword.classList.add("input-error");
    spanElement.textContent = "The password are not the same";
  } else {
    repeatPassword.classList.remove("input-error");
    repeatPassword.classList.add("input-correct");
    spanElement.remove();
  }
}
