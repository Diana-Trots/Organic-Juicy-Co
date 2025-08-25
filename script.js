/// меню для мобильной версии
const menuIcon = document.querySelector(".menu-icon");
const header = document.querySelector(".header");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("menu-icon--active");
  header.classList.toggle("header--mobile");
});

/// слайдер со стрелками
const sliderArrows = document.querySelector(".slider-arrows");
const slidesArrows = sliderArrows.querySelectorAll(".slider-arrows__item");
const prev = sliderArrows.querySelector(".slider-arrows__arrow--left");
const next = sliderArrows.querySelector(".slider-arrows__arrow--right");

let slideIndex = 1;

prev.addEventListener("click", () => showSlideArrow(-1));
next.addEventListener("click", () => showSlideArrow(1));

function showSlideArrow(n) {
  slideIndex += n;
  if (slideIndex < 0) {
    slideIndex = slidesArrows.length - 1;
  }
  if (slideIndex === slidesArrows.length) {
    slideIndex = 0;
  }
  slidesArrows.forEach((item) => item.classList.add("hide"));
  slidesArrows[slideIndex].classList.remove("hide");
}

setInterval(() => {
  showSlideArrow(+1);
}, 10000);

/// слайдер с точками
const sliderDots = document.querySelector(".slider-dots");
const slidesDots = sliderDots.querySelectorAll(".slider-dots__item");
const wrapperDots = sliderDots.querySelector(".slider-dots__nav");

const dots = [];
let count = 0;

for (let i = 0; i < slidesDots.length; i++) {
  const dot = document.createElement("button");
  dot.classList.add("slider-dots__nav-item");
  if (i === 0) {
    dot.classList.add("slider-dots__nav-item--active");
  }
  dot.addEventListener("click", () => showSlideDots(i));
  wrapperDots.append(dot);
  dots.push(dot);
}

function showSlideDots(n = -1) {
  if (n === -1) {
    n = count + 1;
    if (n === slidesDots.length) {
      n = 0;
    }
  }
  slidesDots.forEach((item) => item.classList.add("hide"));
  slidesDots[n].classList.remove("hide");
  dots.forEach((dot) => dot.classList.remove("slider-dots__nav-item--active"));
  dots[n].classList.add("slider-dots__nav-item--active");
  count = n;
}

setInterval(() => {
  showSlideDots();
}, 15000);
