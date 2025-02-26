// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate elements on scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.skill-card, .project-card, .social-item');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if(position.top < window.innerHeight && position.bottom >= 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });

    // Navbar background change on scroll
    if (window.scrollY > 100) {
        document.querySelector('.navbar').style.backgroundColor = 'rgba(17, 24, 39, 0.95)';
        document.querySelector('.navbar').style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        document.querySelector('.navbar').style.backgroundColor = 'rgba(17, 24, 39, 0.8)';
        document.querySelector('.navbar').style.boxShadow = 'none';
    }
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    // Tambahkan tombol menu mobile ke navbar
    const navContainer = document.querySelector('.nav-container');
    const menuBtn = document.createElement('button');
    menuBtn.className = 'mobile-menu-btn';
    menuBtn.innerHTML = '☰';
    menuBtn.setAttribute('aria-label', 'Toggle menu');
    navContainer.appendChild(menuBtn);
    
    const navLinks = document.querySelector('.nav-links');
    
    // Toggle menu saat tombol diklik
    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Tutup menu saat link di klik
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
    
    // Tutup menu saat klik di luar menu
    document.addEventListener('click', function(e) {
        if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });
});

// Peningkatan untuk animasi halus pada semua elemen
function checkVisibility() {
    const elements = document.querySelectorAll('.skill-card, .project-card, .social-item, .about-image, .section-title');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // Jika elemen masuk ke viewport
        if(position.top < window.innerHeight - 100 && position.bottom >= 0) {
            element.classList.add('visible');
        }
    });
}

// Add some random floating particles
function createParticles(num) {
    const particles = document.querySelector('.particles');
    
    for (let i = 0; i < num; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size between 5px and 20px
        const size = Math.floor(Math.random() * 15) + 5;
        
        // Random position
        const posX = Math.floor(Math.random() * 100);
        const posY = Math.floor(Math.random() * 100);
        
        // Random color (either primary or secondary)
        const color = Math.random() > 0.5 ? '#4f46e5' : '#10b981';
        
        // Random animation duration between
        const duration = Math.floor(Math.random() * 20) + 10;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.top = `${posY}%`;
        particle.style.left = `${posX}%`;
        particle.style.background = color;
        particle.style.borderRadius = '50%';
        particle.style.animationDuration = `${duration}s`;
        
        particles.appendChild(particle);
    }
}

// Periksa visibilitas elemen saat halaman dimuat
window.addEventListener('load', checkVisibility);

// Periksa visibilitas elemen saat scroll
window.addEventListener('scroll', checkVisibility);

// Create 15 more particles
createParticles(15);