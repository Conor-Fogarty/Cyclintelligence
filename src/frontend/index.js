function validatePassword(password) {
    const minLength = 8;
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumberOrSpecialChar = /[0-9!@#\$%\^\&*\)\(+=._-]+/.test(password);

    return password.length >= minLength && hasLowerCase && hasUpperCase && hasNumberOrSpecialChar;
}

async function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const signupError = document.getElementById('signup-error');

    if (!validatePassword(password)) {
        signupError.textContent = 'Password must be at least 8 characters long, contain a lowercase letter, an uppercase letter, and a number or special character.';
        return;
    }

    try {
        const response = await fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const result = await response.json();

        if (response.status === 201) {
            signupError.textContent = 'Signup successful! You can now login.';
        } else {
            signupError.textContent = result.error;
        }
    } catch (err) {
        signupError.textContent = 'An error occurred. Please try again.';
    }
}

async function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const loginError = document.getElementById('login-error');

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const result = await response.json();

        if (response.status === 200) {
            sessionStorage.setItem('username', username); // Store username in sessionStorage
            loginError.textContent = 'Login successful!';
            window.location.href = 'dashboard.html';
        } else {
            loginError.textContent = result.error;
        }
    } catch (err) {
        loginError.textContent = 'An error occurred. Please try again.';
    }
}






