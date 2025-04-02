const buttons = document.querySelector(".btn-container");
const allEvents = document.querySelector(".all-events");
const heroTitle = document.querySelector(".hero-title");

buttons.addEventListener("click", onClick);

function checkVisibility() {
  const rect = heroTitle.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    heroTitle.classList.add("visible");
  }
}

window.addEventListener("scroll", checkVisibility);
window.addEventListener("load", checkVisibility);

function onClick(event) {
  const currentEvent = event.target.dataset.target;
  allEvents.querySelectorAll(".event").forEach((div) => {
    div.classList.add("visually-hidden");
  });

  buttons.querySelectorAll(".events-btn").forEach((item) => {
    item.classList.replace("is-active", "not-active");
  });

  console.log(buttons.querySelectorAll(".event"));

  allEvents
    .querySelector(`.${currentEvent}`)
    .classList.remove("visually-hidden");

  event.target.classList.replace("not-active", "is-active");
  console.log(event.target.classList);
}
