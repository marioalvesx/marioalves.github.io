const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) =>
  window
    .getComputedStyle(element)
    .getPropertyValue(style)

const initialTheme = {
  // pick each element color
  // bg: getStyle(html, "--bg"),
}

const lightMode = {
  // bgPrimary: "#ffffff"
  // primaryColor: #9b53ff;
  //   --secondary-color: #8a3cf8;
  //   --bg-primary: #ffffff;
  //   --text-color: #000000;
  //   --text-color-two: #222222;
  //   --bg-secondary: #ffffff;
  //   --card-background: #201b2c;
  //   --bg-secondary-two: #f4f4f4;
  //   --shadow: 0px 10px 40px -12px #a600ff77;
}

const changeColors = (colors) => {
  // ...
}

// Source https://gist.github.com/maykbrito/f3744039fcc20db62d6cfd502aa2bc86

// Hamburguer activate
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when any link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
