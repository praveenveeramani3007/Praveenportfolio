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
                    {/* JavaScript */}
                    <div className="glass-card skill-card">
                        <i className="fa-brands fa-js skill-icon"></i>
                        <span className="skill-name">JavaScript</span>
                    </div>

                    {/* React */}
                    <div className="glass-card skill-card">
                        <i className="fa-brands fa-react skill-icon"></i>
                        <span className="skill-name">React</span>
                    </div>

                    {/* MySQL */}
                    <div className="glass-card skill-card">
                        <i className="fa-solid fa-database skill-icon"></i>
                        <span className="skill-name">MySQL</span>
                    </div>

                    {/* HTML5 */}
                    <div className="glass-card skill-card">
                        <i className="fa-brands fa-html5 skill-icon"></i>
                        <span className="skill-name">HTML5</span>
                    </div>

                    {/* CSS3 */}
                    <div className="glass-card skill-card">
                        <i className="fa-brands fa-css3-alt skill-icon"></i>
                        <span className="skill-name">CSS3</span>
                    </div>

                    {/* Python */}
                    <div className="glass-card skill-card">
                        <i className="fa-brands fa-python skill-icon"></i>
                        <span className="skill-name">Python</span>
                    </div>

                    {/* Angular */}
                    <div className="glass-card skill-card">
                        <i className="fa-brands fa-angular skill-icon"></i>
                        <span className="skill-name">Angular</span>
                    </div>

                    {/* Java */}
                    <div className="glass-card skill-card">
                        <i className="fa-brands fa-java skill-icon"></i>
                        <span className="skill-name">Java</span>
                    </div>

                    {/* Git */}
                    <div className="glass-card skill-card">
                        <i className="fa-brands fa-git-alt skill-icon"></i>
                        <span className="skill-name">Git</span>
                    </div>

                    {/* GitHub */}
                    <div className="glass-card skill-card">
                        <i className="fa-brands fa-github skill-icon"></i>
                        <span className="skill-name">GitHub</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
