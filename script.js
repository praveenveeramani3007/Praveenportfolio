// Modern 3D Portfolio Script

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Typing Effect
    initTypingEffect();

    // 2. Initialize 3D Canvas
    initCanvas3D();

    // 3. Initialize Navbar Scroll
    initNavbarScroll();

    // 4. Initialize Profile Tilt
    initProfileTilt();

    // 5. Initialize Mobile Menu (Simplified)
    // Note: Re-using existing mobile nav logic would be good, but rewriting for cleaner code.
    initMobileMenu();
});

// ===========================================
// 1. Typing Effect
// ===========================================
function initTypingEffect() {
    const textElement = document.getElementById('typed-text');
    if (!textElement) return;

    const phrases = ["Full Stack Developer", "Web Developer", "Problem Solver"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            textElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            textElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();
}

// ===========================================
// 2. 3D Canvas Background (Particles Network)
// ===========================================
function initCanvas3D() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    // Configuration
    const particleCount = 60; // Adjust for density
    const connectionDistance = 150;
    const mouseParams = { x: null, y: null, radius: 200 };

    // Resize Handler
    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    // Particle Class
    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 1.5;
            this.vy = (Math.random() - 0.5) * 1.5;
            this.size = Math.random() * 2 + 1;
            this.color = '#e50914'; // Primary Red
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off edges
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;

            // Mouse Interaction
            if (mouseParams.x != null) {
                let dx = mouseParams.x - this.x;
                let dy = mouseParams.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouseParams.radius) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (mouseParams.radius - distance) / mouseParams.radius;
                    // Push away slightly
                    const directionX = forceDirectionX * force * this.size * 0.5;
                    const directionY = forceDirectionY * force * this.size * 0.5;

                    this.x -= directionX;
                    this.y -= directionY;
                }
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    // Initialize Particles
    function initParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    // Animation Loop
    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Draw Particles
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            // Connect Particles
            for (let j = i; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < connectionDistance) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(229, 9, 20, ${1 - distance / connectionDistance})`; // Red lines
                    ctx.lineWidth = 1;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    // Event Listeners
    window.addEventListener('resize', () => {
        resize();
        initParticles();
    });

    window.addEventListener('mousemove', (e) => {
        mouseParams.x = e.x;
        mouseParams.y = e.y;
    });

    window.addEventListener('mouseout', () => {
        mouseParams.x = undefined;
        mouseParams.y = undefined;
    });

    // Start
    resize();
    initParticles();
    animate();
}

// ===========================================
// 3. Navbar Scroll Effect
// ===========================================
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ===========================================
// 4. Profile Tilt Effect (3D)
// ===========================================
function initProfileTilt() {
    const card = document.querySelector('.profile-card-3d');
    if (!card) return;

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate rotation (max 15 deg)
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
}

// ===========================================
// 5. Mobile Menu
// ===========================================
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            // Toggle active classes
            // Note: styles need to support .active for mobile menu visibility if hidden by default
            // Adding simple toggle logic here, assuming styles.css handles the .active state display
            const isClosed = navMenu.style.display === 'flex' ? false : true;

            // Simple quick fix for standard mobile menu pattern
            if (window.innerWidth <= 900) {
                if (navMenu.style.display === 'flex') {
                    navMenu.style.display = 'none';
                } else {
                    navMenu.style.display = 'flex';
                    navMenu.style.flexDirection = 'column';
                    navMenu.style.position = 'absolute';
                    navMenu.style.top = '80px';
                    navMenu.style.left = '0';
                    navMenu.style.width = '100%';
                    navMenu.style.background = '#050505';
                    navMenu.style.padding = '20px';
                }
            }
        });
    }
}


// ========================================
// WHATSAPP INTEGRATION
// ========================================

function sendToWhatsapp() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (!name || !message) {
        alert("Please enter at least your Name and Message to send via WhatsApp.");
        return;
    }

    // PHONE NUMBER - UPDATE THIS
    const whatsappNumber = "+919876543210";

    // Construct the message
    let whatsappMsg = `*New Contact Inquiry*\n\n`;
    whatsappMsg += `*Name:* ${name}\n`;
    whatsappMsg += `*Email:* ${email}\n`;
    whatsappMsg += `*Phone:* ${phone}\n`;
    whatsappMsg += `*Message:* ${message}`;

    // Encode for URL
    const encodedMsg = encodeURIComponent(whatsappMsg);

    // Open WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMsg}`;
    window.open(whatsappUrl, '_blank');
}
