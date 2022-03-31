const result = document.querySelector(".result");

/*================ SET THE OPERATOR OF THE CALC ===================*/
var operator = "";
function basicOperator(char) {
  operator = char;
}
/*================ CHECK IF THE CARACTERES IS ALLOWED ===================*/
var allowedChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", '.'];
function isAllowed(string) {
  var isOk = 0;
  for (let i = 0; i < string.length; i++) {
    for (char of allowedChars) {
      if (string[i] == char) {
        isOk = isOk + 1
      }
    }
  }
  if (isOk == string.length && isOk != 0) {
    return true;
  }
  return false;
}

/*============= ON CLICK NUM OR OPERATOR BUTTONS PASS VALUE TO BEFORE AND NOW BUTTONS TO EXECUTE CALCULATE FUNCTION ====================*/
var valueBefore = "";
var valueNow = "";
function onClickButton() {

  switch (this.value) {
    case "+":
      valueBefore = parseFloat(result.value);
      basicOperator("+");
      result.value = result.value + this.value;
      valueNow = "";
      break;
    case "-":
      valueBefore = parseFloat(result.value);
      basicOperator("-");
      result.value = result.value + this.value;
      valueNow = "";
      break;
    case "*":
      valueBefore = parseFloat(result.value);
      basicOperator("*");
      result.value = result.value + this.value;
      valueNow = "";
      break;
    case "/":
      valueBefore = parseFloat(result.value);
      basicOperator("/");
      result.value = result.value + this.value;
      valueNow = "";
      break;
    default:
      if (isAllowed(this.value) == false && this.value != '') {
        alert('Número ou Operador deve ser informado corretamente!')
        return;
      }
      result.value = result.value + this.value;
      valueNow = valueNow + this.value;
      break;
  }
}
/*================ MAKE THE MATH ===================*/
function calculate() {
  if (isAllowed(result.value) == false) {
    result.value = '';
    return alert('Valor Incorreto!');
  }
  if (operator != "") {
    switch (operator) {
      case "+":
        result.value = parseFloat(valueBefore) + parseFloat(valueNow);
        break;
      case "-":
        result.value = parseFloat(valueBefore) - parseFloat(valueNow);
        break;
      case "*":
        result.value = parseFloat(valueBefore) * parseFloat(valueNow);
        break;
      case "/":
        result.value = parseFloat(valueBefore) / parseFloat(valueNow);
        break;
    }
    basicOperator("");
    return;
  }
  alert('Sem nenhum operador registrado!')
  result.value = result.value;
}
/*================ EXECUTE THE LISTENER ===================*/
const calc = document.querySelectorAll(".btn");
calc.forEach((element) => {
  element.addEventListener("click", onClickButton);
});
