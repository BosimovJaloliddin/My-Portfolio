// ==================== switcher toggle ================== //
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const styleSwitcher = document.querySelector(".style-switcher");

styleSwitcherToggle.addEventListener("click", () => {
  styleSwitcher.classList.toggle("open");
});

// hide style -switcher on scroll
window.addEventListener("scroll", () => {
  if (styleSwitcher.classList.contains("open")) {
    styleSwitcher.classList.toggle("open");
  }
});

// ==================== theme color ================== //

const altenateStyle = document.querySelectorAll(".alternate-style");

const setActiveStyle = (color) => {
  altenateStyle.forEach((value) => {
    color === value.getAttribute("title")
      ? value.removeAttribute("disabled")
      : value.setAttribute("disabled", true);
  });
};

// ==================== theme light and dark mode ================== //

const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
