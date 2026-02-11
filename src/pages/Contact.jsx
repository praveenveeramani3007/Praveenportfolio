import React, { useState } from 'react';

const Contact = () => {
    const [status, setStatus] = useState('idle'); // idle, sending, success, error
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const form = e.target;
        const formData = new FormData(form);

        // Add custom subject
        formData.append("_subject", "New Submission from Portfolio!");
        formData.append("_captcha", "false");

        try {
            const response = await fetch("https://formsubmit.co/ajax/praveenveeramani3007@gmail.com", {
                method: "POST", // Capitalized method
                body: formData
            });

            const data = await response.json();

            // Check for success string or ok status
            if (data.success === "true" || response.ok) {
                setStatus('success');
                setMessage("The form was successfully submitted. He will contact within few hours");
                form.reset();
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
            setMessage("Something went wrong. Please try again later.");
        }

        // Reset status after 5 seconds
        setTimeout(() => {
            setStatus('idle');
            setMessage('');
        }, 5000);
    };

    return (
        <div className="page-container">
            {/* Notification */}
            <div className={`notification ${status === 'success' ? 'success' : status === 'error' ? 'error' : ''} ${status === 'success' || status === 'error' ? 'show' : ''}`}>
                <i className={`fas fa-${status === 'success' ? 'check-circle' : 'exclamation-circle'}`}></i>
                {message}
            </div>

            <div className="page-header">
                <h1 className="page-title">Contact Me</h1>
                <p className="page-subtitle">Let's work together! Send me a message.</p>
            </div>

            <div className="glass-card">
                <div className="contact-container">
                    {/* Info Side */}
                    <div className="contact-info">
                        <h2>Get In Touch</h2>
                        <p className="text-muted">
                            Have a project in mind or just want to say hi? Feel free to send me a message.
                            I'll get back to you as soon as possible.
                        </p>

                        <div className="contact-item">
                            <div className="contact-icon-box">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="contact-details">
                                <h3>Email</h3>
                                <p>praveenveeramani3007@gmail.com</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon-box">
                                <i className="fab fa-linkedin-in"></i>
                            </div>
                            <div className="contact-details">
                                <h3>LinkedIn</h3>
                                <p>praveenveeramani902770329</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon-box">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="contact-details">
                                <h3>Location</h3>
                                <p>Tamil Nadu, India</p>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="contact-form">
                        <form id="contactForm" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" className="form-control" required placeholder="Your Name" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" className="form-control" required placeholder="Your Email" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone (Optional)</label>
                                <input type="tel" id="phone" name="phone" className="form-control" placeholder="Your Phone Number" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" className="form-control" required placeholder="Project details or just a hello..." ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={status === 'sending'}>
                                {status === 'sending' ? (
                                    <>
                                        <i className="fas fa-spinner fa-spin"></i> Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message <i className="fas fa-paper-plane"></i>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
