const home = document.getElementById("home");
const projects = document.getElementById("projects");

document.getElementById("goToProjects").addEventListener("click", () => {
  home.classList.remove("current");
  home.classList.add("hidden");
  projects.classList.remove("hidden");
  projects.classList.add("current");
});

document.getElementById("backToHome").addEventListener("click", () => {
  projects.classList.remove("current");
  projects.classList.add("hidden");
  home.classList.remove("hidden");
  home.classList.add("current");
});
