function validatePassword(password) {
    const minLength = 8;
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumberOrSpecialChar = /[0-9!@#\$%\^\&*\)\(+=._-]+/.test(password);

    return password.length >= minLength && hasLowerCase && hasUpperCase && hasNumberOrSpecialChar;
}

function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const signupError = document.getElementById('signup-error');

    if (!validatePassword(password)) {
        signupError.textContent = 'Password must be at least 8 characters long, contain a lowercase letter, an uppercase letter, and a number or special character.';
        return;
    }

    if (localStorage.getItem(username)) {
        signupError.textContent = 'Username already exists.';
        return;
    }

    localStorage.setItem(username, password);
    signupError.textContent = 'Signup successful! You can now login.';
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const loginError = document.getElementById('login-error');

    const storedPassword = localStorage.getItem(username);

    if (storedPassword === password) {
        loginError.textContent = 'Login successful!';
        window.location.href = 'dashboard.html';
    } else {
        loginError.textContent = 'Invalid username or password.';
    }
}




