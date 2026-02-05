// 3D Portfolio Interactive Script

// Loading Animation
window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    const sceneContainer = document.querySelector('.scene-container');
    
    // Only run loading animation on homepage
    if (loadingScreen && sceneContainer) {
        // Hide loading screen after 2 seconds
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            
            // Remove loading screen from DOM after transition
            setTimeout(() => {
                if (loadingScreen.parentNode) {
                    loadingScreen.parentNode.removeChild(loadingScreen);
                }
            }, 800);
            
            // Start scene animations
            initializeScene();
        }, 2000);
    } else {
        // For other pages, just initialize mobile nav
        initializeMobileNav();
    }
});

// Initialize 3D Scene
function initializeScene() {
    const cards = document.querySelectorAll('.nav-card');
    const particles = document.querySelectorAll('.particle');
    
    // Only initialize if we have 3D cards (homepage only)
    if (cards.length === 0) {
        return;
    }
    
    // Add entrance animations to cards
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) rotateY(0deg)';
        }, index * 200);
    });
    
    // Initialize card interactions
    initializeCardInteractions();
    
    // Initialize mouse effects
    initializeMouseEffects();
    
    // Initialize background animations
    initializeBackgroundAnimations();
    
    console.log('3D Portfolio scene initialized successfully!');
}

// Card Interactions
function initializeCardInteractions() {
    const navCards = document.querySelectorAll('.nav-card');
    
    if (navCards.length === 0) {
        return;
    }
    
    navCards.forEach(card => {
        let isFlipped = false;
        let flipTimeout;
        
        // Card hover effects
        card.addEventListener('mouseenter', () => {
            if (!isFlipped) {
                card.style.transform = 'rotateY(180deg) translateZ(20px) scale(1.05)';
                isFlipped = true;
            }
            
            // Add glow effect
            const glow = card.querySelector('.card-glow');
            if (glow) {
                glow.style.opacity = '1';
            }
            
            // Clear any existing timeout
            clearTimeout(flipTimeout);
        });
        
        card.addEventListener('mouseleave', () => {
            // Delay flip back to allow clicking
            flipTimeout = setTimeout(() => {
                card.style.transform = 'rotateY(0deg) translateZ(0px) scale(1)';
                isFlipped = false;
                
                // Remove glow effect
                const glow = card.querySelector('.card-glow');
                if (glow) {
                    glow.style.opacity = '0';
                }
            }, 300);
        });
        
        // Card click navigation
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = card.getAttribute('data-page');
            
            if (targetPage) {
                // Add click animation
                card.style.transform = 'rotateY(180deg) translateZ(30px) scale(0.95)';
                
                // Create transition effect
                createPageTransition(() => {
                    window.location.href = `${targetPage}.html`;
                });
            }
        });
        
        // Touch support for mobile
        card.addEventListener('touchstart', (e) => {
            e.preventDefault();
            if (!isFlipped) {
                card.style.transform = 'rotateY(180deg) translateZ(20px) scale(1.05)';
                isFlipped = true;
            }
        });
        
        card.addEventListener('touchend', (e) => {
            e.preventDefault();
            const targetPage = card.getAttribute('data-page');
            
            if (targetPage && isFlipped) {
                setTimeout(() => {
                    createPageTransition(() => {
                        window.location.href = `${targetPage}.html`;
                    });
                }, 500);
            }
        });
    });
}

// Mouse Effects
function initializeMouseEffects() {
    const sceneContainer = document.querySelector('.scene-container');
    const bgElements = document.querySelector('.bg-3d-elements');
    
    // Only initialize if elements exist (homepage)
    if (!sceneContainer || !bgElements) {
        return;
    }
    
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    
    // Mouse movement parallax
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = (e.clientY / window.innerHeight) * 2 - 1;
        
        targetX = mouseX * 20;
        targetY = mouseY * 20;
    });
    
    // Smooth parallax animation
    function animateParallax() {
        if (!bgElements) return;
        
        const currentX = parseFloat(bgElements.style.transform?.split('translateX(')[1]?.split('px')[0]) || 0;
        const currentY = parseFloat(bgElements.style.transform?.split('translateY(')[1]?.split('px')[0]) || 0;
        
        const newX = currentX + (targetX - currentX) * 0.1;
        const newY = currentY + (targetY - currentY) * 0.1;
        
        bgElements.style.transform = `translateX(${newX}px) translateY(${newY}px)`;
        
        requestAnimationFrame(animateParallax);
    }
    
    animateParallax();
    
    // Card mouse tracking
    const cards = document.querySelectorAll('.nav-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            if (!card.classList.contains('flipped')) {
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            }
        });
        
        card.addEventListener('mouseleave', () => {
            if (!card.classList.contains('flipped')) {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
            }
        });
    });
}

