// Variables

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
passwordForm.addEventListener("focus", refreshFormPassword);
// Funciones

function validationEmail(event) {
  var email = event.target.value;
  var errorMensage = '<div class="mensage-error"><p>Invalid Email</p></div>';
  if (validation.test(email)) {
    emailForm.classList.remove("input-error");
    emailForm.classList.add("input-correct");
  } else {
    emailForm.classList.remove("input-correct");
    emailForm.classList.add("input-error");
    passwordForm.appendChild(errorMensage);
    form.insertAdjacentHTML("afterbegin", errorMensage);
  }
}

function refreshForm() {
  var error = document.getElementsByClassName("input-error");
  if (error) {
    emailForm.classList.remove("input-error");
  }
}

function validationPassword(event) {
  var passwordValue = event.target.value;
  if (passwordValue.length < 8) {
    passwordForm.classList.add("input-error");
    passwordForm.classList.remove("input-correct");
  } else if (password.test(passwordValue)) {
    passwordForm.classList.add("input-error");
    passwordForm.classList.remove("input-correct");
  } else {
    passwordForm.classList.add("input-correct");
  }
}

function refreshFormPassword() {
  var error = document.getElementsByClassName("input-error");
  if (error) {
    passwordForm.classList.remove("input-error");
  }
}

function btnSubmit(event) {
  event.preventDefault();
  var alertError = document.createElement("div");
  if (
    emailForm.classList.contains("input-correct") &&
    passwordForm.classList.contains("input-correct")
  ) {
    var obj = {
      email: "",
      password: "",
    };
    obj.email = emailForm.value;
    obj.password = passwordForm.value;
    var mensaje = "User: " + obj.email + "\n" + "Password: " + obj.password;
    alert(mensaje);
  } else {
    alert("Username or Password are incorrect");
    alertError.classList.add("alert-mensage");
    alertError.textContent = "Username or Password are incorrect";
    document
      .querySelector(".form-container")
      .insertBefore(alertError, document.querySelector(".title-login"));

    setTimeout(() => {
      alertError.remove();
    }, 2000);
  }
}
