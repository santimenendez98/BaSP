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
var formatDate = "";

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
formRegistration.addEventListener("submit", validateForm);
document.addEventListener("DOMContentLoaded", setItemsLocalStorage);

//Functions

function quitErrorMessage() {
  var alertMessage = document.querySelector(".alert-message");
  if (alertMessage) {
    alertMessage.remove();
    alertMessage.classList.remove("input-error");
  }
}

function validateForm(event) {
  event.preventDefault();
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
    var form =
      "https://api-rest-server.vercel.app/signup" +
      "?name=" +
      inputName.value +
      "&lastName=" +
      inputSurname.value +
      "&dni=" +
      inputDni.value +
      "&dob=" +
      changeDateFormat(inputBirthday.value) +
      "&phone=" +
      inputPhone.value +
      "&address=" +
      inputAddress.value +
      "&city=" +
      inputLocation.value +
      "&zip=" +
      inputPostalCode.value +
      "&email=" +
      inputEmail.value +
      "&password=" +
      inputPassword.value;

    fetch(form)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.success) {
          alert(
            data.msg.toUpperCase() +
              "\n" +
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
              changeDateFormat(inputBirthday.value) +
              "\n" +
              "Phone: " +
              inputPhone.value +
              "\n" +
              "Address: " +
              inputAddress.value +
              "\n" +
              "Location: " +
              inputLocation.value +
              "\n" +
              "Postal Code: " +
              inputPostalCode.value +
              "\n" +
              "Email: " +
              inputEmail.value +
              "\n" +
              "Password: " +
              inputPassword.value
          );
          localStorage.setItem("Name", inputName.value);
          localStorage.setItem("Surname", inputSurname.value);
          localStorage.setItem("DNI", inputDni.value);
          localStorage.setItem("Birthday", inputBirthday.value);
          localStorage.setItem("Phone", inputPhone.value);
          localStorage.setItem("Address", inputAddress.value);
          localStorage.setItem("Location", inputLocation.value);
          localStorage.setItem("Postal Code", inputPostalCode.value);
          localStorage.setItem("Email", inputEmail.value);
          localStorage.setItem("Password", inputPassword.value);
          localStorage.setItem("Repeat Password", repeatPassword.value);
        }
      })
      .catch(function (error) {
        alert("Error: " + error.msg);
      });
  } else {
    alert("Some data is wrong");
  }
}

function setItemsLocalStorage() {
  inputName.value = localStorage.getItem("Name");
  inputSurname.value = localStorage.getItem("Surname");
  inputDni.value = localStorage.getItem("DNI");
  inputBirthday.value = localStorage.getItem("Birthday");
  inputPhone.value = localStorage.getItem("Phone");
  inputAddress.value = localStorage.getItem("Address");
  inputLocation.value = localStorage.getItem("Location");
  inputPostalCode.value = localStorage.getItem("Postal Code");
  inputEmail.value = localStorage.getItem("Email");
  inputPassword.value = localStorage.getItem("Password");
  repeatPassword.value = localStorage.getItem("Repeat Password");
  var inputValues = [
    inputName,
    inputSurname,
    inputDni,
    inputBirthday,
    inputAddress,
    inputLocation,
    inputPhone,
    inputPostalCode,
    inputEmail,
    inputPassword,
    repeatPassword,
  ];

  for (var i = 0; i < inputValues.length; i++) {
    if (inputValues[i].value === "") {
      inputValues[i].classList.remove("input-correct");
    } else {
      inputValues[i].classList.add("input-correct");
    }
  }
}

