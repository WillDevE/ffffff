document.addEventListener('DOMContentLoaded', function () {
  particlesJS('particles-js', {
      particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: '#FFFFFF' },
          shape: { type: 'circle' },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          line_linked: { enable: false },
          move: {
              enable: true,
              speed: 0.2,
              direction: 'top',
              random: true,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: { enable: false }
          }
      },
      interactivity: {
          detect_on: 'canvas',
          events: {
              onhover: { enable: false },
              onclick: { enable: false },
              resize: true
          }
      },
      retina_detect: true
  });
    const navbar = document.querySelector('.navbar');
    const body = document.querySelector('body');
    const navbarPlaceholder = document.querySelector('.navbar-placeholder');

    navbar.addEventListener('mouseover', function () {
        body.classList.add('navbar-displayed');
    });

    navbar.addEventListener('mouseout', function () {
        body.classList.remove('navbar-displayed');
    });

    // Add touch events for mobile interaction
    navbarPlaceholder.addEventListener('touchstart', function () {
        body.classList.add('navbar-displayed');
    });

    body.addEventListener('touchstart', function (event) {
        if (!navbar.contains(event.target) && !navbarPlaceholder.contains(event.target)) {
            body.classList.remove('navbar-displayed');
        }
    });
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
      });
    });
});