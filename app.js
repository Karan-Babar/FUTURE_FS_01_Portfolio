// Handle form submission
const submitBtn = document.querySelector('.submit-btn');
const formInputs = document.querySelectorAll('.form-input, .form-textarea');
const form = document.getElementById('contactForm');

submitBtn.addEventListener('click', (e) => {

    // Simple validation
    let isValid = true;
    formInputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.boxShadow = '0 0 0 2px #ff4444';
            setTimeout(() => {
                input.style.boxShadow = '';
            }, 2000);
        }
    });

    if (!isValid) {
        e.preventDefault(); // stop the form ONLY if invalid
        alert('Please fill the Details.');
    } 
    // IF valid → allow form to submit normally → data goes to backend → MongoDB saves it
});


// Select all elements that you want to animate on scroll
const animatedElements = document.querySelectorAll('.slideLeft, .slideRight, .slideTop, .slideBottom');

// Intersection Observer setup
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); // trigger animation when visible
    } else {
      entry.target.classList.remove('show'); // remove animation when out of view
    }
  });
}, { threshold: 0.4 }); // 0.4 = triggers when 40% visible

// Observe all animated elements
animatedElements.forEach(el => observer.observe(el));
