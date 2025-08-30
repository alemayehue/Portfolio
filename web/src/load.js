window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  const minDuration = 1000; // minimum time in ms (1 second)
  const start = performance.now();

  function hideLoader() {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
      content.style.display = "block";
    }, 500); // fade-out duration
  }

  const elapsed = performance.now() - start;
  const remaining = minDuration - elapsed;

  if (remaining > 0) {
    setTimeout(hideLoader, remaining);
  } else {
    hideLoader();
  }
});
