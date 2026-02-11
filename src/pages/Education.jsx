import React from 'react';

const Education = () => {
    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="page-title">Education</h1>
                <p className="page-subtitle">My academic journey.</p>
            </div>

            <div className="timeline">
                {/* Item 1 */}
                <div className="timeline-item">
                    <div className="timeline-content">
                        <span className="year-badge">2021 - 2025</span>
                        <h3 className="timeline-title">Bachelor of Engineering (CSE)</h3>
                        <p className="timeline-subtitle">Anna University (Dhanalakshmi Srinivasan Engineering College)</p>
                        <p className="text-muted">
                            Focused on core computer science subjects including Data Structures, Algorithms, Database Management, and Web Technology.
                        </p>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="timeline-item">
                    <div className="timeline-content">
                        <span className="year-badge">2020 - 2021</span>
                        <h3 className="timeline-title">Higher Secondary (HSC)</h3>
                        <p className="timeline-subtitle">State Board</p>
                        <p className="text-muted">
                            Completed with valid academic credentials in Physics, Chemistry, and Mathematics group.
                        </p>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="timeline-item">
                    <div className="timeline-content">
                        <span className="year-badge">2018 - 2019</span>
                        <h3 className="timeline-title">Secondary School (SSLC)</h3>
                        <p className="timeline-subtitle">State Board</p>
                        <p className="text-muted">
                            Foundation education with a focus on science and mathematics.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
