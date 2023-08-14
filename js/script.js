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
    navList.forEach((v) => {
      v.querySelector("a").classList.remove("active");
    });
    a.classList.add("active");
    showSection(a);
  });
});
