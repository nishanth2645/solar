const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// ================= REGISTER =================

document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("registerUsername").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    // Save in localStorage
    localStorage.setItem("registeredUsername", username);
    localStorage.setItem("registeredPassword", password);

    alert("Registration Successful! Now Login.");
    container.classList.remove('active');
});

// ================= LOGIN =================

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const storedUsername = localStorage.getItem("registeredUsername");
    const storedPassword = localStorage.getItem("registeredPassword");

    if(username === storedUsername && password === storedPassword) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "solar.html";  // Change if needed
    } else {
        alert("Invalid Username or Password!");
    }
});
// ================= CHECK LOGIN STATUS ON PAGE LOAD =================
