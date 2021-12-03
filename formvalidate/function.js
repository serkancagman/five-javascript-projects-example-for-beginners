const form = document.querySelector("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputCheck();
});

const inputCheck = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setError(username, "Username cannot be blank !");
  } else if (usernameValue.length < 3) {
    setError(username, "Username must contain at least 5 characters. ");
  } else {
    setSucces(username);
  }

  if (passwordValue === "") {
    setError(password, "Password cannot be blank !");
  } else if (passwordValue.length < 6) {
    setError(password, "Password must contain at least 6 characters.");
  } else {
    setSucces(password);
  }

  if (password2Value === "") {
    setError(password2, "Password cannot be blank !");
  } else if (password2Value.length < 6) {
    setError(password2, "Password must contain at least 6 characters.");
  } else if (passwordValue !== password2Value) {
    setError(password, "Passwords not match !");
    setError(password2, "Passwords not match !");
  } else {
    setSucces(password2);
  }

  if(emailValue === ''){
    setError(email, 'Email cannot be blank')
}else if(!isEmail(emailValue)){
    setError(email, 'Not a valid email')
}
else{
    setSucces(email)
}
};

const setError = (input, errorMessage) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerHTML = errorMessage;
  formControl.className = "input-parent error";
};
const setSucces = (input) => {
  const formControl = input.parentElement;

  formControl.className = "input-parent succes";
};

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
} 
