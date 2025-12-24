// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active navigation link
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // Mobile Swiper
    if (window.innerWidth <= 768) {
        new Swiper('.projectsSwiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    // Toggle certifications
    const toggleCerts = document.getElementById('toggleCerts');
    const hiddenCerts = document.querySelectorAll('.hidden-cert');
    let certsVisible = false;

    toggleCerts.addEventListener('click', function() {
        certsVisible = !certsVisible;
        hiddenCerts.forEach(cert => {
            cert.style.display = certsVisible ? 'block' : 'none';
        });
        this.innerHTML = certsVisible ? 
            '<i class="fas fa-chevron-up"></i> Show Less' : 
            '<i class="fas fa-chevron-down"></i> Show All Certifications';
    });

    // Toggle skills
    const toggleSkills = document.getElementById('toggleSkills');
    const hiddenSkills = document.querySelectorAll('.hidden-skills');
    let skillsVisible = false;

    toggleSkills.addEventListener('click', function() {
        skillsVisible = !skillsVisible;
        hiddenSkills.forEach(skill => {
            skill.style.display = skillsVisible ? 'block' : 'none';
        });
        this.innerHTML = skillsVisible ? 
            '<i class="fas fa-chevron-up"></i> Show Less' : 
            '<i class="fas fa-chevron-down"></i> Show More Skills';
    });

    // Contact form
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        const mailtoLink = `mailto:aaarts45516@gmail.com?subject=${encodeURIComponent(subject || 'Message from Portfolio')}&body=${encodeURIComponent(message)}`;
        
        window.location.href = mailtoLink;
        
        // Clear form
        this.reset();
        
        // Show confirmation
        alert('Opening your email client with the message ready to send!');
    });
});







 const toggleProjects = document.getElementById('toggleProjects');
  const hiddenProjects = document.querySelectorAll('.hidden-project');
  let projectsVisible = false;

  toggleProjects.addEventListener('click', function() {
    projectsVisible = !projectsVisible;
    hiddenProjects.forEach(proj => {
      proj.style.display = projectsVisible ? 'block' : 'none';
    });
    this.innerHTML = projectsVisible
      ? '<i class="fas fa-chevron-up"></i> Show Less'
      : '<i class="fas fa-chevron-down"></i> Show All Projects';
  });


    var swiper = new Swiper('.projectsSwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  // animation

    particlesJS("particles-js", {
    "particles": {
      "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
      "color": { "value": "#60a5fa" },
      "shape": { "type": "circle" },
      "opacity": { "value": 0.4 },
      "size": { "value": 3, "random": true },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#60a5fa",
        "opacity": 0.2,
        "width": 1
      },
      "move": { "enable": true, "speed": 1.5, "direction": "none", "out_mode": "out" }
    },
    "interactivity": {
      "events": {
        "onhover": { "enable": true, "mode": "grab" },
        "onclick": { "enable": true, "mode": "push" },
        "resize": true
      },
      "modes": {
        "grab": { "distance": 140, "line_linked": { "opacity": 0.4 } },
        "push": { "particles_nb": 3 }
      }
    },
    "retina_detect": true
  });