const track = document.getElementById("carouselTrack");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let position = 0;

function getMoveAmount() {
  const card = document.querySelector(".info-card");
  const gap = 18;

  return card.offsetWidth + gap;
}

nextBtn.addEventListener("click", () => {
  const cards = document.querySelectorAll(".info-card");
  const visibleCards = window.innerWidth <= 800 ? 1 : 2;
  const maxPosition = cards.length - visibleCards;

  if (position < maxPosition) {
    position++;
  } else {
    position = 0;
  }

  track.style.transform = `translateX(-${position * getMoveAmount()}px)`;
});

prevBtn.addEventListener("click", () => {
  const cards = document.querySelectorAll(".info-card");
  const visibleCards = window.innerWidth <= 800 ? 1 : 2;
  const maxPosition = cards.length - visibleCards;

  if (position > 0) {
    position--;
  } else {
    position = maxPosition;
  }

  track.style.transform = `translateX(-${position * getMoveAmount()}px)`;
});

const introLoader = document.getElementById("introLoader");

window.addEventListener("load", () => {
  setTimeout(() => {
    introLoader.classList.add("hide");

    setTimeout(() => {
      introLoader.remove();
    }, 900);
  }, 2300);
});