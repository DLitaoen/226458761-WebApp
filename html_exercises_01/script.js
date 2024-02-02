// Alert for Page Welcome Message
document.addEventListener('DOMContentLoaded', function () {
    var welcomeAlertShown = localStorage.getItem('welcomeAlertShown');

    if (!welcomeAlertShown) {
        alert('Welcome! This page was created by @DLitaoen at GitHub.');
        localStorage.setItem('welcomeAlertShown', true);
    }
});

// Alert for Successful Form Submission
document.getElementById('button-submit').onclick = function(event) {
    event.preventDefault();

    if (formValidation()) {
        alert('Form successfully submitted. Thank you!');
    }    
};

// Form Validation
function formValidation() {
    var email = document.getElementById('email-input').value;
    var username = document.getElementById('username-input').value;
    var message = document.getElementById('password-input').value;
    var gender = document.querySelectorAll('input[name="gender-input"]:checked');
    var termsAndConditions = document.getElementById('terms-conditions-input');

    if (!emailValidation(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (!usernameValidation(username)) {
        alert('Please enter a valid username.');
        return false;
    }

    if (!passwordValidation(password)) {
        alert('Please enter a valid password.');
        return false;
    }

    if (gender.length === 0) {
        alert('Please select a gender.');
        return false;
    }

    if (!termsAndConditions.checked) {
        alert('Please accept the Terms and Conditions.');
        return false;
    }

    return true;

    function emailValidation(email) {
        return email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
    }

    function usernameValidation(username) {
        return username.match(/^[0-9A-Za-z]{6,15}$/);
    }
    
    function passwordValidation(password) {
    return password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,20}$/);
    }
}