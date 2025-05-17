document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle functionality
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
    themeToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event from closing mobile menu
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            icon.textContent = 'light_mode';
            localStorage.setItem('theme', 'dark');
        } else {
            icon.textContent = 'dark_mode';
            localStorage.setItem('theme', 'light');
        }
    });

    // Mobile menu functionality
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    
    // Toggle mobile menu
    hamburgerMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenu.classList.toggle('active');
        // Toggle menu icon between menu and close
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

    // Close mobile menu on ESC key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
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
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is in view
    });

    gradientSections.forEach(section => {
        observer.observe(section);
    });

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Account for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
});
