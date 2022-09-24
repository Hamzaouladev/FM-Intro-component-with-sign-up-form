let submitBtn = document.querySelector("#submit");
let fn = document.querySelector("#firstName");
let ln = document.querySelector("#lastName");
let email = document.querySelector("#email");
let pw = document.querySelector("#password");
let inputs = document.querySelectorAll(".form input");

const emailPattern = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) ;
const namePattern = new RegExp(/^[a-z ,.'-]+$/i);
const passwordPattern = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);

submitBtn.addEventListener("click", validateInputs);

function validateInputs(e) {
  e.preventDefault();
  checkPatterns();
}

function checkPatterns() {
  inputs.forEach((input) => {
    if (input.value === '') {
      input.nextSibling.nextSibling.textContent = `${input.attributes.placeholder.value} cannot be empty`;
      input.classList.add("error");
      input.nextSibling.nextSibling.classList.remove("hidden");
    } else if (input.attributes.name.value === "email" && input.value !== '' && !emailPattern.test(input.value.trim())) {
      input.nextSibling.nextSibling.textContent = "This doesn't look like an email";
      input.classList.add("error");
      input.nextSibling.nextSibling.classList.remove("hidden");
    } else if (input.attributes.name.value === "password" && input.value !== '' && !passwordPattern.test(input.value.trim())) {
      input.nextSibling.nextSibling.textContent = "Minimum eight characters, at least one letter and one number";
      input.classList.add("error");
      input.nextSibling.nextSibling.classList.remove("hidden");
    } else {
      input.classList.remove("error");
      input.nextSibling.nextSibling.classList.add("hidden");
    }
  });
}
 
  