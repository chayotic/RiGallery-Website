document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle functionality
    const themeToggles = document.querySelectorAll('.theme-toggle'); // Select all theme toggles
    const body = document.body;
    
    // Check saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        updateThemeIcons('light_mode');
    } else {
        updateThemeIcons('dark_mode');
    }
    
    // Update all theme icons
    function updateThemeIcons(iconName) {
        themeToggles.forEach(toggle => {
            const icon = toggle.querySelector('.material-icons');
            if (icon) icon.textContent = iconName;
        });
    }
    
    // Add event listeners to all theme toggles
    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event from closing mobile menu
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                updateThemeIcons('light_mode');
                localStorage.setItem('theme', 'dark');
            } else {
                updateThemeIcons('dark_mode');
                localStorage.setItem('theme', 'light');
            }
        });
    });

    // Mobile menu functionality
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    
    // Toggle mobile menu
    hamburgerMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenu.classList.toggle('active');
        const menuIcon = hamburgerMenu.querySelector('.material-icons');
        menuIcon.textContent = mobileMenu.classList.contains('active') ? 'close' : 'menu';
    });

    // Close mobile menu when clicking on a link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            hamburgerMenu.querySelector('.material-icons').textContent = 'menu';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.mobile-menu') && !e.target.closest('.mobile-controls')) {
            mobileMenu.classList.remove('active');
            hamburgerMenu.querySelector('.material-icons').textContent = 'menu';
        }
    });

    // Intersection observer for gradient sections
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
});
