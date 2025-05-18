// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');

function toggleMenu() {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
}

hamburger.addEventListener('click', toggleMenu);

navItems.forEach(item => {
    item.addEventListener('click', toggleMenu);
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Contact Form WhatsApp Integration
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;
        
        // Create WhatsApp message
        const whatsappMessage = `New Contact Request:%0A%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AService: ${service}%0AMessage: ${message}`;
        
        // Redirect to WhatsApp
        window.open(`https://wa.me/916387902822?text=${whatsappMessage}`, '_blank');
        
        // Reset form
        this.reset();
    });
}

// Auto-scroll to message field on mobile when focused
const messageField = document.getElementById('message');
if (messageField && window.innerWidth <= 768) {
    messageField.addEventListener('focus', function() {
        window.scrollTo({
            top: this.offsetTop - 100,
            behavior: 'smooth'
        });
    });
}

// Sticky Navigation on Scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.sticky-nav');
    if (window.scrollY > 100) {
        nav.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        nav.style.boxShadow = 'none';
        nav.style.background = 'var(--white)';
    }
});

// Animation on Scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .testimonial-card, .feature');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize elements with fade-in effect
document.querySelectorAll('.service-card, .testimonial-card, .feature').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
});

window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);