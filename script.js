const fullname = document.querySelector("#name")
const email = document.querySelector("#email");
const country = document.querySelector("#country")
const zipcode = document.querySelector("#zipcode")

const submit = document.querySelector("#submitbtn")

//when the user leaves an input empty
function fieldRequired(errormsg, input) {
  errormsg.textContent = "This field is required buddy"
  input.classList.add("invalid");
}

//when the user enters an invalid input
function invalidInput(errormsg, input) {
  if (input === fullname) errormsg.textContent = "Enter your real full name please"
  else if (input === email) errormsg.textContent = "I'm expecting an email adress"
  else if (input === country) errormsg.textContent = "I'm sure that's not your country"
  else if (input === zipcode) errormsg.textContent = "That's not your zip code man"
  input.classList.add("invalid")
}

//when the user enters a valid input
function validInput (errormsg, input) {
  errormsg.textContent = ""
  input.classList.remove("invalid")
}

//submit handling
submit.addEventListener("click", (ev) => {
  ev.preventDefault()
  
  const nameError = document.querySelector("#name-error")
  const emailError = document.querySelector("#email-error")
  const countryError = document.querySelector("#country-error")
  const zipcodeError = document.querySelector("#zipcode-error")
  
  if (fullname.validity.valueMissing) fieldRequired(nameError, fullname)
  
  if (email.validity.valueMissing) fieldRequired(emailError, email)
  
  if (country.validity.valueMissing) fieldRequired(countryError, country)

  if (zipcode.validity.valueMissing) fieldRequired(zipcodeError, zipcode)
})

//name validation
fullname.addEventListener("input", (ev) => {
  const nameError = document.querySelector("#name-error")  
  if (fullname.validity.valueMissing) fieldRequired(nameError, fullname)
  else if (!fullname.validity.valid) invalidInput(nameError, fullname)
  else validInput(nameError, fullname)
})

//email validation
email.addEventListener("input", (ev) => {
  const emailError = document.querySelector("#email-error");
  if (email.validity.valueMissing) fieldRequired(emailError, email)
  else if (email.validity.typeMismatch) invalidInput(emailError, email)
  else validInput(emailError, email)
});

//country validation
country.addEventListener("input", (ev) => {
  const countryError = document.querySelector("#country-error")  
  if (country.validity.valueMissing) fieldRequired(countryError, country)
  else if (!country.validity.valid) invalidInput(countryError, country)
  else validInput(countryError, country)
});

//zipcode validation
zipcode.addEventListener("input", (ev) => {
  const zipcodeError = document.querySelector("#zipcode-error")  
  if (zipcode.validity.valueMissing) fieldRequired(zipcodeError, zipcode)
  else if (!zipcode.validity.valid) invalidInput(zipcodeError, zipcode)
  else validInput(zipcodeError, zipcode)
});