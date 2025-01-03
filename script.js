document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is ready!');
});

function showProjectDetails(projectId) {
    const projectDetails = {
        'journey-junction': {
            title: 'Data Structure and Algorithm Visualizer (Java)',
            description: `
                <div class="project-modal-content">
                    <h3>Overview</h3>
                    <p>A Java-based tool designed to provide an intuitive and interactive way to understand common data structures and algorithms.</p>

                    <h3>Key Features</h3>
                    <div class="feature-section">
                        <h4>Data Structures</h4>
                        <ul>
                            <li><strong>Stack:</strong> Visualizes stack operations like push, pop, and peek</li>
                            <li><strong>Queue:</strong> Demonstrates enqueue and dequeue operations</li>
                            <li><strong>Array:</strong> Showcases dynamic updates and traversals</li>
                            <li><strong>Binary Search Tree (BST):</strong> Illustrates insertion, search, and traversal operations</li>
                        </ul>

                        <h4>Sorting Algorithms</h4>
                        <ul>
                            <li><strong>Bubble Sort:</strong> Step-by-step visualization</li>
                            <li><strong>Insertion Sort:</strong> Animates the sorting sequence</li>
                            <li><strong>Selection Sort:</strong> Highlights minimum element selection</li>
                            <li><strong>Merge Sort:</strong> Visualizes divide-and-conquer approach</li>
                        </ul>

                        <h4>Graph Algorithms</h4>
                        <ul>
                            <li><strong>DFS & BFS:</strong> Visual graph traversal demonstrations</li>
                            <li><strong>Dijkstra's Algorithm:</strong> Shortest path visualization</li>
                        </ul>
                    </div>

                    <h3>Technologies Used</h3>
                    <p>Java, AWT, Swing</p>
                </div>
            `
        },
        'sustainagrow': {
            title: 'Salary Prediction App (Machine Learning)',
            description: `
                <div class="project-modal-content">
                    <h3>Overview</h3>
                    <p>A Machine Learning web application built using Python and Streamlit for real-time salary prediction based on Stack Overflow Developer Survey data.</p>

                    <h3>Key Features</h3>
                    <ul>
                        <li>Interactive salary predictions based on multiple factors</li>
                        <li>Responsive graphs for exploring salary trends</li>
                        <li>Multiple ML models implementation:
                            <ul>
                                <li>Linear Regression</li>
                                <li>Decision Trees</li>
                                <li>Random Forest Regression</li>
                            </ul>
                        </li>
                        <li>Model optimization using GridSearchCV</li>
                        <li>Dark and light mode support</li>
                    </ul>

                    <h3>Technologies Used</h3>
                    <p>Python, Streamlit, Scikit-learn, Pandas, Matplotlib</p>
                </div>
            `
        },
        'towtechsol': {
            title: 'Chatterly Compose (Android)',
            description: `
                <div class="project-modal-content">
                    <h3>Overview</h3>
                    <p>A feature-rich chat application built using Jetpack Compose with Firebase-powered backend services.</p>

                    <h3>Key Features</h3>
                    <div class="feature-section">
                        <h4>Authentication</h4>
                        <ul>
                            <li>Secure Firebase Authentication</li>
                            <li>Email/password login and signup</li>
                            <li>Built-in error handling</li>
                        </ul>

                        <h4>Messaging Features</h4>
                        <ul>
                            <li>Real-time message synchronization</li>
                            <li>Media file sharing capabilities</li>
                            <li>Efficient data handling with Firebase</li>
                        </ul>

                        <h4>UI/UX</h4>
                        <ul>
                            <li>Modern interface with Jetpack Compose</li>
                            <li>Light and Dark theme support</li>
                            <li>Responsive animations</li>
                        </ul>
                    </div>

                    <h3>Tech Stack</h3>
                    <ul>
                        <li><strong>Frontend:</strong> Kotlin, Jetpack Compose</li>
                        <li><strong>Backend:</strong> Firebase (Authentication, Storage, Realtime Database)</li>
                        <li><strong>Architecture:</strong> MVVM with Coroutines</li>
                    </ul>
                </div>
            `
        }
    };

   const project = projectDetails[projectId];
    if (project) {
        const modalDetails = document.getElementById('modal-details');
        const modal = document.getElementById('modal');
        const modalContent = modal.querySelector('.modal-content');
        
        modalDetails.innerHTML = `
            <h2>${project.title}</h2>
            ${project.description}
        `;
        
        modal.style.display = 'flex';
          
        // Apply dark theme if body has dark-theme class
        if (document.body.classList.contains('dark-theme')) {
            modal.classList.add('dark-theme');  
            modalContent.classList.add('dark-theme');
            modalDetails.classList.add('dark-theme');
        }
        
        setTimeout(() => modal.classList.add('active'), 10);
    }
}
function showCertificationDetails(certificationId) {
    const certificationDetails = {
        'aws-cloud-practitioner': {
            title: 'AWS Certified Cloud Practitioner',
            description: 'Certification demonstrating foundational knowledge of AWS Cloud services.',
            link: 'https://www.credly.com/badges/315ef25b-aaf1-4d33-ab46-0f6ffa117742/public_url' // Replace with actual link
        },
        'generative-ai': {
            title: 'Level 3 Generative AI: Prompt Engineering',
            description: 'Advanced certification in Generative AI and Prompt Engineering techniques.',
            link: 'https://www.cloudskillsboost.google/public_profiles/8da9507c-bba1-4443-8d44-a4d6d56ebc42' // Replace with actual link
        },
        'algorithmic-toolbox': {
            title: 'Algorithmic Toolbox | Coursera',
            description: 'Certification in algorithmic problem-solving and computational thinking.',
            link: 'https://www.coursera.org/account/accomplishments/verify/G22DHB7GPUAH?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course' // Replace with actual link
        }
    };

    const certification = certificationDetails[certificationId];
    if (certification) {
        document.getElementById('modal-details').innerHTML = `
            <h2>${certification.title}</h2>
            <p>${certification.description}</p>
            <a href="${certification.link}" target="_blank">View Certificate</a>
        `;
        document.getElementById('modal').style.display = 'flex';
    }
  if (certification) {
        const modalDetails = document.getElementById('modal-details');
        modalDetails.innerHTML = `
            <h2>${certification.title}</h2>
            <p>${certification.description}</p>
            <a href="${certification.link}" target="_blank">View Certificate</a>
        `;
        const modal = document.getElementById('modal');
        modal.style.display = 'flex';
        
        // Check if dark theme is active and apply it to modal
        if (document.body.classList.contains('dark-theme')) {
            modal.classList.add('dark-theme');
            modalDetails.classList.add('dark-theme');
        }
        
        setTimeout(() => modal.classList.add('active'), 10);
    }
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('dark-theme');
        document.getElementById('modal-details').classList.remove('dark-theme');
    }, 300);
}
document.addEventListener('DOMContentLoaded', function () {
  const sr = ScrollReveal({
        duration: 1000,
        distance: '50px',
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        reset: true
    });

    // Fade and scale animation
    sr.reveal('.sr-fadeInScale', {
        origin: 'bottom',
        scale: 0.9,
        opacity: 0,
        delay: 200
    });

    // Slide in from left
    sr.reveal('.sr-slideInLeft', {
        origin: 'left',
        distance: '100px',
        delay: 300
    });

    // Slide in from right
    sr.reveal('.sr-slideInRight', {
        origin: 'right',
        distance: '100px',
        delay: 300
    });

    // Rotate in
    sr.reveal('.sr-rotateIn', {
        rotate: { y: 90 },
        delay: 400
    });

    // Apply floating animation to profile picture
    const profilePic = document.querySelector('.profile-pic img');
    if (profilePic) {
        profilePic.classList.add('animate-float');
    }

    // Staggered reveal for skills
    sr.reveal('.skills-table tr', {
        origin: 'bottom',
        interval: 200
    });

    // Staggered reveal for projects and certifications
    sr.reveal('.project-box, .certification-box', {
        origin: 'bottom',
        interval: 200,
        distance: '20px'
    });
    const themeToggleCheckbox = document.getElementById('theme-toggle-checkbox');
themeToggleCheckbox.addEventListener('change', function () {
    document.body.classList.toggle('dark-theme');

    // Toggle dark theme for all sections including certifications
    document.querySelectorAll('header, #home, #about, #skills, #projects, #certifications, #contact, footer, .btn, nav ul li a, h2, .intro, .skills-table, .project-box, .certification-box, .clickable-icon, .certification, .view-certificate').forEach(element => {
        element.classList.toggle('dark-theme');
    });
});
});
// Add these new interactive features to script.js

