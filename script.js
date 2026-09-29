// 1. Guardar en variables los elementos que necesitamos
const contador = document.querySelector("#contador");
const botonSumar = document.querySelector("#btn-sumar");
const botonTema = document.querySelector("#btn-tema");

// 2. Una variable para llevar la cuenta
let cantidad = 0;

// 3. Qué hacer cuando se pulsa el botón de sumar
botonSumar.addEventListener("click", function () {
  cantidad = cantidad + 1;
  contador.textContent = cantidad;
});

// 4. Qué hacer cuando se pulsa el botón de tema
botonTema.addEventListener("click", function () {
  document.body.classList.toggle("oscuro");
});
