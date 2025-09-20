document.addEventListener('DOMContentLoaded', function() {
  // Scroll to top when clicking the logo
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  setupScrollLogic();
});

window.addEventListener('load', () => {
  setupTransitions();
  document.body.classList.add('loaded');
});

/* -----------------------
   Scroll + Parallax Logic
------------------------ */
function setupScrollLogic() {
  const maxScroll = () =>
    document.documentElement.scrollHeight - document.documentElement.clientHeight;

  const headshot = document.querySelector('.headshot');
  const navbar = document.querySelector('.navbar');

  let ticking = false;
  let lastScrollY = window.scrollY;
  let isHidden = false;
  let upStreak = 0;
  let pageLoadTime = Date.now();


  function handleParallax(scrollTop) {
    if (headshot) {
      const parallaxSpeed = 0.5;
      const yPos = -(scrollTop * parallaxSpeed);
      // Apply parallax with current scale (starts at 1.3, animates to 1)
      const currentTime = Date.now();
      const elapsed = currentTime - pageLoadTime;
      const animationDuration = 2000; // 2 seconds
      
      if (elapsed < animationDuration) {
        // During zoom animation, interpolate between 1.3 and 1
        const progress = elapsed / animationDuration;
        const currentScale = 1.3 - (0.3 * progress);
        headshot.style.transform = `translateY(${yPos}px) scale(${currentScale})`;
      } else {
        // After animation, use normal scale
        headshot.style.transform = `translateY(${yPos}px) scale(1)`;
      }
    }
  }

  function enforceScrollLimits(scrollTop) {
    const max = maxScroll();
    if (scrollTop < 0) {
      window.scrollTo({ top: 0 });
    } else if (scrollTop > max) {
      window.scrollTo({ top: max });
    }
  }

  function update() {
    const scrollTop = window.scrollY;
    const deltaY = scrollTop - lastScrollY;

    enforceScrollLimits(scrollTop);
    handleParallax(scrollTop);

    lastScrollY = scrollTop;
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }

  // Attach listeners
  window.addEventListener('scroll', onScroll, { passive: true });

  // Prevent overscroll on wheel/touch/keys
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

  window.addEventListener('wheel', handleWheel, { passive: false });
  document.addEventListener('touchstart', handleTouchStart, { passive: false });
  document.addEventListener('touchmove', handleTouchMove, { passive: false });
  document.addEventListener('keydown', handleKeyDown, { passive: false });

  // Force scroll to top on load
  window.scrollTo(0, 0);
}

/* -----------------------
   Page Transitions
------------------------ */
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