// Background Animations
function initializeBackgroundAnimations() {
    const spheres = document.querySelectorAll('.floating-sphere');
    const cubes = document.querySelectorAll('.floating-cube');
    const patterns = document.querySelectorAll('.geometric-pattern');
    const particles = document.querySelectorAll('.particle');
    
    // Only run if elements exist (homepage)
    if (spheres.length === 0 && cubes.length === 0 && particles.length === 0) {
        return;
    }
    
    // Random movement for spheres
    spheres.forEach((sphere, index) => {
        setInterval(() => {
            const randomX = Math.random() * 100;
            const randomY = Math.random() * 100;
            
            sphere.style.left = `${randomX}%`;
            sphere.style.top = `${randomY}%`;
        }, 8000 + index * 2000);
    });
    
    // Continuous rotation for cubes
    cubes.forEach((cube, index) => {
        let rotation = 0;
        
        function rotateCube() {
            rotation += 1;
            cube.style.transform = `rotateX(${rotation}deg) rotateY(${rotation * 1.5}deg)`;
            requestAnimationFrame(rotateCube);
        }
        
        setTimeout(() => rotateCube(), index * 1000);
    });
    
    // Pulsing effect for particles
    particles.forEach((particle, index) => {
        setInterval(() => {
            particle.style.opacity = Math.random() * 0.8 + 0.2;
            particle.style.transform = `scale(${Math.random() * 1.5 + 0.5})`;
        }, 2000 + index * 500);
    });
}

// Page Transition Effect
function createPageTransition(callback) {
    const transition = document.createElement('div');
    transition.className = 'page-transition';
    transition.innerHTML = `
        <div class="transition-content">
            <div class="transition-cube">
                <div class="face front"></div>
                <div class="face back"></div>
                <div class="face right"></div>
                <div class="face left"></div>
                <div class="face top"></div>
                <div class="face bottom"></div>
            </div>
            <p>Loading...</p>
        </div>
    `;
    
    // Add transition styles
    const style = document.createElement('style');
    style.textContent = `
        .page-transition {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #0f0f0f 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        
        .page-transition.active {
            opacity: 1;
        }
        
        .transition-content {
            text-align: center;
            color: #667eea;
        }
        
        .transition-cube {
            width: 50px;
            height: 50px;
            margin: 0 auto 20px;
            transform-style: preserve-3d;
            animation: rotateCube 1s infinite linear;
        }
        
        .transition-cube .face {
            position: absolute;
            width: 50px;
            height: 50px;
            border: 2px solid #667eea;
            background: rgba(102, 126, 234, 0.1);
        }
        
        .transition-cube .front { transform: rotateY(0deg) translateZ(25px); }
        .transition-cube .back { transform: rotateY(180deg) translateZ(25px); }
        .transition-cube .right { transform: rotateY(90deg) translateZ(25px); }
        .transition-cube .left { transform: rotateY(-90deg) translateZ(25px); }
        .transition-cube .top { transform: rotateX(90deg) translateZ(25px); }
        .transition-cube .bottom { transform: rotateX(-90deg) translateZ(25px); }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(transition);
    
    // Trigger transition
    setTimeout(() => {
        transition.classList.add('active');
        
        // Execute callback after transition
        setTimeout(callback, 800);
    }, 50);
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    const cards = document.querySelectorAll('.nav-card');
    
    if (cards.length === 0) {
        return;
    }
    
    let currentIndex = 0;
    
    switch(e.key) {
        case '1':
            cards[0]?.click();
            break;
        case '2':
            cards[1]?.click();
            break;
        case '3':
            cards[2]?.click();
            break;
        case '4':
            cards[3]?.click();
            break;
        case 'ArrowLeft':
        case 'ArrowUp':
            e.preventDefault();
            currentIndex = Math.max(0, currentIndex - 1);
            cards[currentIndex]?.focus();
            break;
        case 'ArrowRight':
        case 'ArrowDown':
            e.preventDefault();
            currentIndex = Math.min(cards.length - 1, currentIndex + 1);
            cards[currentIndex]?.focus();
            break;
        case 'Enter':
        case ' ':
            e.preventDefault();
            document.activeElement?.click();
            break;
    }
});

// Resize Handler
window.addEventListener('resize', () => {
    const cards = document.querySelectorAll('.nav-card');
    
    if (cards.length > 0) {
        // Reset card transforms on resize
        cards.forEach(card => {
            card.style.transform = 'rotateY(0deg) translateZ(0px) scale(1)';
        });
        
        // Reinitialize mouse effects
        setTimeout(() => {
            initializeMouseEffects();
        }, 300);
    }
});

// Performance Optimization
function optimizePerformance() {
    // Reduce animations on low-end devices
    const isLowEndDevice = navigator.hardwareConcurrency <= 2 || 
                          navigator.deviceMemory <= 4;
    
    if (isLowEndDevice) {
        const style = document.createElement('style');
        style.textContent = `
            .floating-sphere, .floating-cube, .geometric-pattern {
                animation-duration: 12s !important;
            }
            .particle {
                display: none;
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    optimizePerformance();
    
    // Set initial card opacity to 0 for entrance animation (homepage only)
    const cards = document.querySelectorAll('.nav-card');
    if (cards.length > 0) {
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px) rotateY(-10deg)';
            card.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        });
    }
    
    // Initialize mobile navigation for other pages
    initializeMobileNav();
});

