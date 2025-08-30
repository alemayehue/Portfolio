let lastScrollY = window.scrollY;
const navbar = document.querySelector(".navbar");
let isHidden = false;
let upStreak = 0;
const upThreshold = 400; // Scroll up this many pixels in a row to show navbar
const alwaysShowTopPx = 100; // Always show navbar if scrollY is within this range

function handleNavbarScroll() {
  const currentScrollY = window.scrollY;
  const deltaY = currentScrollY - lastScrollY;

  // Always show navbar if near the top of page
  if (currentScrollY <= alwaysShowTopPx) {
    if (isHidden) {
      navbar.style.transform = "translateY(0)";
      isHidden = false;
    }
    upStreak = 0;
  } else {
    if (deltaY > 0) {
      // Scrolling down
      if (!isHidden) {
        navbar.style.transform = "translateY(-150%)";
        isHidden = true;
      }
      upStreak = 0; // Reset upward streak on any downward scroll
    } else if (deltaY < 0) {
      // Scrolling up
      upStreak += -deltaY; // deltaY negative, so add positive value

      if (isHidden && upStreak >= upThreshold) {
        navbar.style.transform = "translateY(0)";
        isHidden = false;
        upStreak = 0; // Reset after showing navbar
      }
    }
  }

  lastScrollY = currentScrollY;
}

window.addEventListener("scroll", handleNavbarScroll);
