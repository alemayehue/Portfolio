document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

function setupScrollLogic() {
  const maxScroll = () =>
    document.documentElement.scrollHeight - document.documentElement.clientHeight;

  function handleParallax() {
    const scrollTop = window.scrollY;
    const headshot = document.querySelector('.headshot');
    if (headshot) {
      const parallaxSpeed = 0.5;
      const yPos = -(scrollTop * parallaxSpeed);
      headshot.style.transform = `translateY(${yPos}px)`;
    }
  }

  function enforceScrollLimits() {
    const scrollTop = window.scrollY;
    const max = maxScroll();

    if (scrollTop <= 0.5) {
      window.scrollTo(0, 0);
    } else if (scrollTop >= max - 0.5) {
      window.scrollTo(0, max);
    }
  }

  function handleScroll() {
    enforceScrollLimits();
    handleParallax();
  }

  function handleWheel(e) {
    const scrollTop = window.scrollY;
    const max = maxScroll();
    if ((e.deltaY < 0 && scrollTop <= 0) || (e.deltaY > 0 && scrollTop >= max)) {
      e.preventDefault();
    }
  }

  let startY = 0;
  function handleTouchStart(e) {
    startY = e.touches[0].clientY;
  }

  function handleTouchMove(e) {
    const currentY = e.touches[0].clientY;
    const deltaY = startY - currentY;
    const scrollTop = window.scrollY;
    const max = maxScroll();

    if ((deltaY < 0 && scrollTop <= 0) || (deltaY > 0 && scrollTop >= max)) {
      e.preventDefault();
    }
  }

  function handleKeyDown(e) {
    const scrollTop = window.scrollY;
    const max = maxScroll();
    const keys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', ' '];

    if (
      keys.includes(e.key) &&
      ((scrollTop <= 0 && ['ArrowUp', 'PageUp'].includes(e.key)) ||
        (scrollTop >= max && ['ArrowDown', 'PageDown', ' '].includes(e.key)))
    ) {
      e.preventDefault();
    }
  }

  // Add event listeners
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('wheel', handleWheel, { passive: false });
  document.addEventListener('touchstart', handleTouchStart, { passive: false });
  document.addEventListener('touchmove', handleTouchMove, { passive: false });
  document.addEventListener('keydown', handleKeyDown, { passive: false });

  // Force scroll to top on load
  window.scrollTo(0, 0);
}

function setupTransitions() {
  const links = document.querySelectorAll('.transition-link');
  const overlay = document.getElementById('transitionOverlay');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetUrl = this.getAttribute('href');
      overlay.classList.add('active');
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 600);
    });
  });
}

// DOM setup
document.addEventListener('DOMContentLoaded', () => {
  setupScrollLogic();
});

// Page fully loaded
window.addEventListener('load', () => {
  setupTransitions();
  document.body.classList.add('loaded');
});
