import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import myImg from '../assets/my_img.jpg.jpeg';

const Home = () => {
    // Typing Effect Logic
    useEffect(() => {
        const textElement = document.getElementById('typed-text');
        if (!textElement) return;

        const phrases = ["Full Stack Developer", "Web Developer", "Problem Solver"];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;
        let timeoutId;

        const type = () => {
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

            timeoutId = setTimeout(type, typeSpeed);
        };

        type();

        return () => clearTimeout(timeoutId);
    }, []);

    // 3D Tilt Effect Logic
    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const handleMouseMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Calculate rotation (max 15 deg)
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        };

        const handleMouseLeave = () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <main className="hero-section">
            <div className="hero-content">
                <div className="hero-badge">
                    <span className="pulse-dot"></span> Available for work
                </div>

                <h1 className="hero-title">
                    Hi, I'm <span className="text-highlight">Praveen</span>
                    <br />
                    <span className="typing-text-wrapper">
                        <span id="typed-text"></span><span className="cursor">|</span>
                    </span>
                </h1>

                <p className="hero-subtitle">
                    Crafting robust and scalable web applications with modern technologies.
                    Focused on creating exceptional digital experiences.
                </p>

                <div className="hero-actions">
                    <Link to="/projects" className="btn btn-primary">
                        View Projects <i className="fas fa-arrow-right"></i>
                    </Link>
                    <Link to="/contact" className="btn btn-outline">
                        Contact Me
                    </Link>
                </div>

                <div className="social-links">
                    <a href="https://github.com/praveenveeramani3007" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/praveenveeramani902770329/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.instagram.com/praveen_official397/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="mailto:praveenveeramani3007@gmail.com" aria-label="Email">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
            </div>

            <div className="hero-visual">
                <div className="profile-card-3d" ref={cardRef}>
                    <div className="profile-image-container">
                        <img
                            src={myImg}
                            alt="Praveen V"
                            className="profile-img"
                            onError={(e) => {
                                e.target.style.display = 'none';
                            }}
                        />
                    </div>
                    <div className="profile-glow"></div>
                </div>
            </div>
        </main>
    );
};

export default Home;
