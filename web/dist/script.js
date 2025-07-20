document.addEventListener('DOMContentLoaded', function () {
    const maxScroll = () => document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // Parallax effect for the image
    function handleParallax() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const headshot = document.querySelector('.headshot');
      
      if (headshot) {
        // Move image slower than scroll (0.5 = half speed, 0.3 = 30% speed, etc.)
        const parallaxSpeed = 0.5; // Adjust this value to control parallax intensity
        const yPos = -(scrollTop * parallaxSpeed);
        headshot.style.transform = `translateY(${yPos}px)`;
      }
    }

    // Clamp scroll on scroll event
    function enforceScrollLimits() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const max = maxScroll();

      if (scrollTop <= 0) {
        window.scrollTo(0, 0);
      } else if (scrollTop >= max) {
        window.scrollTo(0, max);
      }
    }

    // Combined scroll handler
    function handleScroll() {
      enforceScrollLimits();
      handleParallax();
    }

    // Wheel: desktop scroll
    function handleWheel(e) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const max = maxScroll();

      if ((e.deltaY < 0 && scrollTop <= 0) || (e.deltaY > 0 && scrollTop >= max)) {
        e.preventDefault();
      }
    }

    // Touch: mobile scroll
    let startY = 0;
    function handleTouchStart(e) {
      startY = e.touches[0].clientY;
    }

    function handleTouchMove(e) {
      const currentY = e.touches[0].clientY;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const max = maxScroll();
      const deltaY = startY - currentY;

      if ((deltaY < 0 && scrollTop <= 0) || (deltaY > 0 && scrollTop >= max)) {
        e.preventDefault();
      }
    }

    // Key scroll: arrows, page up/down
    function handleKeyDown(e) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const max = maxScroll();
      const keys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', ' '];

      if (
        keys.includes(e.key) &&
        ((scrollTop <= 0 && (e.key === 'ArrowUp' || e.key === 'PageUp')) ||
          (scrollTop >= max && (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ')))
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

    // Page transition overlay functionality
    const links = document.querySelectorAll('.transition-link');
    const overlay = document.getElementById('transitionOverlay');

    // On page load, trigger slide-up after a short delay
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetUrl = this.getAttribute('href');
            
            // Ensure overlay is visible and slide down
            overlay.style.top = '0';
            overlay.classList.add('active');
            
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 600); // Wait for overlay animation
        });
    });
  }); 