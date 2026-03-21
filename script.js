document.addEventListener('DOMContentLoaded', function () {

  // ── SCROLL PROGRESS ────────────────────────────────────────────────
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

  // ── MOBILE NAV ─────────────────────────────────────────────────────
  const hamburgerBtn  = document.getElementById('hamburgerBtn');
  const mobileNav     = document.getElementById('mobileNav');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobileNavClose= document.getElementById('mobileNavClose');
  function openMobileNav()  { mobileNav.classList.add('open');    mobileOverlay.classList.add('visible');    document.body.style.overflow = 'hidden'; }
  function closeMobileNav() { mobileNav.classList.remove('open'); mobileOverlay.classList.remove('visible'); document.body.style.overflow = ''; }
  if (hamburgerBtn)  hamburgerBtn.addEventListener('click', openMobileNav);
  if (mobileNavClose) mobileNavClose.addEventListener('click', closeMobileNav);
  if (mobileOverlay)  mobileOverlay.addEventListener('click', closeMobileNav);
  document.querySelectorAll('.mobile-nav-link').forEach(l => l.addEventListener('click', closeMobileNav));

  // ── THEME TOGGLE ───────────────────────────────────────────────────
  const themeToggle = document.getElementById('theme-toggle-checkbox');
  if (themeToggle) {
    if (localStorage.getItem('theme') === 'dark') { document.body.classList.add('dark-theme'); themeToggle.checked = true; }
    themeToggle.addEventListener('change', function () {
      document.body.classList.toggle('dark-theme');
      localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
    });
  }

  // ── SCROLL REVEAL ──────────────────────────────────────────────────
  if (window.innerWidth > 768 && typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({ duration: 900, distance: '40px', easing: 'cubic-bezier(0.5,0,0,1)', reset: false });
    sr.reveal('.sr-fadeInScale',  { origin: 'bottom', scale: 0.92, opacity: 0, delay: 150 });
    sr.reveal('.sr-slideInLeft',  { origin: 'left',   distance: '80px', delay: 200 });
    sr.reveal('.sr-slideInRight', { origin: 'right',  distance: '80px', delay: 200 });
    sr.reveal('.sr-rotateIn',     { rotate: { y: 60 }, delay: 250 });
    sr.reveal('.timeline-item',   { origin: 'bottom', interval: 200 });
    sr.reveal('.skill-card',      { origin: 'bottom', interval: 100, distance: '20px' });
    sr.reveal('.project-box, .certification-box', { origin: 'bottom', interval: 150, distance: '20px' });
    sr.reveal('.contact-card',    { origin: 'bottom', interval: 100 });
    sr.reveal('.stats-bar',       { origin: 'bottom', distance: '30px', delay: 400 });
  } else {
    document.querySelectorAll('.sr-fadeInScale,.sr-slideInLeft,.sr-slideInRight,.sr-rotateIn')
      .forEach(el => el.style.visibility = 'visible');
  }

  // ── STATS COUNTER ──────────────────────────────────────────────────
  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const isDecimal = el.dataset.decimal === 'true';
    const duration = 1800, startTime = performance.now();
    function tick(now) {
      const p = Math.min((now - startTime) / duration, 1);
      const e = 1 - Math.pow(2, -10 * p);
      const c = Math.round(e * target);
      el.textContent = isDecimal ? (c / 100).toFixed(2) : c.toLocaleString();
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = isDecimal ? (target / 100).toFixed(2) : target.toLocaleString();
    }
    requestAnimationFrame(tick);
  }
  const statsBar = document.getElementById('statsBar');
  if (statsBar) {
    let counted = false;
    new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !counted) {
        counted = true;
        statsBar.querySelectorAll('.stat-number').forEach((el, i) => setTimeout(() => animateCounter(el), i * 120));
      }
    }, { threshold: 0.4 }).observe(statsBar);
  }

  // ── SCROLL COLOR MORPH ─────────────────────────────────────────────
  function hexToRgb(hex) { return { r: parseInt(hex.slice(1,3),16), g: parseInt(hex.slice(3,5),16), b: parseInt(hex.slice(5,7),16) }; }
  function lerpColor(c1, c2, t) { return { r: Math.round(c1.r+(c2.r-c1.r)*t), g: Math.round(c1.g+(c2.g-c1.g)*t), b: Math.round(c1.b+(c2.b-c1.b)*t) }; }
  const colorSections = Array.from(document.querySelectorAll('[data-bgcolor]'));
  const startColor = hexToRgb('#f8fafc'), startText = hexToRgb('#0f172a');
  function updatePageColor() {
    if (document.body.classList.contains('dark-theme')) return;
    const scrollY = window.scrollY, winH = window.innerHeight;
    let fromC = startColor, toC = startColor, fromT = startText, toT = startText, progress = 0;
    for (let i = 0; i < colorSections.length; i++) {
      const sec = colorSections[i], rect = sec.getBoundingClientRect();
      const secTop = rect.top + scrollY, trigger = secTop - winH * 0.5, end = secTop + rect.height * 0.3;
      if (scrollY >= trigger && scrollY <= end) {
        const pb = i === 0 ? '#f8fafc' : colorSections[i-1].dataset.bgcolor;
        const pt = i === 0 ? '#0f172a' : (colorSections[i-1].dataset.textcolor || '#0f172a');
        fromC = hexToRgb(pb); toC = hexToRgb(sec.dataset.bgcolor);
        fromT = hexToRgb(pt); toT = hexToRgb(sec.dataset.textcolor || '#0f172a');
        progress = Math.max(0, Math.min(1, (scrollY - trigger) / (end - trigger)));
        break;
      } else if (scrollY > end && i === colorSections.length - 1) {
        fromC = toC = hexToRgb(sec.dataset.bgcolor); fromT = toT = hexToRgb(sec.dataset.textcolor || '#0f172a'); progress = 1;
      } else if (scrollY > end) {
        fromC = hexToRgb(sec.dataset.bgcolor); toC = hexToRgb(colorSections[i+1]?.dataset.bgcolor || sec.dataset.bgcolor);
        fromT = hexToRgb(sec.dataset.textcolor || '#0f172a'); toT = hexToRgb(colorSections[i+1]?.dataset.textcolor || '#0f172a'); progress = 0;
      }
    }
    const ea = progress < 0.5 ? 2*progress*progress : 1-Math.pow(-2*progress+2,2)/2;
    const bg = lerpColor(fromC, toC, ea), tx = lerpColor(fromT, toT, ea);
    document.documentElement.style.setProperty('--page-bg',   `rgb(${bg.r},${bg.g},${bg.b})`);
    document.documentElement.style.setProperty('--page-text', `rgb(${tx.r},${tx.g},${tx.b})`);
  }
  let colorTick = false;
  window.addEventListener('scroll', () => { if (!colorTick) { requestAnimationFrame(() => { updatePageColor(); colorTick = false; }); colorTick = true; } });
  updatePageColor();

  // ── SECTION PARALLAX ENTRY ─────────────────────────────────────────
  const sections = document.querySelectorAll('section:not(#home)');
  const secObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity='1'; e.target.style.transform='translateY(0) scale(1)'; e.target.classList.add('in-view'); } });
  }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });
  sections.forEach(sec => {
    if (window.innerWidth > 768) { sec.style.opacity='0'; sec.style.transform='translateY(32px) scale(0.99)'; sec.style.transition='opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)'; }
    secObs.observe(sec);
  });

  // ── TILT EFFECT ────────────────────────────────────────────────────
  document.querySelectorAll('.project-box, .certification-box').forEach(box => {
    box.addEventListener('mousemove', (e) => {
      const r = box.getBoundingClientRect();
      const rx = (e.clientY - r.top - r.height/2) / 22, ry = (r.width/2 - (e.clientX - r.left)) / 22;
      box.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    });
    box.addEventListener('mouseleave', () => box.style.transform = '');
  });

  // ── SMOOTH SCROLL ──────────────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const t = document.querySelector(this.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

  // ── CHAT WIDGET ────────────────────────────────────────────────────
  const chatIcon = document.getElementById('chatIcon'), chatBox = document.getElementById('chatBox');
  const minimizeChat = document.getElementById('minimizeChat'), userInput = document.getElementById('userInput');
  const sendMessageBtn = document.getElementById('sendMessage'), chatMessages = document.getElementById('chatMessages');
  const faqDB = {
    keywords: {
      about:   { keywords: ['who are you','introduce','background','profile','about'],    response: "I'm Priyanshu Kumar Ojha, a B.Tech CS student at Bennett University (CGPA: 8.93). Passionate about Java, cloud computing, and scalable systems." },
      exp:     { keywords: ['experience','intern','job','here technologies','work'],       response: "Priyanshu is an SDE Intern at HERE Technologies (June 2025–Present) in Mumbai — JUnit tests, 74% perf optimisation, schema migrations." },
      edu:     { keywords: ['study','university','college','education','cgpa'],            response: "B.Tech CS at Bennett University (2022–2026), CGPA: 8.93. Class XII from Army Public School with 92%." },
      skills:  { keywords: ['programming','tech','languages','frameworks','skills'],       response: "Languages: Java (Adv), Kotlin, Python, Scala\nCloud: AWS (Certified), Firebase\nDBs: MySQL, PostgreSQL, MongoDB\nTools: Spring Boot, JUnit, Jetpack Compose, REST APIs, Git" },
      projects:{ keywords: ['project','work','development','built'],                       response: "1. Chat App (Kotlin/Firebase)\n2. Hate Speech (AWS BiLSTM 83%)\n3. Salary Prediction (ML 91%)\n4. DSA Visualizer (Java)\n5. Visitor Mgmt (Java/MySQL)", links: { GitHub: 'https://github.com/priyanshu1512' } },
      certs:   { keywords: ['certificate','certification','aws','certified'],              response: "1. AWS Certified Cloud Practitioner\n2. Generative AI Prompt Engineering (Google)\n3. Algorithmic Toolbox (Coursera)" },
      contact: { keywords: ['reach','contact','email','phone','connect'],                  response: "Email: priyanshuojha485@gmail.com\nPhone: +91 9041989443", links: { LinkedIn: 'https://www.linkedin.com/in/priyanshu-kumar-ojha/', LeetCode: 'https://leetcode.com/priyanshuplays/' } },
      leet:    { keywords: ['achievement','contest','award','leetcode','coding'],          response: "250+ LeetCode problems solved, Rating 1775+, Top 10% globally. AWHO Scholarship for academic excellence." }
    },
    default: { response: "I can answer about Priyanshu's skills, experience, projects, education, or contact info!" }
  };
  function findResponse(msg) {
    const m = msg.toLowerCase();
    for (const k in faqDB.keywords) { const it = faqDB.keywords[k]; if (it.keywords.some(kw => m.includes(kw))) return { response: it.response, links: it.links||{} }; }
    return faqDB.default;
  }
  function appendMsg(sender, text, links={}) {
    const d = document.createElement('div'); d.className = `message ${sender}`;
    d.innerHTML = text.replace(/\n/g,'<br>');
    if (Object.keys(links).length) {
      const ld = document.createElement('div'); ld.style.cssText='margin-top:0.5rem;display:flex;flex-wrap:wrap;gap:0.4rem;';
      Object.entries(links).forEach(([t,u]) => { const a=document.createElement('a'); a.href=u; a.textContent=t; a.target='_blank'; a.style.cssText='font-size:0.78rem;color:var(--primary);text-decoration:underline;'; ld.appendChild(a); });
      d.appendChild(ld);
    }
    chatMessages.appendChild(d); chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  function processMsg() {
    const msg = userInput.value.trim(); if (!msg) return;
    appendMsg('user', msg); userInput.value='';
    setTimeout(() => { const r = findResponse(msg); appendMsg('bot', r.response, r.links||{}); }, 400);
  }
  if (sendMessageBtn) sendMessageBtn.addEventListener('click', processMsg);
  if (userInput) userInput.addEventListener('keypress', e => { if (e.key==='Enter') processMsg(); });
  if (chatIcon) chatIcon.addEventListener('click', () => { chatBox.style.display = chatBox.style.display==='flex'?'none':'flex'; });
  if (minimizeChat) minimizeChat.addEventListener('click', () => chatBox.style.display='none');

});

