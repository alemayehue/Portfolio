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


  function handleParallax(scrollTop) {
    if (headshot) {
      const parallaxSpeed = 0.5;
      const yPos = -(scrollTop * parallaxSpeed);
      
      // Apply parallax with scale 1
      headshot.style.transform = `translateY(${yPos}px) scale(1)`;
    }
  }


  function update() {
    const scrollTop = window.scrollY;
    const deltaY = scrollTop - lastScrollY;

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
