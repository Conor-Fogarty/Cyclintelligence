function showView(view) {
    document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
    document.getElementById(view).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', async () => {
    showView('weekly');

    try {
        const response = await fetch(`/goals/${sessionStorage.getItem('username')}`);
        const goals = await response.json();

        // Mock data for the weekly analysis (replace with actual data)
        const weeklyData = {
            mileage: 45.1,
            time: { hours: 2, minutes: 58 }
        };

        const monthlyData = {
            mileage: 180.2,
            time: { hours: 12, minutes: 45 }
        };

        document.getElementById('weekly-mileage').textContent = `${weeklyData.mileage} mi`;
        document.getElementById('weekly-time').textContent = `${weeklyData.time.hours}h ${weeklyData.time.minutes}m`;

        document.getElementById('average-weekly-mileage').textContent = `${goals.weeklyMileage || '--'} mi`;
        document.getElementById('average-weekly-exercise-time').textContent = `${goals.weeklyExercise || '--'}`;

        const currentWeight = parseFloat(document.getElementById('weight').textContent) || 0;
        const goalWeight = parseFloat(goals.weight) || 0;
        const weightLossRemaining = goalWeight - currentWeight;
        document.getElementById('weight-loss-remaining').textContent = `${weightLossRemaining.toFixed(1)} lbs`;

        document.getElementById('monthly-mileage').textContent = `${monthlyData.mileage} mi`;
        document.getElementById('monthly-time').textContent = `${monthlyData.time.hours}h ${monthlyData.time.minutes}m`;

        document.getElementById('average-monthly-mileage').textContent = `${goals.monthlyMileage || '--'} mi`;
        document.getElementById('average-monthly-exercise-time').textContent = `${goals.monthlyExercise || '--'}`;

        document.getElementById('long-term-weight-loss-remaining').textContent = `${weightLossRemaining.toFixed(1)} lbs`;
    } catch (err) {
        console.error('Failed to load goals:', err);
    }
});


