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
        'salarypridiction': {
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
        'Chatterly': {
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
        },
      'news-app': {
    title: 'News Application (Android / Jetpack Compose)',
    description: `
        <div class="project-modal-content">
            <h3>Overview</h3>
            <p>This is a modern Android news application developed using Kotlin and Jetpack Compose. The app fetches real-time news from NewsAPI and presents it to users with a clean, intuitive UI. It supports filtering by category, dark/light theme, and WorkManager-based background notifications for trending headlines.</p>

            <h3>Key Features</h3>
            <ul>
                <li><strong>Real-Time News Fetching:</strong> Integrates with NewsAPI to retrieve latest news articles dynamically.</li>
                <li><strong>Category Filtering:</strong> Users can browse articles by categories like Sports, Technology, Health, Business, and more.</li>
                <li><strong>WorkManager Integration:</strong> Periodically fetches latest headlines and displays push notifications.</li>
                <li><strong>Elegant UI:</strong> Material Design 3 compliant UI with smooth transitions, responsive layouts, and dynamic theming.</li>
                <li><strong>MVVM Architecture:</strong> Clean architecture that separates UI logic from business logic using ViewModel and LiveData/StateFlow.</li>
                <li><strong>Error Handling:</strong> Graceful API failure handling with retry logic and user feedback.</li>
            </ul>

            <h3>Technologies Used</h3>
            <ul>
                <li><strong>Language:</strong> Kotlin</li>
                <li><strong>UI Framework:</strong> Jetpack Compose</li>
                <li><strong>Architecture:</strong> MVVM</li>
                <li><strong>Networking:</strong> Retrofit with Coroutines</li>
                <li><strong>Background Tasks:</strong> WorkManager</li>
                <li><strong>Image Loading:</strong> Coil</li>
                <li><strong>API:</strong> NewsAPI : <a href="https://newsapi.org/" target="_blank">newsapi.org</a></li>
            </ul>

            <h3>Why This Project?</h3>
            <p>The goal of this project was to demonstrate modern Android development techniques using Jetpack Compose while building a practical, user-facing app. It provides an opportunity to explore REST API integration, UI/UX design, background services, and app architecture—all in one cohesive solution.</p>
        </div>
    `
},
      'visitor-management': {
    title: 'Visitor Management System (Java Swing)',
    description: `
        <div class="project-modal-content">
            <h3>Overview</h3>
            <p>The Visitor Management System is a secure, Java-based desktop application that helps organizations manage and track visitor entries and exits using QR code scanning and webcam integration. Designed with Swing and AWT for GUI and connected to a MySQL database, it streamlines the visitor registration process, improves security, and keeps attendance logs digitally.</p>

            <h3>Key Features</h3>
            <ul>
                <li><strong>Login System:</strong> Admin login with access control to core system features.</li>
                <li><strong>User Registration:</strong> Capture visitor details along with webcam photo capture and image preview.</li>
                <li><strong>QR Code Generation:</strong> Automatically generates a unique QR code for each registered visitor to simplify check-in/check-out.</li>
                <li><strong>QR Code Scanning:</strong> Mark attendance through scanning the QR code using an external device or webcam.</li>
                <li><strong>Database Integration:</strong> All information (visitor details, QR, timestamps) is stored in a MySQL database for persistence and retrieval.</li>
                <li><strong>Visit History:</strong> View the number of registered users and their check-in/out history.</li>
            </ul>

            <h3>Technologies Used</h3>
            <ul>
                <li><strong>Language:</strong> Java</li>
                <li><strong>UI Framework:</strong> Java Swing and AWT</li>
                <li><strong>Database:</strong> MySQL</li>
                <li><strong>QR Code:</strong> ZXing (Zebra Crossing) library</li>
                <li><strong>Webcam Integration:</strong> Webcam Capture API</li>
                <li><strong>IDE:</strong> NetBeans</li>
            </ul>

            <h3>Why This Project?</h3>
            <p>Traditional paper-based visitor tracking systems are inefficient and prone to errors. This project modernizes that process by introducing automation and digital logging, ensuring enhanced security, better data management, and ease of access.</p>
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
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            const scrollProgress = document.querySelector('.scroll-progress');
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollTop = document.documentElement.scrollTop;
            scrollProgress.style.width = (scrollTop / height) * 100 + '%';
            ticking = false;
        });
        ticking = true;
    }
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
const isMobile = window.innerWidth <= 768;
if (isMobile) {
    ScrollReveal().destroy();
}
document.addEventListener('DOMContentLoaded', function() {
    const chatIcon = document.getElementById('chatIcon');
    const chatBox = document.getElementById('chatBox');
    const minimizeChat = document.getElementById('minimizeChat');
    const userInput = document.getElementById('userInput');
    const sendMessage = document.getElementById('sendMessage');
    const chatMessages = document.getElementById('chatMessages');

    // Comprehensive FAQ Database
    const faqDatabase = {
        'keywords': {
            'about': {
                keywords: ['who are you', 'introduce', 'background', 'profile'],
                response: `I'm Priyanshu Kumar Ojha, a B.Tech Computer Science student at Bennett University with a CGPA of 8.93. I'm passionate about software development, cloud computing, and machine learning.`,
                links: []
            },
            'education': {
                keywords: ['study', 'university', 'college', 'education'],
                response: `Studying B.Tech in Computer Science at Bennett University (2022-2026). Completed Class XII from Army Public School with 92%. Current CGPA: 8.93`,
                links: []
            },
            'skills': {
                keywords: ['programming', 'tech', 'languages', 'frameworks','skills'],
                response: `Programming Languages: Java (Advanced), Kotlin (Advanced), Python (Intermediate)
Cloud: AWS Cloud, Firebase
Databases: MySQL, MongoDB, PostgreSQL
Frameworks: Jetpack Compose, MVVM, REST APIs`,
                links: []
            },
            'projects': {
                keywords: ['project', 'work', 'development'],
                response: `Key Projects:
1. Chat Application (Kotlin): Firebase-integrated messaging app
2. Salary Prediction App (Machine Learning): Real-time salary predictions with 91% accuracy
3. DSA Visualizer (Java): Interactive algorithm and data structure visualization`,
                links: {
                    'Chat App': 'https://github.com/priyanshu1512/kotlinappchatterly',
                    'Salary Prediction': 'https://github.com/priyanshu1512/Salary-Prediction-',
                    'DSA Visualizer': 'https://github.com/priyanshu1512/dsaproject'
                }
            },
            'certifications': {
                keywords: ['certificate', 'certification', 'credentials'],
                response: `Certifications:
1. AWS Certified Cloud Practitioner
2. Improving Deep Neural Networks (Coursera)
3. Algorithmic Toolbox (Coursera)`,
                links: {
                    'AWS Certification': 'https://www.credly.com/badges/315ef25b-aaf1-4d33-ab46-0f6ffa117742/public_url',
                    'Coursera Profile': 'https://www.coursera.org/user/profile'
                }
            },
            'contact': {
                keywords: ['reach', 'contact', 'email', 'phone', 'connect'],
                response: `Contact Details:
- Email: priyanshuojha485@gmail.com
- Phone: +91 9041989443
- Location: Noida
- LinkedIn: Priyanshu Kumar Ojha
- LeetCode: priyanshuplays`,
                links: {
                    'LinkedIn': 'https://www.linkedin.com/in/priyanshu-kumar-ojha/',
                    'LeetCode': 'https://leetcode.com/priyanshuplays/'
                }
            },
            'achievements': {
                keywords: ['achievement', 'contest', 'award', 'accomplishment','coding','leetcode'],
                response: `Key Achievements:
- 250+ coding problems solved on platforms like LeetCode
- LeetCode rating of 1775+, top 10% globally
- AWHO Scholarships for academic excellence (1 lakh rupees)
- Participated in 10+ coding contests`,
                links: []
            }
        },
        'default': {
            response: "I'm an AI assistant for Priyanshu's portfolio. Ask me about his skills, projects, education, or contact information. Try keywords like 'skills', 'projects', or 'contact'.",
            links: []
        }
    };

    function findBestResponse(message) {
        const lowercaseMsg = message.toLowerCase();
        
        for (let category in faqDatabase.keywords) {
            const keywordSet = faqDatabase.keywords[category];
            
            for (let keyword of keywordSet.keywords) {
                if (lowercaseMsg.includes(keyword)) {
                    return {
                        response: keywordSet.response,
                        links: keywordSet.links || {}
                    };
                }
            }
        }
        
        return faqDatabase.default;
    }

    function appendMessage(sender, text, links = {}) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        messageDiv.innerHTML = text;

        // Add links if available
        if (Object.keys(links).length > 0) {
            const linksDiv = document.createElement('div');
            linksDiv.className = 'message-links';
            Object.entries(links).forEach(([title, url]) => {
                const linkElem = document.createElement('a');
                linkElem.href = url;
                linkElem.textContent = title;
                linkElem.target = '_blank';
                linksDiv.appendChild(linkElem);
            });
            messageDiv.appendChild(linksDiv);
        }

        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function processMessage() {
        const message = userInput.value.trim();
        if (message === '') return;

        appendMessage('user', message);
        userInput.value = '';

        setTimeout(() => {
            const result = findBestResponse(message);
            appendMessage('bot', result.response, result.links);
        }, 500);
    }

    sendMessage.addEventListener('click', processMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') processMessage();
    });

    chatIcon.addEventListener('click', () => {
        chatBox.style.display = chatBox.style.display === 'none' || chatBox.style.display === '' ? 'flex' : 'none';
    });

    minimizeChat.addEventListener('click', () => {
        chatBox.style.display = 'none';
    });
});
