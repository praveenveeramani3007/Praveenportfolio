import React from 'react';

const Education = () => {
    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="page-title">Education</h1>
                <p className="page-subtitle">My academic journey.</p>
            </div>

            <div className="timeline">
                {/* MCA */}
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">Present</div>
                    <div className="glass-card">
                        <h3 className="timeline-title">Master of Computer Applications (MCA)</h3>
                        <h4 className="timeline-subtitle">Sathyabama University, Chennai</h4>
                        <p className="timeline-desc">
                            Pursuing advanced studies in computer science. Current CGPA: <strong>8.43</strong>
                        </p>
                    </div>
                </div>

                {/* BCA */}
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">May 2024</div>
                    <div className="glass-card">
                        <h3 className="timeline-title">Bachelor of Computer Applications (BCA)</h3>
                        <h4 className="timeline-subtitle">Karan Arts and Science Collage, Thiruvalluvar University</h4>
                        <p className="timeline-desc">
                            Completed undergraduate studies with a strong foundation in programming. CGPA: <strong>7.9</strong>
                        </p>
                    </div>
                </div>

                {/* XII */}
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">May 2021</div>
                    <div className="glass-card">
                        <h3 className="timeline-title">Higher Secondary (XII Grade)</h3>
                        <h4 className="timeline-subtitle">Government Higher Secondary School, Thachambattu</h4>
                        <p className="timeline-desc">
                            Specialized in Computer Science stream. Score: <strong>85%</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
