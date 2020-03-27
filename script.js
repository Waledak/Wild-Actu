// active ou désactive le dark mode et enlève et remet certaine box shadow
const cards = document.querySelectorAll('.card-container');
let textTheme = document.getElementById("textTheme");
function switchTheme(event){
  if (event.target.checked){
    document.documentElement.setAttribute('data-theme','dark');
    textTheme.style.marginLeft = "0.5rem";
    textTheme.innerHTML = "Light";
    cards.forEach(card => card.style.boxShadow = "none");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    textTheme.style.marginLeft = "2.8rem";
    textTheme.innerHTML = "Dark";
    cards.forEach(card => card.style.boxShadow = "8px 8px 2px 1px rgba(0, 0, 255, 0.2)");
  }
}
const getCheckThemeId = document.querySelector("#dark");
getCheckThemeId.addEventListener("change", switchTheme, false);
// permet d'afficher la navbar en cliquant le menu burger et de l'animer
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const auteurArticle = document.querySelector(".linkArticle");
hamburger.addEventListener("click", () => {
  const nav = document.querySelector("nav");
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("hamburger-click");
});
//implémentation de la date
var now = new Date();
var months = new Array(
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12"
);
var date = (now.getDate() < 10 ? "0" : "") + now.getDate();
function fourdigits(number) {
  return number < 1000 ? number + 1900 : number;
}
today = date + "/" + months[now.getMonth()] + "/" + fourdigits(now.getYear());
document.querySelector("#date").innerHTML = today;
/*----ProgressBar----*/
/*function updateProgress = (event) => {
  if(event.target.value !== "") {
    progObj[event.target.value.champ1] = true;
  } else {
    progObj[event.target.value.champ1] = false;
  }
  let progress = 0;
  for(field in progObj) {

  }
  document.getElementById("myBar").style.width = 33%
}
function updateProgress = (event) => {
  if(event.target.value !== "") {
    progObj[event.target.value.champ2] = true;
  } else {
    progObj[event.target.value.champ2] = false;
  }
  let progress = 0;
  for(field in progObj) {

  }
  document.getElementById("myBar").style.width = 33%
}
function updateProgress = (event) => {
  if(event.target.value !== "") {
    progObj[event.target.value.champ3] = true;
  } else {
    progObj[event.target.value.champ3] = false;
  }
  let progress = 0;
  for(field in progObj) {

  }
  document.getElementById("myBar").style.width = 34%
}*/
