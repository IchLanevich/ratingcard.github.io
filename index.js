const ratingLabels = document.querySelectorAll(".rating-label");
const yourRating = document.querySelector(".your-rating");
const form = document.getElementById("form");
const thanksCard = document.getElementById("thanksCard");

ratingLabels.forEach((label) => {
  label.addEventListener("click", (e) => {
    let target = e.target;
    ratingLabels.forEach((label) => {
      label.classList.remove("selected-rating");
    });
    target.classList.add("selected-rating");
    yourRating.innerText = target.innerText;
  });
});

form.addEventListener("submit", (e) => {
  if (yourRating.innerText !== "") {
    form.classList.add("hidden");
    thanksCard.classList.remove("hidden");
    e.preventDefault();
  }
});
