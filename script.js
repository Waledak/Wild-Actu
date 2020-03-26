//dark mode
function switchTheme(event) {
  const cards = document.querySelectorAll(".card-container");
  let textTheme = document.getElementById("textTheme");
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    textTheme.style.marginLeft = "1rem";
    textTheme.innerHTML = "Dark";
    cards.forEach(card => (card.style.boxShadow = "none"));
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    textTheme.style.marginLeft = "3rem";
    textTheme.innerHTML = "Light";
    cards.forEach(
      card => (card.style.boxShadow = "8px 8px 2px 1px rgba(0, 0, 255, 0.2)")
    );
  }
}
const getCheckThemeId = document.querySelector("#dark");
// getCheckThemeId.addEventListener("change", switchTheme, false);
//navbar
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const auteurArticle = document.querySelector(".linkArticle");
// hamburger.addEventListener("click", () => {
//   const nav = document.querySelector("nav");
//   navLinks.classList.toggle("open");
//   hamburger.classList.toggle("hamburger-click");
// });
