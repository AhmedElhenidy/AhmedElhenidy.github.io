// ===== Navigation Menu Toggle =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ===== Typing Animation =====
const typingText = document.querySelector('.typing-text');

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
    const currentPhrase = phrases[currentLanguage][phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentPhrase.length) {
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases[currentLanguage].length;
        typingSpeed = 500;
    }
    
    setTimeout(typeText, typingSpeed);
}

// Start typing animation when page loads
setTimeout(typeText, 1000);

// ===== Smooth Scroll with Offset for Fixed Navbar =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Intersection Observer for Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
const observeElements = document.querySelectorAll(
    '.skill-category, .project-card, .timeline-item, .about-content, .contact-content'
);

observeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// ===== Active Navigation Link Based on Scroll =====
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ===== Contact Form Handling =====
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you for your inquiry! Our team will get back to you within 24 hours with a detailed proposal.');
    
    // Reset form
    contactForm.reset();
});

// ===== Fancy Fade & Scale Effect for Sections on Scroll =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Calculate when section is in viewport
        if (scrolled + windowHeight > sectionTop + 100) {
            const distance = scrolled + windowHeight - sectionTop;
            const percentage = Math.min(distance / (sectionHeight / 2), 1);
            
            // Apply smooth fade and slight scale effect
            section.style.opacity = percentage;
            section.style.transform = `scale(${0.95 + (percentage * 0.05)})`;
            section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        }
    });
    
    // Add floating animation to hero decorative element
    const heroDecorative = document.querySelector('.hero::before');
    if (heroDecorative) {
        const floatAmount = Math.sin(scrolled * 0.002) * 20;
        document.documentElement.style.setProperty('--float-y', `${floatAmount}px`);
    }
});

// ===== Skills Hover Effect =====
const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== Project Cards Tilt Effect =====
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ===== Loading Animation =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// ===== Add Floating Animation to Elements =====
function addFloatingAnimation() {
    const floatingElements = document.querySelectorAll('.category-icon, .contact-icon');
    
    floatingElements.forEach((element, index) => {
        element.style.animation = `float 3s ease-in-out ${index * 0.2}s infinite`;
    });
}

// Call on page load
addFloatingAnimation();

// ===== Cursor Trail Effect (Optional - for extra creativity) =====
let mouseX = 0;
let mouseY = 0;
let cursorDots = [];

// Uncomment below code if you want a cursor trail effect
/*
for (let i = 0; i < 10; i++) {
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    dot.style.cssText = `
        position: fixed;
        width: 5px;
        height: 5px;
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: ${1 - i * 0.1};
    `;
    document.body.appendChild(dot);
    cursorDots.push({ element: dot, x: 0, y: 0 });
}

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    let x = mouseX;
    let y = mouseY;
    
    cursorDots.forEach((dot, index) => {
        dot.x += (x - dot.x) * 0.2;
        dot.y += (y - dot.y) * 0.2;
        
        dot.element.style.left = dot.x + 'px';
        dot.element.style.top = dot.y + 'px';
        
        x = dot.x;
        y = dot.y;
    });
    
    requestAnimationFrame(animateCursor);
}

animateCursor();
*/

// ===== Language Switching =====
let currentLanguage = 'ar';

const langBtn = document.getElementById('lang-btn');
const htmlElement = document.documentElement;

// Typing animation phrases in both languages
const phrases = {
    en: [
        'Flutter Development Services',
        'Web Application Solutions',
        'UI/UX Design Services',
        'AI-Powered Applications',
        'Product Design Solutions'
    ],
    ar: [
        'خدمات تطوير Flutter',
        'حلول تطبيقات الويب',
        'خدمات تصميم واجهات المستخدم',
        'تطبيقات مدعومة بالذكاء الاصطناعي',
        'حلول تصميم المنتجات'
    ]
};

function switchLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    
    // Update HTML direction and language
    htmlElement.setAttribute('dir', currentLanguage === 'ar' ? 'rtl' : 'ltr');
    htmlElement.setAttribute('lang', currentLanguage);
    
    // Update content
    updateLanguageContent();
    
    // Store language preference
    localStorage.setItem('preferredLanguage', currentLanguage);
}

function updateTypingAnimation() {
    // Reset typing animation with new phrases
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        typingText.textContent = '';
        phraseIndex = 0;
        charIndex = 0;
        isDeleting = false;
        typingSpeed = 100;
        setTimeout(typeText, 1000);
    }
}

// Initialize language from localStorage or default to Arabic
function initializeLanguage() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
        currentLanguage = savedLanguage;
        if (currentLanguage === 'ar') {
            // Apply Arabic language settings
            htmlElement.setAttribute('dir', 'rtl');
            htmlElement.setAttribute('lang', 'ar');
            updateLanguageContent();
        }
    } else {
        // Default to Arabic
        currentLanguage = 'ar';
        htmlElement.setAttribute('dir', 'rtl');
        htmlElement.setAttribute('lang', 'ar');
        updateLanguageContent();
    }
}

function updateLanguageContent() {
    // Update language button text
    langBtn.textContent = currentLanguage === 'en' ? 'العربية' : 'English';
    
    // Update all elements with data attributes
    const elementsWithData = document.querySelectorAll('[data-en], [data-ar]');
    elementsWithData.forEach(element => {
        const text = element.getAttribute(`data-${currentLanguage}`);
        if (text) {
            element.textContent = text;
        }
    });
    
    // Update placeholder attributes
    const inputsWithPlaceholder = document.querySelectorAll('[data-en-placeholder], [data-ar-placeholder]');
    inputsWithPlaceholder.forEach(input => {
        const placeholder = input.getAttribute(`data-${currentLanguage}-placeholder`);
        if (placeholder) {
            input.setAttribute('placeholder', placeholder);
        }
    });
    
    // Update typing animation phrases
    updateTypingAnimation();
}

// Event listener for language button
langBtn.addEventListener('click', switchLanguage);

// Initialize language on page load
document.addEventListener('DOMContentLoaded', initializeLanguage);

// ===== Print Console Message =====
console.log('%c🚀 Welcome to Elhenidy Tech Solutions!', 'font-size: 20px; color: #6366f1; font-weight: bold;');
console.log('%cReady to build your next mobile app? Let\'s discuss your project!', 'font-size: 14px; color: #8b5cf6;');

