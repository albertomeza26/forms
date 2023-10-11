let password = document.getElementById('password');
const validPassword = document.querySelector('.valid-password')
let confirmPassword = document.getElementById('confirm_password');
const validMatch = document.querySelector('.valid-match');
let firstName = document.getElementById('first_name');
const validFirstName = document.querySelector('.valid-first-name');
let lastName = document.getElementById('last_name');
const validLastName = document.querySelector('.valid-last-name');
let email = document.getElementById('email');
const validEmail = document.querySelector('.valid-email');
let phoneNumber = document.getElementById('phone_number');
const validPhone = document.querySelector('.valid-phone');
const validity = document.querySelector('#valid');

const checkForm = document.querySelector('.check_form');

function nameCheck() {
    if (!firstName.checkValidity() || firstName.value === ''){
        validFirstName.innerHTML = firstName.validationMessage;
        firstName.style.border = "thin solid red";
    }
}

function lastNameCheck() {
    if (!lastName.checkValidity() || lastName.value === ''){
        validLastName.innerHTML = lastName.validationMessage;
        lastName.style.border = "thin solid red";
    }
}

function emailCheck() {
    if (!email.checkValidity() || email.value === ''){
        validEmail.innerHTML = email.validationMessage;
        email.style.border = "thin solid red";
    }
}

function phoneCheck() {
    if (!phoneNumber.checkValidity() || phoneNumber.value === ''){
        validPhone.innerHTML = phoneNumber.validationMessage;
        phoneNumber.style.border = "thin solid red";
    }
}

function passwordCheck() {
    if (!password.checkValidity() || password.value === ''){
        validPassword.innerHTML = password.validationMessage;
        password.style.border = "thin solid red";
    }
}

function confirmCheck() {
    let inputP = password.value;
    let confirmP = confirmPassword.value; {
    if (inputP !== confirmP || confirmP === '') {
        confirmPassword.style.border = "thin solid red";
        validMatch.innerHTML = "*Passwords do not match";
    }
    else if (inputP === confirmP) {
        confirmPassword.style.border = "thin solid green";
        validMatch.innerHTML = "*Password match success";
        validMatch.style.color = 'green'
    }
}
}

function fcheck () {
    validFirstName.innerHTML = null
    validLastName.innerHTML = null
    validEmail.innerHTML = null
    validPhone.innerHTML = null
    validPassword.innerHTML = null
    validMatch.innerHTML = null
    firstName.style.borderColor = null
    lastName.style.borderColor = null
    email.style.borderColor = null
    phoneNumber.style.borderColor = null
    password.style.borderColor = null
    confirmPassword.style.borderColor = null
    nameCheck();
    lastNameCheck();
    emailCheck();
    phoneCheck();
    passwordCheck();
    confirmCheck();
}

checkForm.addEventListener('click', () => fcheck());