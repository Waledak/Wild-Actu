// partie checkform Alex
// const checkName = document.getElementsByClassName("checkform");

// document.querySelector("form").addEventListener("submit", e => {
//   check(e));
// }
const subBtn = document.getElementById("submitBtn");
subBtn.addEventListener("click", check);
function check(e) {
  let checkCount = 0;
  const inputsCollection = document.querySelectorAll(
    "#contact input, #contact textarea"
  );
  console.log(inputsCollection);
  for (let inputToTest of inputsCollection) {
    if (inputToTest.value === "") {
      checkCount++;
      e.preventDefault();
      swal({
        title: "Erreur !",
        text: "Un ou plusieurs champ(s) n'a pas été rempli !",
        icon: "error"
      });
    }
  }
  if (checkCount === 0) {
    e.preventDefault();
    swal({
      title: "Good job!",
      text: "Votre message a été envoyé !",
      icon: "success"
    });
  }
}
