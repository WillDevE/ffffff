document.addEventListener('DOMContentLoaded', function () {
    particlesJS('particles-js', {
      particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: '#FFFFFF' },
        shape: { type: 'circle', stroke: { width: 0, color: '#000000' }, polygon: { nb_sides: 5 }, image: { src: 'img/github.svg', width: 100, height: 100 } },
        opacity: { value: 0.7, random: true, anim: { enable: true, speed: 0.2, opacity_min: 0.1, sync: false } },
        size: { value: 5, random: true, anim: { enable: false, speed: 10, size_min: 0.1, sync: false } },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#FFFFFF',
          opacity: 0.4,
          width: 0.1
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'repulse' },
          onclick: { enable: false, mode: 'push' },
          resize: true
        },
        modes: { grab: { distance: 200, line_linked: { opacity: 1 } }, bubble: { distance: 200, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
      },
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
});

