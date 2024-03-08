const closeModalButton = document.querySelector(".clouse-modal");
const bgModal = document.querySelector(".bg-modal");
const modal = document.querySelector(".modal-obrigado");

const toggleModal = () => {
  [modal, bgModal].forEach((el) => el.classList.toggle("hide"));
};

[closeModalButton, bgModal].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});