// Mobile Navigation for Other Pages
function initializeMobileNav() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// Accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        const body = document.body;
        if (body) {
            body.classList.add('keyboard-navigation');
        }
    }
});

document.addEventListener('mousedown', () => {
    const body = document.body;
    if (body) {
        body.classList.remove('keyboard-navigation');
    }
});

// Touch gestures for mobile
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;
    
    // Swipe gestures for card navigation
    if (Math.abs(deltaX) > 50 || Math.abs(deltaY) > 50) {
        const cards = document.querySelectorAll('.nav-card');
        
        if (deltaX > 50) {
            // Swipe right - navigate to first card
            cards[0]?.click();
        } else if (deltaX < -50) {
            // Swipe left - navigate to last card
            cards[cards.length - 1]?.click();
        } else if (deltaY < -50) {
            // Swipe up - navigate to second card
            cards[1]?.click();
        } else if (deltaY > 50) {
            // Swipe down - navigate to third card
            cards[2]?.click();
        }
    }
});
    const text = "Full Stack Developer";
    const typedSubtitle = document.getElementById("typed-subtitle");
    let index = 0;
    let typing = true;

    function loopTyping() {
        if (typing) {
            if (index < text.length) {
                typedSubtitle.textContent += text.charAt(index);
                index++;
                setTimeout(loopTyping, 100);
            } else {
                typing = false;
                setTimeout(loopTyping, 1500); // pause before deleting
            }
        } else {
            if (index > 0) {
                typedSubtitle.textContent = text.substring(0, index - 1);
                index--;
                setTimeout(loopTyping, 50);
            } else {
                typing = true;
                setTimeout(loopTyping, 500); // pause before typing again
            }
        }
    }

    window.addEventListener("load", loopTyping);
// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


// ========================================
// PROJECT MODAL FUNCTIONALITY
// ========================================

// Initialize Project Modal
// Initialize Project Cards (Direct Navigation)
document.addEventListener('DOMContentLoaded', () => {
  const projectCards = document.querySelectorAll('.portfolio-card[data-repo]');

  if (projectCards.length === 0) return;

  // Pre-fetch URLs for smoother navigation
  projectCards.forEach(async (card) => {
    const repoFullName = card.dataset.repo;
    if (repoFullName) {
      try {
        const [owner, repo] = repoFullName.split('/');
        const repoData = await fetchGitHubRepo(owner, repo);
        
        // Store URLs in dataset
        if (repoData.homepage) {
          card.dataset.url = repoData.homepage;
        }
        card.dataset.github = repoData.html_url;
        
      } catch (error) {
        console.error('Failed to pre-fetch repo data for', repoFullName, error);
        // Fallback to constructing GitHub URL manually if fetch fails
        card.dataset.github = `https://github.com/${repoFullName}`;
      }
    }

    // Add click event listener
    card.addEventListener('click', (e) => {
      // Don't trigger if clicking on a link inside the card
      if (e.target.tagName === 'A' || e.target.closest('a')) {
        return;
      }

      e.preventDefault();
      
      const hostedUrl = card.dataset.url;
      const githubUrl = card.dataset.github;

      if (hostedUrl) {
        window.open(hostedUrl, '_blank');
      } else if (githubUrl) {
        window.open(githubUrl, '_blank');
      } else {
        // Fallback if data hasn't loaded yet
        const repoFullName = card.dataset.repo;
        window.open(`https://github.com/${repoFullName}`, '_blank');
      }
    });

    // Keyboard accessibility
    card.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });
});

