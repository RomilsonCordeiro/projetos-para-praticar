let numberImput = document.querySelector("#screenInput");
let buttonsTypeNumber = document.querySelectorAll(".btnTypeNumber");
let buttonsTypeOperator = document.querySelectorAll(".btnTypeOperator");
let buttonAllClear = document.querySelector("#btnAllClear");
let buttonClearEntity = document.querySelector("#btnClearEntity");
let buttonResultado = document.querySelector("#btnResultado");
let buttonDot = document.querySelector("#btnPonto");

/* Pega o valor de cada botão numerico e adiciona no input. */
buttonsTypeNumber.forEach((btnNum) => {
  btnNum.addEventListener("click", () => {
    numberImput.value += btnNum.textContent;
  });
});

buttonsTypeOperator.forEach((btnOperator) => {
  btnOperator.addEventListener("click", () => {
    numberImput.value += btnOperator.textContent;
  });
});

buttonAllClear.addEventListener("click", () => {
  numberImput.value = "";
});

buttonClearEntity.addEventListener("click", () => {
  numberImput.value = numberImput.value.slice(0, -1);
});

buttonDot.addEventListener("click", () => {
  numberImput.value += buttonDot.textContent;
});

buttonResultado.addEventListener("click", () => {
  try {
    numberImput.value = eval(numberImput.value);
  } catch {
    numberImput.value = "";
  }
});
