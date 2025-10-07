document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Basic password validation
        if (passwordInput.value !== confirmPasswordInput.value) {
            alert('Passwords do not match!');
            confirmPasswordInput.focus();
            return; // Stop form submission
        }

        // You can add more advanced validation here for email, phone, etc.
        // For demonstration, we'll just log the form data and simulate submission.

        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            country: document.getElementById('country').value,
            dob: document.getElementById('dob').value,
            gender: document.querySelector('input[name="gender"]:checked')?.value, // Safely get checked radio value
            password: passwordInput.value
        };

        console.log('Form Data Submitted:', formData);

        // Simulate an API call or success message
        alert('Registration successful! Check console for data.');
        registrationForm.reset(); // Clear the form after successful submission
    });

    // Optional: Add real-time password match feedback
    confirmPasswordInput.addEventListener('keyup', () => {
        if (passwordInput.value !== confirmPasswordInput.value && confirmPasswordInput.value !== '') {
            confirmPasswordInput.style.borderColor = 'red';
            // You could also display an error message next to the field
        } else {
            confirmPasswordInput.style.borderColor = ''; // Reset to default
        }
    });

    passwordInput.addEventListener('keyup', () => {
        if (confirmPasswordInput.value !== '' && passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordInput.style.borderColor = 'red';
        } else if (confirmPasswordInput.value !== '') {
            confirmPasswordInput.style.borderColor = ''; // Reset if they now match
        }
    });
});