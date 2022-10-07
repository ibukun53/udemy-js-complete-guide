const defaultResult = 0;
let currentResult = defaultResult;
const logEntries = [];

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
