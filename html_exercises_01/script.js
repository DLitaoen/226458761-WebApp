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
    var password = document.getElementById('password-input').value;
    var gender = document.querySelectorAll('input[name="gender-input"]:checked');
    var termsAndConditions = document.getElementById('terms-conditions-input');

    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        alert('Email must contain a valid email address');
        return false;
    }

    if (!username.match(/^[0-9A-Za-z]{6,15}$/)) {
        alert('Username must only contain alphanumeric characters and be 6-15 characters long');
        return false;
    }

    if (!password.match(/^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/)) {
        alert('Password must have at least 1 number, 1 uppercase and lowercase letter, 1 special character, and 8 characters long');
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
}