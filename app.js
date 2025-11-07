var typed = new Typed(".text", {
    strings:["Full Stack Developer","Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

        // Show/hide scroll to top button
        const scrollTopBtn = document.querySelector('.scroll-top');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.style.display = 'flex';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        });

        // Initially hide the button
        scrollTopBtn.style.display = 'none';

        // Handle form submission
        const submitBtn = document.querySelector('.submit-btn');
        const formInputs = document.querySelectorAll('.form-input, .form-textarea');
        
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
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
            
            if (isValid) {
                alert('Message sent successfully!');
                formInputs.forEach(input => input.value = '');
            } else {
                alert('Please fill the Details.');
            }
        })

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
