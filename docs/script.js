document.addEventListener('DOMContentLoaded', () => {
    // Initialize Material Components
    mdc.autoInit();
    
    // Theme Toggle Logic
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('.material-icons');
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        icon.textContent = 'light_mode';
    }
    
    // Toggle theme
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            icon.textContent = 'light_mode';
            localStorage.setItem('theme', 'dark');
        } else {
            icon.textContent = 'dark_mode';
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Initialize tooltips (optional)
    const buttons = document.querySelectorAll('.mdc-icon-button');
    buttons.forEach(button => {
        new mdc.tooltip.MDCTooltip(button);
    });
});