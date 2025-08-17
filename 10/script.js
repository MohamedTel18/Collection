const submitButton = document.getElementById('submit-button');
const successNotification = document.getElementById('success-notification');
const form = document.querySelector('form');

// Add event listener to form to handle submission
document.addEventListener('DOMContentLoaded', function() {
    form.addEventListener('submit', handleSubmit);
});

function handleSubmit(event)
{
    event.preventDefault(); // Prevent form submission and page reload
    
    if (CheckFormValidity()) {
        ShowNotification();
        clearForm(); // Clear form after successful submission
    }

    return false; // Additional prevention of form submission
}


function ShowNotification()
{
    successNotification.style.display = 'block';
    successNotification.style.transform = 'translateY(0)';
    successNotification.style.opacity = '1';

    setTimeout(() => {
        hideSuccessNotification();
    }, 5000); // 5 seconds display time
}

function hideSuccessNotification() {
    successNotification.style.opacity = '0';
    setTimeout(() => {
        successNotification.style.display = 'none';
    }, 300); // Fade out transition
}

function clearForm() {
    // Clear all form inputs
    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    
    // Clear radio buttons
    const radioButtons = document.querySelectorAll('input[name="query-type"]');
    radioButtons.forEach(radio => radio.checked = false);
    
    // Clear checkbox
    document.getElementById('consent').checked = false;
    
    // Hide all error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.style.display = 'none');
}

function CheckFormValidity() {
  const firstName = document.getElementById('first-name').value.trim();
  const lastName = document.getElementById('last-name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const queryType = document.querySelector('input[name="query-type"]:checked');
  const consent = document.getElementById('consent').checked;

  let isValid = true;

  if (!firstName) {
    document.getElementById('firstNameError').style.display = 'block';
    isValid = false;
  } else {
    document.getElementById('firstNameError').style.display = 'none';
  }

  if (!lastName) {
    document.getElementById('lastNameError').style.display = 'block';
    isValid = false;
  } else {
    document.getElementById('lastNameError').style.display = 'none';
  }

  if (!email || !isValidEmail(email)) {
    document.getElementById('emailError').style.display = 'block';
    isValid = false;
  } else {
    document.getElementById('emailError').style.display = 'none';
  }

  if (!message) {
    document.getElementById('messageError').style.display = 'block';
    isValid = false;
  } else {
    document.getElementById('messageError').style.display = 'none';
  }

  // Add validation for query type and consent if needed
  if (!queryType) {
    console.log('Please select a query type');
    isValid = false;
  }

  if (!consent) {
    console.log('Please provide consent');
    isValid = false;
  }

  return isValid;
}

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}