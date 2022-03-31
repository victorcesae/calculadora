const result = document.querySelector(".result");

/*================ SET THE OPERATOR OF THE CALC ===================*/
var operator = "";
function basicOperator(char) {
  if (operator != '') {
    if ((char == '-' || char == '+') && (operator == '*' || char == '/')) {
      return 'mathWithNegatives'
    }
    operator = char;
    return 'hasOperator';
  }
  operator = char;
  return 'operatorAssigned';
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
      if (valueNow != '') {
        console.log(valueNow)
        calculate()
        valueNow = "";
      }
      if (basicOperator("+") == 'hasOperator') {
        result.value = result.value.replace(result.value[result.value.length - 1], this.value)
      } else if (basicOperator("+") == 'mathWithNegatives') {
        result.value = result.value + this.value;
        valueNow = valueNow + this.value;
      }
      else {
        result.value = result.value + this.value;
        valueNow = "";
      }
      break;
    case "-":
      if (valueNow != '') {
        console.log(valueNow)
        calculate()
        valueNow = "";
      }
      valueBefore = parseFloat(result.value);
      if (basicOperator("-") == 'hasOperator') {
        result.value = result.value.replace(result.value[result.value.length - 1], this.value)
      } else if (basicOperator("-") == 'mathWithNegatives') {
        result.value = result.value + this.value;
        valueNow = valueNow + this.value;
      }
      else {
        result.value = result.value + this.value;
        valueNow = "";
      }
      break;
    case "*":
      if (valueNow != '') {
        console.log(valueNow)
        calculate()
        valueNow = "";
      }
      valueBefore = parseFloat(result.value);
      if (basicOperator("*") == 'hasOperator') {
        result.value = result.value.replace(result.value[result.value.length - 1], this.value)
      } else if (basicOperator("*") == 'mathWithNegatives') {
        result.value = result.value + this.value;
        valueNow = valueNow + this.value;
      }
      else {
        result.value = result.value + this.value;
        valueNow = "";
      }
      break;
    case "/":
      if (valueNow != '') {
        console.log(valueNow)
        calculate()
        valueNow = "";
      }
      valueBefore = parseFloat(result.value);
      if (basicOperator("/") == 'hasOperator') {
        result.value = result.value.replace(result.value[result.value.length - 1], this.value)
        valueNow = "";
      } else if (basicOperator("/") == 'mathWithNegatives') {
        result.value = result.value + this.value;
        valueNow = valueNow + this.value;
      }
      else {
        result.value = result.value + this.value;
        valueNow = "";
      }
      break;
    default:
      if (isAllowed(this.value) == false && this.value != '') {
        alert('Número ou Operador deve ser informado corretamente!')
        return;
      }
      result.value = result.value + this.value;
      if (operator != '') {
        valueNow = valueNow + this.value;
      }
      break;
  }
}
/*============= ON KEY PRASS PASS VALUE TO BEFORE AND NOW BUTTONS TO EXECUTE CALCULATE FUNCTION ====================*/
document.addEventListener('keypress', (event) => {
  document.querySelector(".enter").focus()
  var x = event.keyCode;         // Obtém o valor Unicode (decimal)
  var y = String.fromCharCode(x);
  console.log(x)
  if (x == 13) {
    document.querySelector(".enter").focus()
    return;
  }
  if (x == 8 || x == 46) {
    location.reload()
  }
  switch (y) {
    case "+":
      valueBefore = parseFloat(result.value);
      if (valueNow != '') {
        console.log(valueNow)
        calculate()
        valueNow = "";
      }
      if (basicOperator("+") == 'hasOperator') {
        result.value = result.value.replace(result.value[result.value.length - 1], y)
      } else if (basicOperator("+") == 'mathWithNegatives') {
        result.value = result.value + y;
        valueNow = valueNow + y;
      }
      else {
        result.value = result.value + y;
        valueNow = "";
      }
      break;
    case "-":
      if (valueNow != '') {
        console.log(valueNow)
        calculate()
        valueNow = "";
      }
      valueBefore = parseFloat(result.value);
      if (basicOperator("-") == 'hasOperator') {
        result.value = result.value.replace(result.value[result.value.length - 1], y)
      } else if (basicOperator("-") == 'mathWithNegatives') {
        result.value = result.value + y;
        valueNow = valueNow + y;
      }
      else {
        result.value = result.value + y;
        valueNow = "";
      }
      break;
    case "*":
      if (valueNow != '') {
        console.log(valueNow)
        calculate()
        valueNow = "";
      }
      valueBefore = parseFloat(result.value);
      if (basicOperator("*") == 'hasOperator') {
        result.value = result.value.replace(result.value[result.value.length - 1], y)
      } else if (basicOperator("*") == 'mathWithNegatives') {
        result.value = result.value + y;
        valueNow = valueNow + y;
      }
      else {
        result.value = result.value + y;
        valueNow = "";
      }
      break;
    case "/":
      if (valueNow != '') {
        console.log(valueNow)
        calculate()
        valueNow = "";
      }
      valueBefore = parseFloat(result.value);
      if (basicOperator("/") == 'hasOperator') {
        result.value = result.value.replace(result.value[result.value.length - 1], y)
        valueNow = "";
      } else if (basicOperator("/") == 'mathWithNegatives') {
        result.value = result.value + y;
        valueNow = valueNow + y;
      }
      else {
        result.value = result.value + y;
        valueNow = "";
      }
      break;
    default:
      if (isAllowed(y) == false && y != '') {
        return;
      }
      result.value = result.value + y;
      if (operator != '') {
        valueNow = valueNow + y;
      }
      break;
  }
})
/*================ MAKE THE MATH ===================*/
function calculate() {
  if (isAllowed(result.value) == false) {
    result.value = '';
    return alert('Valor Incorreto!');
  }
  if (operator != "") {
    switch (operator) {
      case "+":
        result.value = (parseFloat(valueBefore) + parseFloat(valueNow)).toFixed(3);
        break;
      case "-":
        result.value = (parseFloat(valueBefore) - parseFloat(valueNow)).toFixed(3);
        break;
      case "*":
        result.value = (parseFloat(valueBefore) * parseFloat(valueNow)).toFixed(3);
        break;
      case "/":
        result.value = (parseFloat(valueBefore) / parseFloat(valueNow)).toFixed(3);
        break;
    }
    operator = "";
    valueNow = ''
    return;
  }
  document.querySelector(".enter").focus()
  alert('Sem nenhum operador registrado!')
  result.value = result.value;
}
/*================ EXECUTE THE LISTENER ===================*/
const calc = document.querySelectorAll(".btn");
calc.forEach((element) => {
  element.addEventListener("click", onClickButton);
});

