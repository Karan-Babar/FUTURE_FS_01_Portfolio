const submitBtn = document.querySelector('.submit-btn');
const formInputs = document.querySelectorAll('.form-input, .form-textarea');
const form = document.getElementById('contactForm');

submitBtn.addEventListener('click', (e) => {

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
        e.preventDefault();
        alert('Please fill the Details.');
    } 
   
});


const animatedElements = document.querySelectorAll('.slideLeft, .slideRight, .slideTop, .slideBottom');


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show'); 
    }
  });
}, { threshold: 0.4 }); 

animatedElements.forEach(el => observer.observe(el));
