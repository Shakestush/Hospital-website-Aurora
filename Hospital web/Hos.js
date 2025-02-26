//home content
document.addEventListener("DOMContentLoaded", function () {
    const welcomeText = "Welcome to Aurora Health care";
    let i = 0;
    const typingEffect = setInterval(() => {
        document.getElementById("welcome-text").textContent += welcomeText[i];
        i++;
        if (i === welcomeText.length) {
            clearInterval(typingEffect);
        }
    }, 100); // Speed of typing effect
});

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    for (const link of navLinks) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetPosition = document.getElementById(targetId).offsetTop;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    // Form validation and submission handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        }
    });

    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        return true;
    }

    // Dynamic content loading example (e.g., loading department details on click)
    const departments = document.querySelectorAll('.department');
    departments.forEach(department => {
        department.addEventListener('click', function() {
            const details = this.querySelector('p').textContent;
            alert(`Details: ${details}`);
        });
    });
});
