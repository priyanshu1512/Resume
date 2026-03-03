document.addEventListener('DOMContentLoaded', function () {

  // ─── SCROLL PROGRESS ───────────────────────────────────────
  const scrollProgress = document.querySelector('.scroll-progress');
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const s = document.documentElement.scrollTop;
        if (scrollProgress) scrollProgress.style.width = (s / h) * 100 + '%';
        ticking = false;
      });
      ticking = true;
    }
  });

  // ─── MOBILE NAV ────────────────────────────────────────────
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobileNavClose = document.getElementById('mobileNavClose');

  function openMobileNav() {
    mobileNav.classList.add('open');
    mobileOverlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }
  function closeMobileNav() {
    mobileNav.classList.remove('open');
    mobileOverlay.classList.remove('visible');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openMobileNav);
  if (mobileNavClose) mobileNavClose.addEventListener('click', closeMobileNav);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileNav);
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  // ─── THEME TOGGLE ──────────────────────────────────────────
  const themeToggleCheckbox = document.getElementById('theme-toggle-checkbox');
  if (themeToggleCheckbox) {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-theme');
      themeToggleCheckbox.checked = true;
    }
    themeToggleCheckbox.addEventListener('change', function () {
      document.body.classList.toggle('dark-theme');
      localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
    });
  }

  // ─── SCROLL REVEAL ─────────────────────────────────────────
  if (window.innerWidth > 768 && typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({ duration: 900, distance: '40px', easing: 'cubic-bezier(0.5,0,0,1)', reset: false });
    sr.reveal('.sr-fadeInScale', { origin: 'bottom', scale: 0.92, opacity: 0, delay: 150 });
    sr.reveal('.sr-slideInLeft', { origin: 'left', distance: '80px', delay: 200 });
    sr.reveal('.sr-slideInRight', { origin: 'right', distance: '80px', delay: 200 });
    sr.reveal('.sr-rotateIn', { rotate: { y: 60 }, delay: 250 });
    sr.reveal('.timeline-item', { origin: 'bottom', interval: 200 });
    sr.reveal('.skill-card', { origin: 'bottom', interval: 100, distance: '20px' });
    sr.reveal('.project-box, .certification-box', { origin: 'bottom', interval: 150, distance: '20px' });
    sr.reveal('.contact-card', { origin: 'bottom', interval: 100 });
    sr.reveal('.stats-bar', { origin: 'bottom', distance: '30px', delay: 400 });
  } else {
    document.querySelectorAll('.sr-fadeInScale,.sr-slideInLeft,.sr-slideInRight,.sr-rotateIn')
      .forEach(el => el.style.visibility = 'visible');
  }

  // ─── STATS COUNTER ANIMATION ───────────────────────────────
  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const isDecimal = el.dataset.decimal === 'true';
    const duration = 1800;
    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out expo
      const eased = 1 - Math.pow(2, -10 * progress);
      const current = Math.round(eased * target);

      if (isDecimal) {
        // 893 → display as "8.93"
        el.textContent = (current / 100).toFixed(2);
      } else {
        el.textContent = current.toLocaleString();
      }

      if (progress < 1) requestAnimationFrame(tick);
      else {
        el.textContent = isDecimal
          ? (target / 100).toFixed(2)
          : target.toLocaleString();
      }
    }
    requestAnimationFrame(tick);
  }

  // Trigger counters when stats bar enters viewport
  const statsBar = document.getElementById('statsBar');
  if (statsBar) {
    const counters = statsBar.querySelectorAll('.stat-number');
    let counted = false;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !counted) {
        counted = true;
        counters.forEach((el, i) => {
          setTimeout(() => animateCounter(el), i * 120);
        });
      }
    }, { threshold: 0.4 });
    observer.observe(statsBar);
  }

  // ─── SCROLL COLOR MORPH ────────────────────────────────────
  function hexToRgb(hex) {
    const r = parseInt(hex.slice(1,3),16);
    const g = parseInt(hex.slice(3,5),16);
    const b = parseInt(hex.slice(5,7),16);
    return {r,g,b};
  }

  function lerpColor(c1, c2, t) {
    return {
      r: Math.round(c1.r + (c2.r - c1.r) * t),
      g: Math.round(c1.g + (c2.g - c1.g) * t),
      b: Math.round(c1.b + (c2.b - c1.b) * t),
    };
  }

  const colorSections = Array.from(document.querySelectorAll('[data-bgcolor]'));
  const startColor = hexToRgb('#f8fafc');
  const startTextColor = hexToRgb('#0f172a');

  function updatePageColor() {
    if (document.body.classList.contains('dark-theme')) return;

    const scrollY = window.scrollY;
    const winH = window.innerHeight;

    let fromColor = startColor;
    let toColor = startColor;
    let fromText = startTextColor;
    let toText = startTextColor;
    let progress = 0;

    for (let i = 0; i < colorSections.length; i++) {
      const sec = colorSections[i];
      const rect = sec.getBoundingClientRect();
      const secTop = rect.top + scrollY;

      const triggerPoint = secTop - winH * 0.5;
      const endPoint = secTop + rect.height * 0.3;

      if (scrollY >= triggerPoint && scrollY <= endPoint) {
        const prevBg   = i === 0 ? '#f8fafc' : colorSections[i-1].dataset.bgcolor;
        const prevText = i === 0 ? '#0f172a' : (colorSections[i-1].dataset.textcolor || '#0f172a');
        fromColor = hexToRgb(prevBg);
        toColor   = hexToRgb(sec.dataset.bgcolor);
        fromText  = hexToRgb(prevText);
        toText    = hexToRgb(sec.dataset.textcolor || '#0f172a');
        progress  = Math.max(0, Math.min(1, (scrollY - triggerPoint) / (endPoint - triggerPoint)));
        break;
      } else if (scrollY > endPoint && i === colorSections.length - 1) {
        fromColor = toColor = hexToRgb(sec.dataset.bgcolor);
        fromText  = toText  = hexToRgb(sec.dataset.textcolor || '#0f172a');
        progress  = 1;
      } else if (scrollY > endPoint) {
        fromColor = hexToRgb(sec.dataset.bgcolor);
        toColor   = hexToRgb(colorSections[i+1]?.dataset.bgcolor || sec.dataset.bgcolor);
        fromText  = hexToRgb(sec.dataset.textcolor || '#0f172a');
        toText    = hexToRgb(colorSections[i+1]?.dataset.textcolor || '#0f172a');
        progress  = 0;
      }
    }

    // Ease in-out quad
    const eased = progress < 0.5
      ? 2 * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 2) / 2;

    const bg   = lerpColor(fromColor, toColor, eased);
    const text = lerpColor(fromText,  toText,  eased);

    document.documentElement.style.setProperty('--page-bg',   `rgb(${bg.r},${bg.g},${bg.b})`);
    document.documentElement.style.setProperty('--page-text', `rgb(${text.r},${text.g},${text.b})`);
  }

  // Smooth scroll listener with rAF
  let colorTicking = false;
  window.addEventListener('scroll', () => {
    if (!colorTicking) {
      requestAnimationFrame(() => {
        updatePageColor();
        colorTicking = false;
      });
      colorTicking = true;
    }
  });

  // Init on load
  updatePageColor();

  // ─── SECTION PARALLAX ENTRY ────────────────────────────────
  const sections = document.querySelectorAll('section:not(#home)');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0) scale(1)';
        entry.target.classList.add('in-view');
        entry.target.classList.remove('below-view');
      }
    });
  }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });

  sections.forEach(sec => {
    if (window.innerWidth > 768) {
      sec.style.opacity = '0';
      sec.style.transform = 'translateY(32px) scale(0.99)';
      sec.style.transition = 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)';
    }
    sectionObserver.observe(sec);
  });

  // ─── TILT EFFECT ───────────────────────────────────────────
  document.querySelectorAll('.project-box, .certification-box').forEach(box => {
    box.addEventListener('mousemove', (e) => {
      const rect = box.getBoundingClientRect();
      const x = e.clientX - rect.left, y = e.clientY - rect.top;
      const rotateX = (y - rect.height / 2) / 22;
      const rotateY = (rect.width / 2 - x) / 22;
      box.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });
    box.addEventListener('mouseleave', () => { box.style.transform = ''; });
  });

  // ─── SMOOTH SCROLL NAV ─────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ─── CHAT WIDGET ───────────────────────────────────────────
  const chatIcon = document.getElementById('chatIcon');
  const chatBox = document.getElementById('chatBox');
  const minimizeChat = document.getElementById('minimizeChat');
  const userInput = document.getElementById('userInput');
  const sendMessageBtn = document.getElementById('sendMessage');
  const chatMessages = document.getElementById('chatMessages');

  const faqDatabase = {
    keywords: {
      about: {
        keywords: ['who are you', 'introduce', 'background', 'profile', 'about'],
        response: `I'm Priyanshu Kumar Ojha, a B.Tech Computer Science student at Bennett University (CGPA: 8.93). I'm passionate about Java development, cloud computing, and building scalable systems.`,
      },
      experience: {
        keywords: ['experience', 'intern', 'job', 'here technologies', 'work', 'company'],
        response: `Priyanshu is currently an SDE Intern at HERE Technologies (June 2025–Present) in Mumbai. He works on the Map Making Automation Services team — building JUnit tests, optimizing validation rules by up to 74%, and leading schema migrations.`,
      },
      education: {
        keywords: ['study', 'university', 'college', 'education', 'cgpa'],
        response: `B.Tech Computer Science at Bennett University (2022–2026), CGPA: 8.93. Completed Class XII from Army Public School with 92%.`,
      },
      skills: {
        keywords: ['programming', 'tech', 'languages', 'frameworks', 'skills'],
        response: `Languages: Java (Advanced), Kotlin (Advanced), Python, Scala\nCloud: AWS (Certified), Firebase\nDBs: MySQL, PostgreSQL, MongoDB\nTools: Spring Boot, JUnit, Jetpack Compose, REST APIs, Git`,
      },
      projects: {
        keywords: ['project', 'work', 'development', 'built'],
        response: `Key projects:\n1. Chat App (Kotlin/Firebase)\n2. Hate Speech Recognition (AWS + BiLSTM, 83% accuracy)\n3. Salary Prediction (ML, 91% accuracy)\n4. DSA Visualizer (Java)\n5. Visitor Management System (Java/MySQL)`,
        links: { 'GitHub': 'https://github.com/priyanshu1512' }
      },
      certifications: {
        keywords: ['certificate', 'certification', 'credentials', 'aws', 'certified'],
        response: `Certifications:\n1. AWS Certified Cloud Practitioner\n2. Generative AI: Prompt Engineering (Google)\n3. Algorithmic Toolbox (Coursera)`,
      },
      contact: {
        keywords: ['reach', 'contact', 'email', 'phone', 'connect'],
        response: `Email: priyanshuojha485@gmail.com\nPhone: +91 9041989443\nLinkedIn: Priyanshu Kumar Ojha\nLeetCode: priyanshuplays`,
        links: {
          'LinkedIn': 'https://www.linkedin.com/in/priyanshu-kumar-ojha/',
          'LeetCode': 'https://leetcode.com/priyanshuplays/'
        }
      },
      achievements: {
        keywords: ['achievement', 'contest', 'award', 'accomplishment', 'coding', 'leetcode'],
        response: `Achievements:\n- 250+ LeetCode problems solved\n- Rating 1775+, Top 10% globally\n- AWHO Scholarship for academic excellence\n- 10+ coding contests participated`,
      }
    },
    default: {
      response: "I can answer questions about Priyanshu's skills, experience, projects, education, or contact info. Try asking about 'experience', 'projects', or 'skills'!",
    }
  };

  function findBestResponse(message) {
    const msg = message.toLowerCase();
    for (let cat in faqDatabase.keywords) {
      const item = faqDatabase.keywords[cat];
      if (item.keywords.some(kw => msg.includes(kw))) {
        return { response: item.response, links: item.links || {} };
      }
    }
    return faqDatabase.default;
  }

  function appendMessage(sender, text, links = {}) {
    const div = document.createElement('div');
    div.className = `message ${sender}`;
    div.innerHTML = text.replace(/\n/g, '<br>');
    if (Object.keys(links).length > 0) {
      const ld = document.createElement('div');
      ld.style.cssText = 'margin-top:0.5rem;display:flex;flex-wrap:wrap;gap:0.4rem;';
      Object.entries(links).forEach(([title, url]) => {
        const a = document.createElement('a');
        a.href = url; a.textContent = title; a.target = '_blank';
        a.style.cssText = 'font-size:0.78rem;color:var(--primary);text-decoration:underline;';
        ld.appendChild(a);
      });
      div.appendChild(ld);
    }
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function processMessage() {
    const msg = userInput.value.trim();
    if (!msg) return;
    appendMessage('user', msg);
    userInput.value = '';
    setTimeout(() => {
      const result = findBestResponse(msg);
      appendMessage('bot', result.response, result.links || {});
    }, 400);
  }

  if (sendMessageBtn) sendMessageBtn.addEventListener('click', processMessage);
  if (userInput) userInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') processMessage(); });
  if (chatIcon) chatIcon.addEventListener('click', () => {
    chatBox.style.display = chatBox.style.display === 'flex' ? 'none' : 'flex';
  });
  if (minimizeChat) minimizeChat.addEventListener('click', () => { chatBox.style.display = 'none'; });

});

