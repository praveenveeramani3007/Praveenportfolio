import React from 'react';

const Skills = () => {
    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="page-title">My Skills</h1>
                <p className="page-subtitle">Technologies and tools I work with.</p>
            </div>

            <div className="glass-card">
                <div className="skills-grid">
                    {/* HTML5 */}
                    <div className="skill-card">
                        <i className="fab fa-html5 skill-icon" style={{ color: '#e34c26' }}></i>
                        <span className="skill-name">HTML5</span>
                    </div>

                    {/* CSS3 */}
                    <div className="skill-card">
                        <i className="fab fa-css3-alt skill-icon" style={{ color: '#264de4' }}></i>
                        <span className="skill-name">CSS3</span>
                    </div>

                    {/* JavaScript */}
                    <div className="skill-card">
                        <i className="fab fa-js skill-icon" style={{ color: '#f7df1e' }}></i>
                        <span className="skill-name">JavaScript</span>
                    </div>

                    {/* React */}
                    <div className="skill-card">
                        <i className="fa-brands fa-react skill-icon" style={{ color: '#61dafb' }}></i>
                        <span className="skill-name">React</span>
                    </div>

                    {/* Node.js */}
                    <div className="skill-card">
                        <i className="fab fa-node skill-icon" style={{ color: '#68a063' }}></i>
                        <span className="skill-name">Node.js</span>
                    </div>

                    {/* Python */}
                    <div className="skill-card">
                        <i className="fab fa-python skill-icon" style={{ color: '#3776ab' }}></i>
                        <span className="skill-name">Python</span>
                    </div>

                    {/* Java */}
                    <div className="skill-card">
                        <i className="fab fa-java skill-icon" style={{ color: '#007396' }}></i>
                        <span className="skill-name">Java</span>
                    </div>

                    {/* Git */}
                    <div className="skill-card">
                        <i className="fab fa-git-alt skill-icon" style={{ color: '#f05032' }}></i>
                        <span className="skill-name">Git</span>
                    </div>

                    {/* MySQL */}
                    <div className="skill-card">
                        <i className="fas fa-database skill-icon" style={{ color: '#00758f' }}></i>
                        <span className="skill-name">MySQL</span>
                    </div>

                    {/* Responsive Design */}
                    <div className="skill-card">
                        <i className="fas fa-mobile-alt skill-icon" style={{ color: '#ffffff' }}></i>
                        <span className="skill-name">Responsive</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
