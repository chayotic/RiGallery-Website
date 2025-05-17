document.addEventListener('DOMContentLoaded', () => {
    // Get all theme toggle buttons
    const themeToggles = document.querySelectorAll('.theme-toggle');
    const body = document.body;
    
    // Function to update all theme icons
    const updateThemeIcons = (isDarkMode) => {
        const iconName = isDarkMode ? 'light_mode' : 'dark_mode';
        themeToggles.forEach(toggle => {
            const icon = toggle.querySelector('.material-icons');
            if (icon) icon.textContent = iconName;
        });
    };

    // Check saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        updateThemeIcons(true);
    } else {
        updateThemeIcons(false);
    }
    
    // Add event listeners to all theme toggles
    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isDarkMode = !body.classList.contains('dark-mode');
            body.classList.toggle('dark-mode');
            
            updateThemeIcons(isDarkMode);
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        });
    });

    // Mobile menu functionality
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (hamburgerMenu && mobileMenu) {
        hamburgerMenu.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('active');
            const menuIcon = hamburgerMenu.querySelector('.material-icons');
            menuIcon.textContent = mobileMenu.classList.contains('active') ? 'close' : 'menu';
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.mobile-menu') && !e.target.closest('.mobile-controls')) {
                mobileMenu.classList.remove('active');
                const menuIcon = hamburgerMenu.querySelector('.material-icons');
                if (menuIcon) menuIcon.textContent = 'menu';
            }
        });
    }

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
