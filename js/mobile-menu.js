const menuOverlay = document.querySelector(".menu-container__overlay");
const closeMenuButton = document.querySelector(".menu-container__button-close");
const openMenuBtn = document.querySelector(".menu-container__button-open");

openMenuBtn.addEventListener("click", (e) => {
  menuOverlay.classList.remove("d-none");
});

closeMenuButton.addEventListener("click", (e) => {
  menuOverlay.classList.add("d-none");
});
