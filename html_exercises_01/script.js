// Alert for Page Welcome Message
document.addEventListener('DOMContentLoaded', function () {
    var welcomeAlertShown = localStorage.getItem('welcomeAlertShown');

    if (!welcomeAlertShown) {
        alert('Welcome! This page was created by @DLitaoen at GitHub.');
        localStorage.setItem('welcomeAlertShown', true);
    }
});

// Alert for Successful Form Submission
document.getElementById('button-submit').onclick = function() {
    alert('Form successfully submitted. Thank you!');
};