// Open Project Modal
async function openProjectModal(repoFullName) {
  const modal = document.getElementById('projectModal');
  const loadingState = modal.querySelector('.modal-loading');
  const errorState = modal.querySelector('.modal-error');
  const mainContent = modal.querySelector('.modal-main-content');

  // Show modal with loading state
  modal.classList.add('active');
  loadingState.style.display = 'block';
  errorState.style.display = 'none';
  mainContent.style.display = 'none';
  document.body.style.overflow = 'hidden';

  try {
    // Fetch repository data
    const [owner, repo] = repoFullName.split('/');
    const repoData = await fetchGitHubRepo(owner, repo);
    const languages = await fetchGitHubLanguages(owner, repo);
    const readme = await fetchGitHubReadme(owner, repo);

    // Populate modal with data
    populateModalContent(repoData, languages, readme);

    // Show main content
    loadingState.style.display = 'none';
    mainContent.style.display = 'block';

  } catch (error) {
    console.error('Error loading project details:', error);
    loadingState.style.display = 'none';
    errorState.style.display = 'block';
  }
}

// Close Project Modal
function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Fetch GitHub Repository Data
async function fetchGitHubRepo(owner, repo) {
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
  if (!response.ok) {
    throw new Error('Failed to fetch repository data');
  }
  return await response.json();
}

// Fetch GitHub Languages
async function fetchGitHubLanguages(owner, repo) {
  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/languages`);
    if (!response.ok) {
      return {};
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching languages:', error);
    return {};
  }
}

// Fetch GitHub README
async function fetchGitHubReadme(owner, repo) {
  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`, {
      headers: {
        'Accept': 'application/vnd.github.v3.raw'
      }
    });
    if (!response.ok) {
      return 'No README available for this project.';
    }
    return await response.text();
  } catch (error) {
    console.error('Error fetching README:', error);
    return 'No README available for this project.';
  }
}

// Populate Modal Content
function populateModalContent(repoData, languages, readme) {
  const modal = document.getElementById('projectModal');

  // Title and Description
  modal.querySelector('.modal-title').textContent = repoData.name;
  modal.querySelector('.modal-description').textContent = 
    repoData.description || 'No description available.';

  // Stats
  modal.querySelector('[data-stat="stars"]').textContent = repoData.stargazers_count || 0;
  modal.querySelector('[data-stat="forks"]').textContent = repoData.forks_count || 0;
  modal.querySelector('[data-stat="watchers"]').textContent = repoData.watchers_count || 0;
  modal.querySelector('[data-stat="issues"]').textContent = repoData.open_issues_count || 0;

  // Languages
  const languagesList = modal.querySelector('.languages-list');
  languagesList.innerHTML = '';

  if (Object.keys(languages).length > 0) {
    const total = Object.values(languages).reduce((a, b) => a + b, 0);
    const sortedLanguages = Object.entries(languages)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5); // Show top 5 languages

    sortedLanguages.forEach(([lang, bytes]) => {
      const percentage = ((bytes / total) * 100).toFixed(1);
      const langItem = document.createElement('div');
      langItem.className = 'language-item';
      langItem.innerHTML = `
        <span class="language-name">${lang}</span>
        <div class="language-bar">
          <div class="language-fill" style="width: ${percentage}%"></div>
        </div>
        <span class="language-percentage">${percentage}%</span>
      `;
      languagesList.appendChild(langItem);
    });
  } else {
    languagesList.innerHTML = '<p style="color: rgba(255,255,255,0.6);">No language data available.</p>';
  }

  // README
  const readmeContent = modal.querySelector('.readme-content');
  readmeContent.innerHTML = parseMarkdown(readme);

  // Action Buttons
  const repoBtn = modal.querySelector('[data-action="repo"]');
  repoBtn.href = repoData.html_url;

  const demoBtn = modal.querySelector('[data-action="demo"]');
  if (repoData.homepage && repoData.homepage.trim() !== '') {
    demoBtn.href = repoData.homepage;
    demoBtn.style.display = 'inline-flex';
  } else {
    demoBtn.style.display = 'none';
  }
}

// Simple Markdown Parser
function parseMarkdown(markdown) {
  if (!markdown || markdown.trim() === '') {
    return '<p>No README content available.</p>';
  }

  // Limit to first 1500 characters for preview
  let text = markdown.substring(0, 1500);
  if (markdown.length > 1500) {
    text += '...';
  }

  // Basic markdown parsing
  text = text
    // Headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Code blocks
    .replace(/```(.*?)```/gs, '<pre><code>$1</code></pre>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>')
    // Line breaks
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>');

  return `<p>${text}</p>`;
}
