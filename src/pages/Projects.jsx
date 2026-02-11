import React, { useEffect, useState } from 'react';

const Projects = () => {
    const [repos, setRepos] = useState([]);

    // Optional: Fetch repos from GitHub API or use a static list if preferred.
    // For now, I'll use the static content logic from the original HTML but adapted for React list.
    // Ideally, we could fetch from "repos.json" if that file contained valid data.

    const projects = [
        {
            title: "Movie Recommendation System",
            description: "A machine learning based recommendation system that suggests movies based on user preferences and viewing history.",
            tags: ["Python", "Machine Learning", "Streamlit"],
            image: "m1.jpg",
            link: "https://github.com/praveenveeramani3007/Movie-Recommantaion-System-Using-Machine-Learning"
        },
        {
            title: "Forensic Analysis Tool",
            description: "A digital forensic tool designed to analyze file metadata and recover deleted artifacts from disk images.",
            tags: ["Python", "Forensics", "Security"],
            image: "portfolio_section.png",
            link: "https://github.com/praveenveeramani3007/Forensic-Analysis-"
        },
        {
            title: "Image Forgery Detection",
            description: "An AI-powered application to detect image manipulation and splicing using deep learning techniques.",
            tags: ["Deep Learning", "Python", "Computer Vision"],
            image: "im3.jpg",
            link: "#" // No link provided in original
        },
        {
            title: "Portfolio Website",
            description: "My personal portfolio website built with HTML, CSS, JavaScript, and now React!",
            tags: ["React", "HTML5", "CSS3"],
            image: "my_img.jpg.jpeg",
            link: "https://github.com/praveenveeramani3007/"
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
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
