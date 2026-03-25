import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [backendStatus, setBackendStatus] = useState('Checking API...');
    const location = useLocation();

    // Check Backend Connection
    useEffect(() => {
        fetch('http://localhost:5000/api/test')
            .then(res => {
                if (!res.ok) throw new Error('Network response was not ok');
                return res.json();
            })
            .then(data => setBackendStatus('Connected to Backend \u2713'))
            .catch(err => setBackendStatus('Backend Disconnected \u2717'));
    }, []);

    // Toggle Mobile Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 3D Canvas Background Logic
    useEffect(() => {
        const canvas = document.getElementById('bg-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        let animationFrameId;

        // Configuration
        const particleCount = 60;
        const connectionDistance = 150;
        const mouseParams = { x: null, y: null, radius: 200 };

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            // Re-init particles on resize to avoid stretching
            initParticles();
        };

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 1.5;
                this.vy = (Math.random() - 0.5) * 1.5;
                this.size = Math.random() * 2 + 1;
                this.color = '#14B8A6';
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

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(20, 184, 166, ${1 - distance / connectionDistance})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            mouseParams.x = e.x;
            mouseParams.y = e.y;
        };

        const handleMouseOut = () => {
            mouseParams.x = undefined;
            mouseParams.y = undefined;
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);

        // Start
        resize();
        initParticles();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // Helper to determine active link
    const isActive = (path) => {
        if (path === '/' && location.pathname === '/') return 'active';
        if (path !== '/' && location.pathname.startsWith(path)) return 'active';
        return '';
    };

    return (
        <>
            {/* 3D Canvas Background */}
            <canvas id="bg-canvas"></canvas>

            {/* Overlay Gradient */}
            <div className="main-overlay"></div>

            {/* Navigation */}
            <nav className={`navbar modern-nav ${isScrolled ? 'scrolled' : ''}`}>
                <div className="nav-container">
                    <Link to="/" className="nav-logo">
                        <i className="fas fa-code brand-icon"></i>
                        <span>PRAVEEN</span>
                    </Link>

                    <ul
                        className="nav-menu"
                        id="nav-menu"
                        style={{
                            display: window.innerWidth <= 900 ? (isMenuOpen ? 'flex' : 'none') : 'flex',
                            flexDirection: window.innerWidth <= 900 ? 'column' : 'row',
                            position: window.innerWidth <= 900 ? 'absolute' : 'static',
                            top: window.innerWidth <= 900 ? '80px' : 'auto',
                            left: window.innerWidth <= 900 ? '0' : 'auto',
                            width: window.innerWidth <= 900 ? '100%' : 'auto',
                            background: window.innerWidth <= 900 ? '#0A0E1A' : 'transparent',
                            padding: window.innerWidth <= 900 ? '20px' : '0'
                        }}
                    >
                        <li className="nav-item">
                            <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className={`nav-link ${isActive('/about')}`}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/skills" className={`nav-link ${isActive('/skills')}`}>Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className={`nav-link ${isActive('/projects')}`}>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/education" className={`nav-link ${isActive('/education')}`}>Education</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/resume" className={`nav-link ${isActive('/resume')}`}>Resume</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link>
                        </li>
                        <li className="nav-item action-item">
                            <Link to="/contact" className="nav-btn">Hire Me</Link>
                        </li>
                    </ul>

                    <div className="hamburger" id="hamburger" onClick={toggleMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <Outlet />

            {/* Footer */}
            <footer className="footer-minimal">
                <div className="footer-socials">
                    <a href="https://github.com/praveenveeramani3007" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/praveenveeramani902770329/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.instagram.com/praveen_official397/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="mailto:praveenveeramani3007@gmail.com" className="footer-social-link">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
                <p style={{ fontSize: '0.85rem', color: backendStatus.includes('Connected') ? '#10B981' : '#EF4444', marginBottom: '8px' }}>
                    {backendStatus}
                </p>
                <p>© 2025 Praveen V. Built with <i className="fas fa-heart" style={{ color: '#14B8A6' }}></i> and Code.</p>
            </footer>
        </>
    );
};

export default Layout;
