const checkForm = document.querySelector('.check_form');
let password = document.getElementById('password').value;
let confirmPassword = document.getElementById('confirm_password').value;
const validMatch = document.querySelector('.valid-match');

function pcheck (password, confirmPassword) {
    if (password !== confirmPassword) {
        validMatch.innerHTML = "*Passwords do not match.";
    }
    else if (password === confirmPassword) {
        validMatch.innerHTML = "*Passwords match.";
    }
}

checkForm.addEventListener('click', () => pcheck(password, confirmPassword));
