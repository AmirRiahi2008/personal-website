"use strict";
const aboutMeEl = document.querySelector(".btn__about");
const contactMeEl = document.querySelector(".btn__contact");
const navEl = document.querySelector(".nav");
const headerEl = document.querySelector(".header");
aboutMeEl.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("sec1").scrollIntoView({ behavior: "smooth" });
});
contactMeEl.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
});

function stickyNavHandler(entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) navEl.classList.add("sticky__nav");
  else navEl.classList.remove("sticky__nav");
}

const observer = new IntersectionObserver(stickyNavHandler, {
  root: null,
  threshold: .85,
}).observe(headerEl);
