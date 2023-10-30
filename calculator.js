let currentInput = '';
const result = document.getElementById('result');
let lastInputIsOperator = false;

function appendValue(value) {
  if (value.match(/[0-9\.]/)) {
    if (value === '.' && currentInput.includes('.')) {
      // Prevent multiple decimal points in a number.
      return;
    }

    if (currentInput === '0' && value !== '.') {
      // Remove leading zero when entering a number.
      currentInput = value;
    } else {
      currentInput += value;
    }

    lastInputIsOperator = false;
    result.value = currentInput;
  } else if (value.match(/[\+\-\*\/]/) && !lastInputIsOperator) {
    lastInputIsOperator = true;
    currentInput += value;
    result.value = currentInput;
  }
}

function clearDisplay() {
  currentInput = '';
  result.value = '0';
  lastInputIsOperator = false;
}

function evaluateExpression() {
  try {
    currentInput = eval(currentInput).toString();
    result.value = currentInput;
  } catch (error) {
    result.value = 'Error';
  }
}

clearDisplay();
