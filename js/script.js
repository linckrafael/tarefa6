const buyButtons = document.querySelectorAll(".square-button");

const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const closeModalButton = document.querySelector("#close-modal");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

buyButtons.forEach((button) => {
  button.addEventListener("click", () => toggleModal());
});

closeModalButton.addEventListener("click", () => toggleModal());

fade.addEventListener("click", () => toggleModal());
