const btnMenu = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

btnMenu.addEventListener("click", function () {
  nav.classList.toggle("menu-open");
});
