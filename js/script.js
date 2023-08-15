// ===================== Typeing animation ====================== //
var typed = new Typed(".typing", {
  strings: ["Web Developer", "Frontend Developer"],
  typeSpeed: 300,
  BackSpeed: 65,
  loop: true,
});

// ===================== Aside ====================== //
const nav = document.querySelector(".nav");
const navList = document.querySelectorAll("li");
const totalNavList = navList.length;
const sections = document.querySelectorAll("section");

const showSection = (element) => {
  let target = element.getAttribute("href").slice(1);

  sections.forEach((v) => {
    v.getAttribute("id") === target
      ? v.classList.add("active")
      : v.classList.remove("active");
  });
  document.querySelector("#" + target).classList.add("active");
};

navList.forEach((v) => {
  const a = v.querySelector("a");

  a.addEventListener("click", () => {
    sections.forEach((v) => {
      v.classList.remove("back-section");
    });

    navList.forEach((v, i) => {
      if (v.querySelector("a").classList.contains("active")) {
        sections[i].classList.add("back-section");
      }
      v.querySelector("a").classList.remove("active");
    });
    a.classList.add("active");

    showSection(a);
  });
});

// ===================== Aside toggler ====================== //
const navToggleBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

const asideSectionTogglerBtn = () => {
  aside.classList.toggle("open");
  navToggleBtn.classList.toggle("open");
  sections.forEach((v) => {
    v.classList.toggle("open");
  });
};

navToggleBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});
