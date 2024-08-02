function showView(view) {
    // Hide all views
    document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
    
    // Show the selected view
    document.getElementById(view).style.display = 'block';
}

// Set the default view
document.addEventListener('DOMContentLoaded', () => showView('weekly'));
