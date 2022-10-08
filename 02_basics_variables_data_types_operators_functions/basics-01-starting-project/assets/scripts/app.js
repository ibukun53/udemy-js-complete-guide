const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');
const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');
const defaultResult = 0;
let currentResult = defaultResult;
const logEntries = [];

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}
// get input from input field
function getUserNumberInput() {
  return parseInt(userInput.value, 10); // from vendor file
}

// write and generate calculation log
function createAndWriteOutput(operators, resultBeforeCalc, calNumber) {
  const calDescription = `${resultBeforeCalc} ${operators} ${calNumber}`;
  outputResult(currentResult, calDescription); // from vendor file
}

function writeLog(operationIdentifier, prevResult, operationNumber, newResult) {
  const logEntry = {
    operation: operationIdentifier,
    prevResults: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}
//  adding log
function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
  writeLog('ADD', initialResult, enteredNumber, currentResult);
}

// subtracting log
function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
  writeLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

// multiplying log
function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
  writeLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

// dividing log
function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
  writeLog('DIVIDE', initialResult, enteredNumber, currentResult);
}
// the variables are from vendor file
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
