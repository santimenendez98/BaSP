// Variables

var inputs = document.querySelectorAll(".input");
var form = document.getElementById("form");
var emailForm = document.getElementById("email");
var passwordForm = document.getElementById("password");
var validation = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
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
  var upperCase = false;
  var lowerCase = false;
  var number = false;
  var spanElement = document.createElement("span");
  spanElement.classList.add("alert-message");
  passwordForm.insertAdjacentElement("afterend", spanElement);
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
    passwordForm.classList.remove("input-correct");
    passwordForm.classList.add("input-error");
    spanElement.textContent =
      "This field needs a capital letter, a lower case letter and a number";
  } else if (passwordValue < 8) {
    passwordForm.classList.remove("input-correct");
    passwordForm.classList.add("input-error");
    spanElement.textContent = "The minimum number of characters is 5";
  } else {
    passwordForm.classList.remove("input-error");
    passwordForm.classList.add("input-correct");
    spanElement.remove();
  }
}

function btnSubmit(event) {
  event.preventDefault();
  var form =
    "https://api-rest-server.vercel.app/login" +
    "?email=" +
    emailForm.value +
    "&password=" +
    passwordForm.value;
  if (
    emailForm.classList.contains("input-correct") &&
    passwordForm.classList.contains("input-correct")
  ) {
    fetch(form)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.success) {
          alert(data.msg);
          localStorage.setItem("Email", emailForm.value);
          localStorage.setItem("Password", passwordForm.value);
        } else if (data.msg) {
          alert("Error:" + data.msg);
        } else if (data.errors) {
          var errorMsg = [];
          for (var i = 0; i < data.errors.length; i++) {
            errorMsg.push(data.errors[i].msg);
          }
          alert(errorMsg + "\n");
        }
      });
    //Vacias campos
  } else {
    alert("Username or Password are incorrect");
  }
}
