document.addEventListener('DOMContentLoaded', function() {
  // Carousel functionality
  const carousel = document.querySelector('.carousel');
  const images = carousel.querySelectorAll('img');
  let index = 0;

  function autoSlide() {
    if (window.innerWidth >= 768) return;
    index = (index + 1) % images.length;
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }
  setInterval(autoSlide, 3000);

  // Ripple effect
  const downloadButton = document.querySelector('.download-button');
  
  downloadButton.addEventListener('click', function(e) {
    // Remove existing ripples
    const ripples = this.querySelectorAll('.ripple');
    ripples.forEach(ripple => ripple.remove());

    // Create ripple
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    
    // Position ripple
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size/2}px`;
    ripple.style.top = `${e.clientY - rect.top - size/2}px`;
    
    this.appendChild(ripple);

    // Trigger animation
    setTimeout(() => {
      ripple.style.transform = 'scale(4)';
      ripple.style.opacity = '0';
    }, 10);

    // Clean up
    ripple.addEventListener('transitionend', () => ripple.remove());
  });
});