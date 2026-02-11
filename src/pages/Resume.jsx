import React from 'react';

const Resume = () => {
    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="page-title">My Resume</h1>
                <p className="page-subtitle">View my professional journey and qualifications.</p>
            </div>

            <div className="glass-card" style={{ padding: '20px' }}>
                <div className="resume-viewer-container">
                    <iframe
                        src="assets/resume.pdf"
                        width="100%"
                        height="100%"
                        title="Praveen V Resume"
                        style={{ border: 'none' }}
                    ></iframe>
                </div>

                <div className="resume-actions">
                    <a href="assets/resume.pdf" download className="btn btn-primary">
                        <i className="fas fa-download"></i> Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Resume;
