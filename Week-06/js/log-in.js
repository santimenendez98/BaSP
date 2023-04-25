// Variables

var inputs = document.querySelectorAll(".input");
var form = document.getElementById("form");
var emailForm = document.getElementById("email");
var passwordForm = document.getElementById("password");
var validation = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
var password = /[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g;
var submit = document.getElementsByClassName("btn-submit").disabled;
var headerLogIn = document.getElementsByClassName("title-login");

// Event Listeners
form.addEventListener("submit", btnSubmit);
emailForm.addEventListener("blur", validationEmail);
emailForm.addEventListener("focus", refreshForm);
passwordForm.addEventListener("blur", validationPassword);
passwordForm.addEventListener("focus", refreshForm);
// Funciones

inputs.forEach((element) => {
  {
    element.required = true;
  }
});

function validationEmail(event) {
  var email = event.target.value;
  var spanElement = document.createElement("span");
  spanElement.classList.add("alert-message");
  emailForm.insertAdjacentElement("afterend", spanElement);
  if (validation.test(email)) {
    emailForm.classList.remove("input-error");
    emailForm.classList.add("input-correct");
    spanElement.remove();
  } else {
    emailForm.classList.remove("input-correct");
    emailForm.classList.add("input-error");
    spanElement.textContent = "The email format is wrong";
  }
}

function refreshForm() {
  var messageError = document.querySelector(".alert-message");
  if (messageError) {
    messageError.remove();
    messageError.classList.remove("input-error");
  }
}

function validationPassword(event) {
  var passwordValue = event.target.value;
  var spanElement = document.createElement("span");
  spanElement.classList.add("alert-message");
  passwordForm.insertAdjacentElement("afterend", spanElement);
  if (passwordValue.length < 8) {
    passwordForm.classList.add("input-error");
    passwordForm.classList.remove("input-correct");
    spanElement.textContent = "The minimum number of characters is 8";
  } else if (password.test(passwordValue)) {
    passwordForm.classList.add("input-error");
    passwordForm.classList.remove("input-correct");
    spanElement.textContent = "Password format is wrong";
  } else {
    passwordForm.classList.add("input-correct");
    spanElement.remove();
  }
}

function btnSubmit(event) {
  if (
    emailForm.classList.contains("input-correct") &&
    passwordForm.classList.contains("input-correct")
  ) {
    var mensaje =
      "User: " + emailForm.value + "\n" + "Password: " + passwordForm.value;
    alert(mensaje);

    //Vacias campos

    emailForm = "";
    passwordForm = "";
  } else {
    event.preventDefault();
    alert("Username or Password are incorrect");
  }
}
