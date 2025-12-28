const openMenu = document.getElementById("open-nav");
const closeMenu = document.getElementById("close-nav");
const navOverlay = document.querySelector(".nav__overlay");
const navList = document.querySelector(".nav__list");
const navExtras = document.querySelector(".nav__extras");



function handleOpen(e){
    const target = e.currentTarget;

    target.classList.add('hide');
    navOverlay.classList.add('mobile-overlay');
    navExtras.classList.toggle('hide')

}