// Scroll Progress Indicator
window.addEventListener('scroll', () => {
    const scrollProgress = document.createElement('div');
    scrollProgress.className = 'scroll-progress';
    document.body.appendChild(scrollProgress);
    
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    const width = (scrollTop / height) * 100;
    scrollProgress.style.width = width + '%';
});

// Tilt effect for project and certification boxes
document.querySelectorAll('.project-box, .certification-box').forEach(box => {
    box.addEventListener('mousemove', (e) => {
        const rect = box.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        box.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    box.addEventListener('mouseleave', () => {
        box.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Lazy loading for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Add touch support for mobile devices
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const difference = touchEndX - touchStartX;
    
    if (Math.abs(difference) > swipeThreshold) {
        if (difference > 0) {
            // Swipe right - previous section
            navigateSections('prev');
        } else {
            // Swipe left - next section
            navigateSections('next');
        }
    }
}

function navigateSections(direction) {
    const sections = Array.from(document.querySelectorAll('section'));
    const currentSection = sections.find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= window.innerHeight;
    });
    
    if (currentSection) {
        const currentIndex = sections.indexOf(currentSection);
        const targetIndex = direction === 'next' ? 
            Math.min(currentIndex + 1, sections.length - 1) : 
            Math.max(currentIndex - 1, 0);
            
        sections[targetIndex].scrollIntoView({ behavior: 'smooth' });
    }
}
