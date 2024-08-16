document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch(`/goals/${sessionStorage.getItem('username')}`);
        const goals = await response.json();

        document.getElementById('weekly-mileage').value = goals.weeklyMileage || '';
        document.getElementById('monthly-mileage').value = goals.monthlyMileage || '';
        document.getElementById('daily-calories').value = goals.dailyCalories || '';
        document.getElementById('weight').value = goals.weight || '';
        document.getElementById('weekly-exercise').value = goals.weeklyExercise || '';
        document.getElementById('monthly-exercise').value = goals.monthlyExercise || '';
    } catch (err) {
        console.error('Failed to load goals:', err);
    }
});

document.getElementById('goals-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = sessionStorage.getItem('username');

    if (!username) {
        alert('Username not found. Please log in again.');
        window.location.href = 'index.html';
        return;
    }
    const goals = {
        weeklyMileage: document.getElementById('weekly-mileage').value,
        monthlyMileage: document.getElementById('monthly-mileage').value,
        dailyCalories: document.getElementById('daily-calories').value,
        weight: document.getElementById('weight').value,
        weeklyExercise: document.getElementById('weekly-exercise').value,
        monthlyExercise: document.getElementById('monthly-exercise').value
    };

    try {
        const response = await fetch(`/goals/${sessionStorage.getItem('username')}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(goals),
        });

        if (response.status === 200) {
            alert('Goals saved successfully!');
        } else {
            alert('Failed to save goals.');
        }
    } catch (err) {
        console.error('Failed to save goals:', err);
        alert('An error occurred. Please try again.');
    }
});
async function deleteUserAccount() {
    const username = sessionStorage.getItem('username');

    if (!username) {
        alert('Username not found. Please log in again.');
        window.location.href = 'index.html';
        return;
    }

    const confirmation = confirm('Are you sure you want to delete your account? This action cannot be undone.');
    if (!confirmation) return;

    try {
        const response = await fetch(`/users/${username}`, {
            method: 'DELETE',
        });

        if (response.status === 200) {
            alert('Your account has been deleted.');
            sessionStorage.clear();
            window.location.href = 'index.html';
        } else {
            alert('Failed to delete your account.');
        }
    } catch (err) {
        console.error('Failed to delete user account:', err);
        alert('An error occurred. Please try again.');
    }
}

