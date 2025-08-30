const items = document.querySelectorAll('.grid-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');   // fade in
    } else {
      entry.target.classList.remove('visible'); // fade out
    }
  });
}, { threshold: 0.8 });

items.forEach(item => observer.observe(item));
