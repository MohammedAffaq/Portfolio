// ===============================
// Theme Toggle
// ===============================
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');

    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
    }
}

// Load saved theme
document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.getElementById('theme-icon');

    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fas fa-sun';
    }
});

// ===============================
// Mobile Menu Toggle
// ===============================
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// ===============================
// Smooth Scrolling
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});

// ===============================
// Scroll animations
// ===============================
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function checkAnimation() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        if (isInViewport(element) || element.getBoundingClientRect().top < window.innerHeight * 0.8) {
            element.classList.add('visible');
        }
    });
}

// ===============================
// Back to top button
// ===============================
function toggleBackToTop() {
    const backToTop = document.querySelector('.back-to-top');
    if (window.pageYOffset > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ===============================
// Navbar background on scroll
// ===============================
function toggleNavbarBackground() {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 50) {
        navbar.style.background = document.body.getAttribute('data-theme') === 'dark'
            ? 'rgba(15, 23, 42, 0.98)'
            : 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = document.body.getAttribute('data-theme') === 'dark'
            ? 'rgba(15, 23, 42, 0.95)'
            : 'rgba(255, 255, 255, 0.95)';
    }
}

// ===============================
// Scroll event listeners
// ===============================
window.addEventListener('scroll', function () {
    checkAnimation();
    toggleBackToTop();
    toggleNavbarBackground();
});

// Initial check
document.addEventListener('DOMContentLoaded', function () {
    checkAnimation();
    toggleBackToTop();
});

// ===============================
// Contact Form (EmailJS)
// ===============================
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_65mhxdq", "template_j7l9epf", this)
        .then(function() {
            alert("✅ Message sent successfully!");
            event.target.reset();
        }, function(error) {
            alert("❌ Failed to send message. Please try again.");
            console.error("EmailJS Error:", error);
        });
});

// ===============================
// Download Resume
// ===============================
function downloadResume() {
    const url = "assets/Affaq_resume.pdf"; // path to your PDF
    const a = document.createElement("a");
    a.href = url;
    a.download = "Mohammed_Affaq_Resume.pdf"; // file name when downloaded
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// ===============================
// Interactive effects
// ===============================
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.05) translateY(-2px)';
    });

    item.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1) translateY(0)';
    });
});

// ===============================
// Typing animation for hero section
// ===============================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing animation
document.addEventListener('DOMContentLoaded', function () {
    const heroTitle = document.querySelector('.hero-text h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 80);
        }, 1000);
    }
});
