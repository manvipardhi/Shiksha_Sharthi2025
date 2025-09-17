document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simple validation (in a real app, this would be an API call)
    if (username === "ansh" && password === "1234") {
        errorMessage.style.display = 'none';
        alert("Login successful! Redirecting to dashboard...");
        window.location.href = "./Home.html";
    } else {
        errorMessage.textContent = "Invalid username or password.";
        errorMessage.style.display = 'block';
    }
});