function validateName(event) {
  var text = event.target.value;
  var spanElement = document.createElement("span");
  spanElement.classList.add("alert-message");
  inputName.insertAdjacentElement("afterend", spanElement);
  var hasOnlyLetters = false;
  for (i = 0; i < text.length; i++) {
    if (
      (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) ||
      (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122)
    ) {
      hasOnlyLetters = true;
    } else {
      hasOnlyLetters = false;
    }
  }
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
    } else if (hasOnlyLetters === false) {
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

function validationSurname(event) {
  var text = event.target.value;
  var spanElement = document.createElement("span");
  spanElement.classList.add("alert-message");
  inputSurname.insertAdjacentElement("afterend", spanElement);
  var hasOnlyLetters = false;
  for (i = 0; i < text.length; i++) {
    if (
      (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) ||
      (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122)
    ) {
      hasOnlyLetters = true;
    } else {
      hasOnlyLetters = false;
    }
  }
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
    } else if (hasOnlyLetters === false) {
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
  var hasOnlyNumber = false;
  for (var i = 0; i < dni.length; i++) {
    if (dni.charCodeAt(i) >= 48 && dni.charCodeAt(i) <= 57) {
      hasOnlyNumber = true;
    } else {
      hasOnlyNumber = false;
    }
  }
  if (hasOnlyNumber === false) {
    inputDni.classList.remove("input-correct");
    inputDni.classList.add("input-error");
    spanElement.textContent = "DNI have to be numbers";
  } else if (dni.length < 7 || dni.length > 8) {
    inputDni.classList.remove("input-correct");
    inputDni.classList.add("input-error");
    spanElement.textContent = "The number of characters is 7 or 8";
  } else {
    inputDni.classList.remove("input-error");
    inputDni.classList.add("input-correct");
    spanElement.remove();
  }
}

function validationBirthday(event) {
  var birthday = event.target.value;
  var spanElement = document.createElement("span");
  spanElement.classList.add("alert-message");
  inputBirthday.insertAdjacentElement("afterend", spanElement);
  if (birthday === "") {
    inputBirthday.classList.remove("input-correct");
    inputBirthday.classList.add("input-error");
    spanElement.textContent = "Birthday cannot be empty";
  } else if (
    birthday.substring(0, 4) < 1930 ||
    birthday.substring(0, 4) > 2010
  ) {
    inputBirthday.classList.remove("input-correct");
    inputBirthday.classList.add("input-error");
    spanElement.textContent = "Minimum age is 13";
  } else {
    inputBirthday.classList.remove("input-error");
    inputBirthday.classList.add("input-correct");
    spanElement.remove();
    formatDate = changeDateFormat(birthday);
    console.log(formatDate);
  }
}

//Function for format Birthdate to API

function changeDateFormat(val) {
  var newDate =
    val.substring(5, 7) +
    "/" +
    val.substring(8, 10) +
    "/" +
    val.substring(0, 4);
  return newDate;
}

function changeDateFormatToForm(val) {
  if (val == null) {
    return "";
  } else {
    var newDate =
      val.substring(6, 10) +
      "-" +
      val.substring(0, 2) +
      "-" +
      val.substring(3, 5);
    return newDate;
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
  } else if (phoneString.length < 10 || phoneString.length > 10) {
    inputPhone.classList.remove("input-correct");
    inputPhone.classList.add("input-error");
    spanElement.textContent = "The valids digits for the number are 10";
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
  var hasLettersAndNumer = false;
  for (var i = 0; i < location.length; i++) {
    if (
      (location.charCodeAt(i) >= 48 && location.charCodeAt(i) <= 57) ||
      (location.charCodeAt(i) >= 97 && location.charCodeAt(i) <= 122)
    ) {
      hasLettersAndNumer = true;
    } else {
      hasLettersAndNumer = false;
    }
  }

  if (hasLettersAndNumer === false) {
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
  var postalCode = event.target.value;
  var postalCodeToString = postalCode.toString();
  var spanElement = document.createElement("span");
  spanElement.classList.add("alert-message");
  inputPostalCode.insertAdjacentElement("afterend", spanElement);
  var hasOnlyNumber = false;
  for (var i = 0; i < postalCode.length; i++) {
    if (postalCode.charCodeAt(i) >= 48 && postalCode.charCodeAt(i) <= 57) {
      hasOnlyNumber = true;
    } else {
      hasOnlyNumber = false;
    }
  }
  if (hasOnlyNumber === false) {
    inputPostalCode.classList.remove("input-correct");
    inputPostalCode.classList.add("input-error");
    spanElement.textContent = "Postal Code have to be numbers";
  } else if (postalCodeToString.length > 4) {
    inputPostalCode.classList.remove("input-correct");
    inputPostalCode.classList.add("input-error");
    spanElement.textContent = "The minimum number of characters is 4";
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
  if (
    inputPassword.classList.contains("input-error") ||
    inputPassword.value !== text
  ) {
    repeatPassword.classList.remove("input-correct");
    repeatPassword.classList.add("input-error");
    spanElement.textContent = "The password are not the same";
  } else {
    repeatPassword.classList.remove("input-error");
    repeatPassword.classList.add("input-correct");
    spanElement.remove();
  }
}
