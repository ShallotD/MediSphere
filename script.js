/* Sign up form*/
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    clearErrors();

    let valid = true;

    // Validate Name
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        valid = false;
        showError('nameError', 'Name is required.');
    }

    // Validate Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
        valid = false;
        showError('emailError', 'Enter a valid email address.');
    }

    // Validate Password
    const password = document.getElementById('password').value;
    if (password.length < 8) {
        valid = false;
        showError('passwordError', 'Password must be at least 8 characters long.');
    }

    // Validate Confirm Password
    const confirmPassword = document.getElementById('confirm_password').value;
    if (confirmPassword !== password) {
        valid = false;
        showError('confirmPasswordError', 'Passwords do not match.');
    }

    // Validate Age
    const age = parseInt(document.getElementById('age').value);
    if (isNaN(age) || age < 18 || age > 100) {
        valid = false;
        showError('ageError', 'Age must be between 18 and 100.');
    }

    // Validate Gender
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        valid = false;
        showError('genderError', 'Please select a gender.');
    }

    // Validate Country
    const country = document.getElementById('country').value;
    if (country === '') {
        valid = false;
        showError('countryError', 'Please select your country.');
    }

    // Validate Terms and Conditions
    const terms = document.getElementById('terms & conditions').checked;
    if (!terms) {
        valid = false;
        showError('termsError', 'You must agree to the terms and conditions.');
    }

    if (valid) {
        alert('Registration successful!');
        // Here you can submit the form or send the data to your server
    }
});

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
}

function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.innerText = '');
}



/* LogIn Form */
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    clearErrors(); // Clear previous error messages

    let valid = true;

    // Validate Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/; // Basic email regex
    if (!emailPattern.test(email)) {
        valid = false;
        showError('loginEmailError', 'Enter a valid email address.');
    }

    // Validate Password
    const password = document.getElementById('password').value;
    if (password.trim() === '') {
        valid = false;
        showError('loginPasswordError', 'Password is required.');
    }

    // If valid, handle login logic
    if (valid) {
        alert('Login successful!'); // Placeholder for actual login logic
    }
});

// Function to display error messages
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
}

// Function to clear error messages
function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.innerText = '');
}


/* Appointment form */
document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        specialization: document.getElementById('specialization').value,
        message: document.getElementById('message').value
    };

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const emailField = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    if (!emailPattern.test(emailField.value)) {
        emailError.style.display = 'inline';
        return; // Stop if email is invalid
    } else {
        emailError.style.display = 'none';
    }

    // Display form data in the summary section
    const formSummary = document.getElementById('formSummary');
    formSummary.innerHTML = `
        <h3>Appointment Summary</h3>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Date:</strong> ${formData.date}</p>
        <p><strong>Time:</strong> ${formData.time}</p>
        <p><strong>Specialization:</strong> ${formData.specialization}</p>
        <p><strong>Notes:</strong> ${formData.message}</p>
        <p><strong>Form has been successfully submitted.</strong></p>
    `;
});








