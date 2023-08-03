// Selection of HTML objects
const navToggler = document.querySelector(".nav-toggler i");
const nav = document.querySelector(".nav");

// Defining a function
function toggleNav() {
  navToggler.classList.toggle("fa-bars");
  navToggler.classList.toggle("fa-times");
  nav.classList.toggle("nav-active");
}

// Calling the function after click event occurs
navToggler.addEventListener("click", function () {
  toggleNav();
});