// ─── PROJECT MODALS ────────────────────────────────────────────
function showProjectDetails(projectId) {
  const projectDetails = {
    'journey-junction': {
      title: 'DSA Visualizer (Java)',
      description: `<div class="project-modal-content">
        <h3>Overview</h3><p>A Java-based tool to visually understand data structures and sorting algorithms interactively.</p>
        <h3>Key Features</h3><div class="feature-section">
          <h4>Data Structures</h4><ul><li>Stack, Queue, Array, BST</li></ul>
          <h4>Sorting</h4><ul><li>Bubble, Insertion, Selection, Merge Sort</li></ul>
          <h4>Graph Algorithms</h4><ul><li>DFS, BFS, Dijkstra's Shortest Path</li></ul>
        </div>
        <h3>Technologies</h3><p>Java, AWT, Swing</p></div>`
    },
    'salarypridiction': {
      title: 'Salary Prediction App (ML)',
      description: `<div class="project-modal-content">
        <h3>Overview</h3><p>ML web app using Python and Streamlit for real-time salary prediction — 91% model accuracy.</p>
        <h3>Models Used</h3><ul><li>Linear Regression</li><li>Decision Trees</li><li>Random Forest (best performer)</li></ul>
        <h3>Technologies</h3><p>Python, Streamlit, Scikit-learn, Pandas, Matplotlib</p></div>`
    },
    'hate-speech': {
      title: 'Hate Speech Recognition (AWS + AI)',
      description: `<div class="project-modal-content">
        <h3>Overview</h3><p>Serverless ML pipeline for detecting toxic content across 6 categories, deployed on AWS.</p>
        <h3>Key Achievements</h3><ul><li>83% accuracy using BiLSTM neural networks</li><li>1000+ MAU with &lt;500ms latency</li><li>40% cloud cost reduction</li><li>99.9% availability</li></ul>
        <h3>Technologies</h3><p>Python, TensorFlow/Keras, AWS SageMaker, Lambda, API Gateway, S3</p></div>`
    },
    'Chatterly': {
      title: 'Chatterly – Real-Time Chat App (Android)',
      description: `<div class="project-modal-content">
        <h3>Overview</h3><p>Feature-rich chat app using Jetpack Compose with Firebase backend. 99.5% uptime, 35% reduced latency.</p>
        <h3>Key Features</h3><div class="feature-section">
          <h4>Auth</h4><ul><li>Firebase email/password auth</li></ul>
          <h4>Messaging</h4><ul><li>Real-time Firestore sync, media sharing</li></ul>
          <h4>Performance</h4><ul><li>40% UI improvement via Coroutines</li></ul>
        </div>
        <h3>Tech Stack</h3><p>Kotlin, Jetpack Compose, MVVM, Firebase, Coroutines</p></div>`
    },
    'news-app': {
      title: 'News Application (Android)',
      description: `<div class="project-modal-content">
        <h3>Overview</h3><p>Modern Android news app fetching real-time headlines from NewsAPI with WorkManager push notifications.</p>
        <h3>Key Features</h3><ul>
          <li>Real-time news with category filtering</li>
          <li>WorkManager background notifications</li>
          <li>Material Design 3, dark/light theme</li>
          <li>MVVM with StateFlow</li>
        </ul>
        <h3>Technologies</h3><p>Kotlin, Jetpack Compose, Retrofit, WorkManager, Coil, NewsAPI</p></div>`
    },
    'visitor-management': {
      title: 'Visitor Management System (Java/MySQL)',
      description: `<div class="project-modal-content">
        <h3>Overview</h3><p>Secure Java desktop app for visitor check-in/check-out using QR code scanning. Reduced check-in time by 75%.</p>
        <h3>Key Features</h3><ul>
          <li>QR code generation & scanning (ZXing)</li>
          <li>Webcam integration for photo capture</li>
          <li>MySQL with 99.9% data integrity</li>
          <li>Admin login with access control</li>
        </ul>
        <h3>Technologies</h3><p>Java, Swing/AWT, MySQL, ZXing, Webcam Capture API</p></div>`
    }
  };

  const project = projectDetails[projectId];
  if (!project) return;
  const modalDetails = document.getElementById('modal-details');
  const modal = document.getElementById('modal');
  modalDetails.innerHTML = `<h2>${project.title}</h2>${project.description}`;
  modal.style.display = 'flex';
  setTimeout(() => modal.classList.add('active'), 10);
}

