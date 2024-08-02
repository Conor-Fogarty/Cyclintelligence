function showView(view) {
    // Hide all views
    document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
    
    // Show the selected view
    document.getElementById(view).style.display = 'block';
}

// Set the default view
document.addEventListener('DOMContentLoaded', () => showView('weekly'));

document.addEventListener('DOMContentLoaded', () => {
    // Load saved goals from local storage
    const goals = JSON.parse(localStorage.getItem('userGoals')) || {};
    
    // Mock data for the weekly analysis (replace with actual data)
    const weeklyData = {
        mileage: 45.1, // Example weekly mileage
        time: { hours: 2, minutes: 58 } // Example time
    };

    // Mock data for the long-term analysis (replace with actual data)
    const monthlyData = {
        mileage: 180.2, // Example monthly mileage
        time: { hours: 12, minutes: 45 } // Example time
    };

    // Update weekly data
    document.getElementById('weekly-mileage').textContent = `${weeklyData.mileage} mi`;
    document.getElementById('weekly-time').textContent = `${weeklyData.time.hours}h ${weeklyData.time.minutes}m`;

    // Update weekly goals information
    document.getElementById('average-weekly-mileage').textContent = `${goals.weeklyMileage || '--'} mi`;
    document.getElementById('average-weekly-exercise-time').textContent = `${goals.weeklyExercise || '--'}`;

    // Calculate weight loss remaining for weekly analysis
    const currentWeight = parseFloat(document.getElementById('weight').textContent) || 0;
    const goalWeight = parseFloat(goals.weight) || 0;
    const weightLossRemaining = goalWeight - currentWeight;
    document.getElementById('weight-loss-remaining').textContent = `${weightLossRemaining.toFixed(1)} lbs`;

    // Update long-term data
    document.getElementById('monthly-mileage').textContent = `${monthlyData.mileage} mi`;
    document.getElementById('monthly-time').textContent = `${monthlyData.time.hours}h ${monthlyData.time.minutes}m`;

    // Update long-term goals information
    document.getElementById('average-monthly-mileage').textContent = `${goals.monthlyMileage || '--'} mi`;
    document.getElementById('average-monthly-exercise-time').textContent = `${goals.monthlyExercise || '--'}`;

    // Calculate weight loss remaining for long-term analysis
    document.getElementById('long-term-weight-loss-remaining').textContent = `${weightLossRemaining.toFixed(1)} lbs`;
});

