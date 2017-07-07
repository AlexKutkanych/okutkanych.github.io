
//login

var loginNameField = document.querySelector("#login__name-field"),
    loginPassField = document.querySelector("#login__pass-field"),
    loginBtn = document.querySelector("#login__btn"),
    loggedUserBlock = document.querySelector(".header-wrapper__logged-user-section"),
    loggedUserGreetings = document.querySelector(".logged-user__greetings"),
    allLoginInputs = document.querySelectorAll(".login-form__wrapper > input"),
    loginAlertMessages = document.querySelectorAll(".login__alert-message"),
    allLoginInputsLength = allLoginInputs.length;

//login user

function loginUser(e){
  e.preventDefault();
  var loggedUser = localStorage.getItem("signedupUser"); //!!!GET THE RIGHT ITEM FROM localStorage
  var parseUserInfo = JSON.parse(loggedUser);
  console.log(loggedUser);

  if (loginNameField.value !== parseUserInfo.name) {
    loginAlertMessages[0].classList.add("show-alert-message");
  } else {
    loginAlertMessages[0].classList.remove("show-alert-message");
  }

  if (loginPassField.value !== parseUserInfo.password) {
    loginAlertMessages[1].classList.add("show-alert-message");
  } else {
    loginAlertMessages[1].classList.remove("show-alert-message");
  }

  if(loginNameField.value === parseUserInfo.name && loginPassField.value === parseUserInfo.password) {
    alert("Welcome, "+ loginNameField.value);
    loggedUserGreetings.innerHTML = "hi, "+ loginNameField.value;
    loggedUserBlock.style.display = "block";
    // loginNameField.value = "";
    clearLoginInputs();
    clearSignupInputs();
    closeJoinUsModal();
  } 

}

function clearLoginInputs(){
  for (var i = 0; i < allLoginInputsLength; i++){
    allLoginInputs[i].value = "";
  }
}


loginBtn.addEventListener("click", loginUser);



// function addNewUser(e){
//   //create new user
//   user = {
//     name: signupNameField.value,
//     email: signupEmailField.value,
//     password: signupPassField.value
//   };
//
//   //write to localStorage
//   var local = localStorage.setItem("user", JSON.stringify(user));
//   console.log(local);
// }
//
// function validateSignupForm(e){
//     e.preventDefault();
//   if (!regexpUsername.test(signupNameField.value)) {
//     errors[errors.length] = "You valid Name .";
//     alert("bye");
//   }
//
//   if (!regexpEmail.test(signupEmailField)) {
//     errors[errors.length] = "You must enter a valid email address.";
//  }
//
//  if (!regexpPassword.test(signupPassField)) {
//     errors[errors.length] = "You must enter a valid Password ";
//  }
//
//   checkPassRepeat();
//
//   if (errors.length > 0) {
//
//     reportErrors(errors);
//     return false;
//    }
//     return true;
// }
//
// function reportErrors(errors){
//  var msg = "Please Enter Valide Data...\n";
//  for (var i = 0; i<errors.length; i++) {
//  var numError = i + 1;
//   msg += "\n" + numError + ". " + errors[i];
// }
//  alert(msg);
// }
//
//
// signupBtn.addEventListener("click", validateSignupForm);
