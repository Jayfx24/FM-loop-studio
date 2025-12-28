const openMenu = document.getElementById("open-nav");
const closeMenu = document.getElementById("close-nav");
const navOverlay = document.querySelector(".nav__overlay");
const navExtras = document.querySelector(".nav__extras");

function handleMenu() {
  

  openMenu.classList.toggle("hide");
  navOverlay.classList.toggle("mobile-overlay");
  navExtras.classList.toggle("hide");
}

openMenu.addEventListener("click", handleMenu);
closeMenu.addEventListener("click", handleMenu);
