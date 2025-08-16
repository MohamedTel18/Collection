const submitButton = document.querySelector('.subscribe-button');
const emailInput = document.getElementById('email');
const dismissButton = document.querySelector('.dismiss-button');

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    if(checkEmail(emailInput.value)) {
        showSuccessMessage();
        return;
    }
    ShowError();
    emailInput.focus();
});

function checkEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email && emailRegex.test(email);
}

function showSuccessMessage() {
    const main = document.querySelector('.main');
    const success=document.querySelector('.success-message');
    success.style.display = 'flex';
    main.style.display = 'none';
}

dismissButton.addEventListener('click', function() {
    const main = document.querySelector('.main');
    const success = document.querySelector('.success-message');
    success.style.display = 'none';
    main.style.display = 'flex';
    emailInput.value = ''; // Clear the input field
});

function ShowError()
{
    emailInput.style.borderColor = 'red';
    emailInput.placeholder = 'Please enter a valid email address';
    emailInput.style.backgroundColor = '#ed8c8cff';
}