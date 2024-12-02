const correctPassword = "work"; // This is the correct password
const submitBtn = document.getElementById('submitBtn');
const passwordInput = document.getElementById('passwordInput');
const message = document.getElementById('message');

submitBtn.addEventListener('click', function() {
    const enteredPassword = passwordInput.value;

    if (enteredPassword === correctPassword) {
        // Password is correct, redirect to the home page
        window.location.href = "Work/ttcu.html"; // Change to your actual home page
    } else {
        // Password is incorrect, show error message
        message.textContent = "Incorrect password. Please try again.";
    }
});


