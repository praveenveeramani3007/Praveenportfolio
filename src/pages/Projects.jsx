import React, { useEffect, useState } from 'react';

import portfolioImg from '../assets/portfolio_section.png';

const Projects = () => {
    const [repos, setRepos] = useState([]);

    // Optional: Fetch repos from GitHub API or use a static list if preferred.
    // For now, I'll use the static content logic from the original HTML but adapted for React list.
    // Ideally, we could fetch from "repos.json" if that file contained valid data.

    const projects = [
        {
            title: "Multimodel Deepfake Detection",
            description: "Advanced deepfake detection using multi-modal analysis (Audio/Video) to ensure authentic media verification.",
            tags: ["Python", "Deep Learning", "ML"],
            // Dark theme, Cyberpunk text
            image: "https://placehold.co/600x400/1a1a1a/00ffff?text=Deepfake+Detection&font=roboto",
            link: "https://github.com/praveenveeramani3007/multimodeldeepfakedetection",
            liveLink: "https://praveenveeramani3007.github.io/MultimodelDeepfakeDetection2/"
        },
        {
            title: "Privacy Protection Cloud",
            description: "Secure cloud storage solution with advanced encryption, privacy protection, and content regulation.",
            tags: ["PHP", "MySQL", "Encryption"],
            // Use existing asset
            image: portfolioImg,
            link: "https://github.com/praveenveeramani3007/prrojectp1"
        },
        {
            title: "Stock Predictor Pro",
            description: "Machine Learning powered application for predicting stock market trends with high precision analytics. Includes Flask backend and React frontend.",
            tags: ["Python", "Flask", "React", "Scikit-learn"],
            // Green (Finance) theme
            image: "https://placehold.co/600x400/0f2e16/4caf50?text=Stock+Predictor&font=roboto",
            link: "https://github.com/praveenveeramani3007/StockMarketPredictorPro"
        },
        {
            title: "Personal Portfolio",
            description: "A modern, responsive portfolio website featuring 3D animations and a sleek dark theme.",
            tags: ["React", "Vite", "CSS3"],
            // Purple/Pink (Creative) theme
            image: "https://placehold.co/600x400/1e1e2e/bd93f9?text=Personal+Portfolio&font=roboto",
            link: "https://github.com/praveenveeramani3007/Praveenportfolio",
            liveLink: "https://praveenveeramani3007.github.io/Praveenportfolio/index.html#/"
        }
    ];

    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="page-title">My Projects</h1>
                <p className="page-subtitle">A selection of my recent work and coding experiments.</p>
            </div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="glass-card project-card" key={index}>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="project-img"
                            onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/600x400/1a1a1a/cccccc?text=Project+Image';
                            }}
                        />
                        <div className="project-content">
                            <div className="project-title">
                                {project.title}
                                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                    <i className="fas fa-external-link-alt"></i>
                                </a>
                            </div>
                            <p className="project-desc">{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map((tag, i) => (
                                    <span className="tag" key={i}>{tag}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                    View Code <i className="fas fa-arrow-right"></i>
                                </a>
                                {project.liveLink && (
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link" style={{ background: 'linear-gradient(135deg, #00c6ff, #0072ff)' }}>
                                        Live Demo <i className="fas fa-external-link-alt"></i>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
