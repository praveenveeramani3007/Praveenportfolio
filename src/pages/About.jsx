import React from 'react';
import aboutImg from '../assets/my_img.jpg.jpeg';

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
                            Hi, I'm <strong>Praveen V</strong>, a passionate Web developer with a solid academic foundation and a drive
                            to create impactful web applications.
                        </p>
                        <p>
                            I completed my undergraduate degree at <strong>Thiruvalluvar University</strong>, where I discovered my
                            enthusiasm for Web development and hands-on software projects.
                        </p>
                        <p>
                            My expertise spans both the frontend and backend — crafting responsive interfaces with HTML, CSS, and React,
                            and building efficient backends with Node.js, MongoDB, and MySQL.
                        </p>
                        <p>
                            I’m actively seeking opportunities in <strong>web development</strong> and <strong>software
                                engineering</strong> where I can apply my skills, learn, and contribute to meaningful products.
                        </p>
                        <p>
                            Currently, I’m pursuing my postgraduate studies at <strong>Sathyabama University</strong>, continuing to
                            enhance my technical and problem-solving abilities.
                        </p>

                        <div className="about-stats">
                            <div className="stat-item">
                                <h3>4+</h3>
                                <p>Projects</p>
                            </div>
                            <div className="stat-item">
                                <h3>100%</h3>
                                <p>Dedication</p>
                            </div>
                        </div>
                    </div>

                    <div className="about-image-wrapper" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="profile-card-3d" style={{ width: '300px', height: '380px' }}>
                            <div className="profile-image-container">
                                <img
                                    src={aboutImg}
                                    alt="Praveen V"
                                    className="profile-img"
                                    onError={(e) => {
                                        // Fallback if image fails
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>
                            <div className="profile-glow"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