function showCertificationDetails(certificationId) {
  const certs = {
    'aws-cloud-practitioner': {
      title: 'AWS Certified Cloud Practitioner',
      description: 'Foundational certification demonstrating knowledge of AWS Cloud services, architecture, security, and pricing.',
      link: 'https://www.credly.com/badges/315ef25b-aaf1-4d33-ab46-0f6ffa117742/public_url'
    },
    'generative-ai': {
      title: 'Level 3 Generative AI: Prompt Engineering',
      description: 'Advanced certification in Generative AI techniques and prompt engineering from Google Cloud.',
      link: 'https://www.cloudskillsboost.google/public_profiles/8da9507c-bba1-4443-8d44-a4d6d56ebc42'
    },
    'algorithmic-toolbox': {
      title: 'Algorithmic Toolbox – Coursera',
      description: 'Certification in algorithmic problem-solving: greedy algorithms, divide & conquer, dynamic programming.',
      link: 'https://www.coursera.org/account/accomplishments/verify/G22DHB7GPUAH'
    }
  };

  const cert = certs[certificationId];
  if (!cert) return;
  const modalDetails = document.getElementById('modal-details');
  const modal = document.getElementById('modal');
  modalDetails.innerHTML = `<h2>${cert.title}</h2><p>${cert.description}</p><a href="${cert.link}" target="_blank">View Certificate →</a>`;
  modal.style.display = 'flex';
  setTimeout(() => modal.classList.add('active'), 10);
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
  setTimeout(() => { modal.style.display = 'none'; }, 300);
}

document.addEventListener('click', (e) => {
  const modal = document.getElementById('modal');
  if (e.target === modal) closeModal();
});