// ── MODALS ─────────────────────────────────────────────────────────────────
function showProjectDetails(id) {
  const data = {
    'journey-junction': { title:'DSA Visualizer (Java)', desc:`<div class="project-modal-content"><h3>Overview</h3><p>Visual tool for data structures and algorithms.</p><h3>Features</h3><div class="feature-section"><h4>Data Structures</h4><ul><li>Stack, Queue, Array, BST</li></ul><h4>Sorting</h4><ul><li>Bubble, Insertion, Selection, Merge Sort</li></ul><h4>Graphs</h4><ul><li>DFS, BFS, Dijkstra</li></ul></div><h3>Tech</h3><p>Java, AWT, Swing</p></div>` },
    'salarypridiction': { title:'Salary Prediction (ML)', desc:`<div class="project-modal-content"><h3>Overview</h3><p>ML web app — 91% accuracy real-time salary prediction.</p><h3>Models</h3><ul><li>Linear Regression</li><li>Decision Trees</li><li>Random Forest (best)</li></ul><h3>Tech</h3><p>Python, Streamlit, Scikit-learn, Pandas</p></div>` },
    'hate-speech':      { title:'Hate Speech Recognition', desc:`<div class="project-modal-content"><h3>Overview</h3><p>Serverless ML pipeline — 83% accuracy across 6 categories.</p><h3>Highlights</h3><ul><li>BiLSTM neural network</li><li>1000+ MAU, &lt;500ms latency</li><li>40% cloud cost reduction</li></ul><h3>Tech</h3><p>Python, TensorFlow, AWS SageMaker, Lambda, S3</p></div>` },
    'Chatterly':        { title:'Chatterly – Chat App', desc:`<div class="project-modal-content"><h3>Overview</h3><p>Real-time chat, 99.5% uptime, 35% reduced latency.</p><h3>Features</h3><div class="feature-section"><h4>Auth</h4><ul><li>Firebase email/password</li></ul><h4>Messaging</h4><ul><li>Firestore real-time, media sharing</li></ul></div><h3>Tech</h3><p>Kotlin, Jetpack Compose, MVVM, Firebase</p></div>` },
    'news-app':         { title:'News Application', desc:`<div class="project-modal-content"><h3>Overview</h3><p>Real-time headlines with WorkManager push notifications.</p><h3>Features</h3><ul><li>Category filtering</li><li>Material Design 3 dark/light</li><li>MVVM + StateFlow</li></ul><h3>Tech</h3><p>Kotlin, Jetpack Compose, Retrofit, WorkManager</p></div>` },
    'visitor-management':{ title:'Visitor Management System', desc:`<div class="project-modal-content"><h3>Overview</h3><p>75% faster check-in with QR scanning.</p><h3>Features</h3><ul><li>QR code gen & scan (ZXing)</li><li>Webcam photo capture</li><li>MySQL 99.9% integrity</li></ul><h3>Tech</h3><p>Java, Swing/AWT, MySQL, ZXing</p></div>` }
  };
  const p = data[id]; if (!p) return;
  document.getElementById('modal-details').innerHTML = `<h2>${p.title}</h2>${p.desc}`;
  const modal = document.getElementById('modal');
  modal.style.display = 'flex';
  setTimeout(() => modal.classList.add('active'), 10);
}
function showCertificationDetails(id) {
  const data = {
    'aws-cloud-practitioner': { title:'AWS Certified Cloud Practitioner', desc:'Foundational AWS certification — services, architecture, security, pricing.', link:'https://www.credly.com/badges/315ef25b-aaf1-4d33-ab46-0f6ffa117742/public_url' },
    'generative-ai':           { title:'Generative AI: Prompt Engineering', desc:'Advanced prompt engineering certification from Google Cloud.', link:'https://www.cloudskillsboost.google/public_profiles/8da9507c-bba1-4443-8d44-a4d6d56ebc42' },
    'algorithmic-toolbox':     { title:'Algorithmic Toolbox – Coursera', desc:'Greedy algorithms, divide & conquer, dynamic programming.', link:'https://www.coursera.org/account/accomplishments/verify/G22DHB7GPUAH' }
  };
  const c = data[id]; if (!c) return;
  document.getElementById('modal-details').innerHTML = `<h2>${c.title}</h2><p>${c.desc}</p><a href="${c.link}" target="_blank">View Certificate →</a>`;
  const modal = document.getElementById('modal');
  modal.style.display = 'flex';
  setTimeout(() => modal.classList.add('active'), 10);
}
function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
  setTimeout(() => modal.style.display='none', 300);
}
document.addEventListener('click', e => { const m = document.getElementById('modal'); if (e.target===m) closeModal(); });


