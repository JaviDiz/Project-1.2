// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation')

    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
  }, false)
}())


// Validación
export default function validateGameForm() {
  const elements = document.getElementById("frm-game").elements;

  for (let e of elements) {
      if ((e.type === "text" || e.type === "date" || e.type === "number") &&
           e.value === "") {
               alert ("Rellena campos")
               return false;
      }
  }
  let pegi = Number.parseInt(document.querySelector("#game_pegi").value, 10);
  if (!Number.isInteger(pegi) || pegi > 18) {
      return false;
  }
  if (!Number.isInteger(pegi) || pegi != 3 && pegi != 7 && pegi != 12 && pegi != 16 && pegi != 18){
    alert("Los valores permitidos en pegi son 3,7,12,16 y 18");
    return false;
  } 
  return true;
}
