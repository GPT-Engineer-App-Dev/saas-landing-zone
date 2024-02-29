const carousel = document.getElementById("carousel");
const slides = carousel.querySelectorAll("div[whitespace-nowrap] > div");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const indicators = carousel.querySelectorAll(".carousel-indicator");
let currentIndex = 0;

function updateCarousel() {
  const newTransform = `translateX(-${currentIndex * 100}%)`;
  carousel.querySelector("div[whitespace-nowrap]").style.transform = newTransform;
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("bg-blue-600", index === currentIndex);
  });
}

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

updateCarousel();
