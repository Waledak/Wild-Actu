//dark mode
function switchTheme(event){
  const cards = document.querySelectorAll('.card-container');
  let textTheme = document.getElementById("textTheme");
  if (event.target.checked){
    document.documentElement.setAttribute('data-theme','dark');
    textTheme.style.marginLeft = "0.5rem";
    textTheme.innerHTML = "Light";
    cards.forEach(card => card.style.boxShadow = "none");
  }else{
    document.documentElement.setAttribute('data-theme','light');
    textTheme.style.marginLeft = "2.8rem";
    textTheme.innerHTML = "Dark";
    cards.forEach(card => card.style.boxShadow = "8px 8px 2px 1px rgba(0, 0, 255, 0.2)");
  }
}
const getCheckThemeId = document.querySelector("#dark");
getCheckThemeId.addEventListener('change', switchTheme,false);
//navbar
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const auteurArticle = document.querySelector('.linkArticle');
hamburger.addEventListener('click', () =>{
  const nav = document.querySelector("nav");
  navLinks.classList.toggle("open");
  hamburger.classList.toggle('hamburger-click');
});

/*----ProgressBar----*/
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 25);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
};