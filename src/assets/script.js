"use strict";
const header = document.querySelector("#header");
const logo = document.querySelector(".logo");

const intersection = new IntersectionObserver(resizeLogo, {
  threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
});
intersection.observe(header);

const resize = new ResizeObserver(resizeLogo);
resize.observe(header);

function cssSize(size) {
  return +size.slice(0, -2);
}

function resizeLogo() {
  let logoTop = 0 - cssSize(getComputedStyle(header).blockSize);
  let newTop = Math.min(logoTop + window.scrollY, 0);
  const narrow = getComputedStyle(logo.parentElement).flexDirection == "column";
  if (narrow) newTop = 0;
  logo.style.insetBlockStart = newTop + "px";
}

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  const link = card.querySelector("a");
  card.addEventListener("click", () => {
    link.click();
  });
  card.setAttribute("style", "cursor:pointer");
});
