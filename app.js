const hamburgerMenu = document.querySelector(".nav__hamburger-menu");
const navMenu = document.querySelector(".nav__menu");
const nav = document.querySelector("#nav");
const body = document.querySelector("body");
const navLink = document.querySelectorAll(".nav__link");

hamburgerMenu.addEventListener("click", function() {
  hamburgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
  nav.classList.toggle("active");
})

for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", function() {
    hamburgerMenu.classList.remove("active");
    navMenu.classList.remove("active");
    nav.classList.remove("active");
  })
  
}