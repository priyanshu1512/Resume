document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is ready!');
});

function showProjectDetails(projectId) {
    const projectDetails = {
        'journey-junction': {
            title: 'Journey Junction',
            description: 'Graph Representation of Flight Routes. Graph Algorithms for Route Optimization: Dijkstra’s algorithm to find the shortest route between two locations for a plane.'
        },
        'sustainagrow': {
            title: 'SustainaGrow',
            description: 'Integrated IoT sensors seamlessly with AWS services including S3, SNS, CloudWatch, Lambda, and Quick Sight. Enabled real-time data analysis and proactive alerts for farmers, enhancing decision-making capabilities.'
        },
        'towtechsol': {
            title: 'TowTechSol',
            description: 'Kotlin Application for roadside assistance, enabling users to find nearby service stations, request help, and facilitate fuel delivery. Implemented real-time location tracking using GPS and integrated communication features.'
        }
    };

    const project = projectDetails[projectId];
   
  if (project) {
        const modalDetails = document.getElementById('modal-details');
        const modal = document.getElementById('modal');
        const modalContent = modal.querySelector('.modal-content');
        
        modalDetails.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
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
    const themeToggleBtn = document.getElementById('theme-toggle');
    themeToggleBtn.addEventListener('click', function () {
        document.body.classList.toggle('dark-theme');

        // Toggle dark theme for all sections
        document.querySelectorAll('header, #home, #about, #skills, #projects, #contact, footer, .btn, nav ul li a, h2, .intro, .skills-table, .project-box, .certification-box, .clickable-icon, .certification').forEach(element => {
            element.classList.toggle('dark-theme');
        });
    });
});