/* =========================================================================
   RACING TRACK — Porsche 911 scroll indicator
   Subtle 62vh centred strip, fades at ends. Only on screens > 1280px.
   ========================================================================= */
(function () {
  'use strict';
  if (window.innerWidth <= 1280) return;

  const SECTIONS = [
    { id: 'home',           label: 'Start'    },
    { id: 'about',          label: 'About'    },
    { id: 'experience',     label: 'XP'       },
    { id: 'skills',         label: 'Skills'   },
    { id: 'projects',       label: 'Projects' },
    { id: 'certifications', label: 'Certs'    },
    { id: 'leetcode',       label: 'LeetCode' },
    { id: 'contact',        label: 'Contact'  },
  ];

  const wrap  = document.getElementById('rt-wrap');
  const carEl = document.getElementById('rt-car');
  if (!wrap || !carEl) return;

  const TRACK_H_FRAC = 0.62;  // matches CSS 62vh
  const PAD          = 0.08;  // 8% of track height at each end for fade

  // ── Build checkpoint nodes ────────────────────────────────────────
  SECTIONS.forEach(s => {
    const cp = document.createElement('div');
    cp.className = 'rt-cp';
    cp.id = 'rtcp-' + s.id;
    cp.setAttribute('data-label', s.label);
    cp.style.top = '50%';
    cp.addEventListener('click', () => {
      const t = document.getElementById(s.id);
      if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    wrap.appendChild(cp);
  });

  // ── Calculate track geometry ──────────────────────────────────────
  function trackGeometry() {
    const vh      = window.innerHeight;
    const trackH  = vh * TRACK_H_FRAC;    // px height of the track strip
    const padPx   = trackH * PAD;         // fade zone in px
    const usable  = trackH - padPx * 2;   // drawable range inside fades
    // Track top offset relative to viewport (it's centred at 50%)
    const trackTop = (vh - trackH) / 2;
    return { trackH, padPx, usable, trackTop };
  }

  // ── Position checkpoints ──────────────────────────────────────────
  function positionCheckpoints() {
    const totalH = document.documentElement.scrollHeight - window.innerHeight;
    const { trackH, padPx, usable } = trackGeometry();

    SECTIONS.forEach(s => {
      const el = document.getElementById(s.id);
      const cp = document.getElementById('rtcp-' + s.id);
      if (!el || !cp) return;
      const absTop = el.getBoundingClientRect().top + window.scrollY;
      const frac   = totalH > 0 ? Math.min(Math.max(absTop / totalH, 0), 1) : 0;
      // Position within the track element's own coordinate space
      cp.style.top = (padPx + frac * usable) + 'px';
    });
  }

  // ── Update car position + checkpoint states ───────────────────────
  let rafPending = false;

  function updateTrack() {
    const scrollY  = window.scrollY;
    const totalH   = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalH > 0 ? Math.min(Math.max(scrollY / totalH, 0), 1) : 0;
    const { trackH, padPx, usable } = trackGeometry();
    const carH = 60;

    // Car position inside #rt-wrap coordinate space
    const carTop = padPx + progress * usable - carH / 2;
    carEl.style.top = carTop + 'px';

    // Checkpoint states
    const totalScrollH = document.documentElement.scrollHeight - window.innerHeight;
    SECTIONS.forEach(s => {
      const el = document.getElementById(s.id);
      const cp = document.getElementById('rtcp-' + s.id);
      if (!el || !cp) return;
      const absTop = el.getBoundingClientRect().top + window.scrollY;
      const secFrac = totalScrollH > 0 ? absTop / totalScrollH : 0;
      const diff = progress - secFrac;
      cp.classList.toggle('active', Math.abs(diff) < 0.05);
      cp.classList.toggle('passed', diff > 0.05);
    });

    rafPending = false;
  }

  // ── Scroll direction + exhaust ────────────────────────────────────
  let lastY = window.scrollY, idleTimer = null, puffTimer = null;

  function onScroll() {
    if (!rafPending) { rafPending = true; requestAnimationFrame(updateTrack); }

    const delta = window.scrollY - lastY;
    lastY = window.scrollY;
    if (Math.abs(delta) < 1) return;

    carEl.classList.remove('idle', 'lean-u', 'lean-d');
    void carEl.offsetWidth;
    carEl.classList.add(delta < 0 ? 'lean-u' : 'lean-d');

    if (!puffTimer) puffTimer = setInterval(spawnPuff, 90);
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      carEl.classList.remove('lean-u', 'lean-d');
      carEl.classList.add('idle');
      clearInterval(puffTimer); puffTimer = null;
    }, 220);
  }

  // ── Exhaust puff particles ────────────────────────────────────────
  function spawnPuff() {
    if (!wrap) return;
    const carTop = parseFloat(carEl.style.top) || 0;
    const p = document.createElement('div');
    p.className = 'rt-puff';
    p.style.top = (carTop + 64 + Math.random() * 5) + 'px';
    p.style.setProperty('--dx', (Math.random() * 10 - 5) + 'px');
    wrap.appendChild(p);
    setTimeout(() => p.remove(), 580);
  }

  // ── Init ──────────────────────────────────────────────────────────
  requestAnimationFrame(() => {
    positionCheckpoints();
    carEl.classList.add('idle');
    updateTrack();
  });

  window.addEventListener('scroll',  onScroll, { passive: true });
  window.addEventListener('resize', () => {
    if (window.innerWidth <= 1280) { wrap.style.display = 'none'; return; }
    wrap.style.display = '';
    positionCheckpoints();
    updateTrack();
  }, { passive: true });

})();
