document.addEventListener('DOMContentLoaded', () => {
    // Load saved goals from local storage
    const goals = JSON.parse(localStorage.getItem('userGoals')) || {};

    // Populate the form with saved goals
    document.getElementById('weekly-mileage').value = goals.weeklyMileage || '';
    document.getElementById('monthly-mileage').value = goals.monthlyMileage || '';
    document.getElementById('daily-calories').value = goals.dailyCalories || '';
    document.getElementById('weight').value = goals.weight || '';
    document.getElementById('weekly-exercise').value = goals.weeklyExercise || '';
    document.getElementById('monthly-exercise').value = goals.monthlyExercise || '';
});

document.getElementById('goals-form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Collect form data
    const goals = {
        weeklyMileage: document.getElementById('weekly-mileage').value,
        monthlyMileage: document.getElementById('monthly-mileage').value,
        dailyCalories: document.getElementById('daily-calories').value,
        weight: document.getElementById('weight').value,
        weeklyExercise: document.getElementById('weekly-exercise').value,
        monthlyExercise: document.getElementById('monthly-exercise').value
    };

    // Save goals to local storage
    localStorage.setItem('userGoals', JSON.stringify(goals));

    alert('Goals saved successfully!');
});
