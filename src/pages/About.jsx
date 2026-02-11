import React from 'react';

const About = () => {
    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="page-title">About Me</h1>
                <p className="page-subtitle">Get to know more about my background and passion.</p>
            </div>

            <div className="glass-card">
                <div className="about-grid">
                    <div className="about-text">
                        <p>
                            Hello! I'm <span className="highlight">Praveen V</span>, a passionate <span className="highlight">Full Stack Developer</span> based in India.
                            I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
                        </p>
                        <p>
                            My goal is to always build products that provide pixel-perfect, performant experiences.
                            I started my coding journey with a curiosity about how websites work, which led me to dive deep into frontend and backend technologies.
                        </p>
                        <p>
                            My expertise spans both the frontend and backend — crafting responsive interfaces with HTML, CSS, and React,
                            and building robust APIs with Node.js and Python. I’m a fast learner who thrives in fast-paced environments
                            and loves solving complex problems with efficient code.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                            or gaming.
                        </p>
                    </div>
                    {/* Optional: Second image or visual element for About page */}
                    <div className="about-img-container">
                        <img
                            src="im3.jpg"
                            alt="Coding Setup"
                            style={{ width: '100%', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.1)' }}
                            onError={(e) => {
                                e.target.style.display = 'none'; // Hide if missing
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
