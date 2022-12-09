const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) =>
  window
    .getComputedStyle(element)
    .getPropertyValue(style)

const initialTheme = {
  // pick each element color
  bgPrimary: getStyle(html, "--bg-primary"),
  bgSecondary: getStyle(html, "--bg-secondary"),
  btnSecondary: getStyle(html, "--btn-secondary"),
  textColor: getStyle(html, "--text-color"),
  cardBackground: getStyle(html, "--card-background"),
  bgSecondaryTwo: getStyle(html, "--bg-secondary-two")
}

const lightMode = {
  bgPrimary: "#ffffff",
  bgSecondary: "#9b53ff",
  btnSecondary: "#ffffff",
  textColor: "#111111",
  cardBackground: "#111111",
  bgSecondaryTwo: "#f4f4f4"
}

const transformKey = key => 
  "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

  const changeColors = (colors) => {
    Object.keys(colors).map(key => 
      html.style.setProperty(transformKey(key), colors[key]) 
    )
  }
  
  checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(lightMode) : changeColors(initialTheme)
  })

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
