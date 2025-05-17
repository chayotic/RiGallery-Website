document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('.material-icons');
    
    // Check saved theme
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
    
    // Mobile menu toggle
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    hamburgerMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.mobile-controls') && !e.target.closest('.mobile-menu')) {
            mobileMenu.classList.remove('active');
        }
    });
});

// Add intersection observer for gradient sections
const gradientSections = document.querySelectorAll('.gradient-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

gradientSections.forEach(section => {
  observer.observe(section);
});
