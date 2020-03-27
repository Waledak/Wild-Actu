// partie checkform Alex
// const checkName = document.getElementsByClassName("checkform");

// document.querySelector("form").addEventListener("submit", e => {
//   check(e));
// }
const subBtn = document
  .getElementById("submitBtn")
  .addEventListener("click", check);
function check(e) {
  const inputsCollection = document.querySelectorAll(
    "#contact input, #contact textarea"
  );
  console.log(inputsCollection);
  for (let inputToTest of inputsCollection) {
    if (inputToTest.value === "") {
      e.preventDefault();
      alert(`Erreur : le champ ${inputToTest.name} n'a pas été rempli`);
    }
  }
}
function validate() {
  var email = document.getElementByName("Email");
  if (checkEmail(email)) {
    alert("Adresse e-mail valide");
  } else {
    alert("Adresse e-mail non valide");
  }
  return false;
}