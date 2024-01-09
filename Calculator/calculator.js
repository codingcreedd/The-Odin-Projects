let num1 = 0, num2, operator = '';
let operation_status = 'none';
let num2Text = '';
let reset_number;
//div
const currentScreen = document.querySelector('.current-screen');
currentScreen.innerText = '0';

//buttons
const deleteButton = document.querySelector('.delete-btn');
const clearButton = document.querySelector('.clear-btn');
const equalsButton = document.querySelector('.equals-btn');
const buttons = document.querySelectorAll('.normal-button');
const operators = document.querySelectorAll('.arithmetic-btn');
const decimalButton = document.querySelector('.decimal-btn');

decimalButton.addEventListener('click', () => {
    const currentScreenText = String(currentScreen.innerText);
    if(!currentScreenText.includes("."))
        currentScreen.innerText += '.';

    if(operation_status !== 'none'){
        num2Text += '.';
    }
    
});

equalsButton.addEventListener('click', () => {

    if(num2Text === '' && operation_status !== 'none')
    {
        currentScreen.innerText = `${num1}`;
        operation_status = 'none';
        return;
    }
    
    if(operation_status !== 'none'){
        calculateResult();
        operation_status = 'none';
    }
});

clearButton.addEventListener('click', () => {
    clearEquation();
});

deleteButton.addEventListener('click', () => {
    const currentScreenText = String(currentScreen.innerText);
    if(operation_status === 'none' && reset_number === true)
    {
        clearEquation();
    }
    else
    {
        if(isNumber(currentScreenText[currentScreenText.length - 1])){
            const currentScreenText = String(currentScreen.innerText);
            currentScreen.innerText = currentScreenText.slice(0, -1);
        }
    }
});

//LISTS

operators.forEach(operatorButton => {
    operatorButton.addEventListener('click', e => {

        if(num2Text === '' && operation_status !== 'none')
        {
            clearEquation();
            return;
        }

        if(operation_status === 'none')
            num1 = parseFloat(currentScreen.innerText);
        else
            calculateResult();
            
        checkOperator(e);

        displayOnScreen(e);
       
        operation_status = 'operate';
        reset_number = true;
    });
});

buttons.forEach(button => {
    button.addEventListener('click', e => {
        if(currentScreen.innerText === '0' || currentScreen.innerText === 'Math Error!')
            currentScreen.innerText = '';

        if(operation_status === 'none' && reset_number === true){
            currentScreen.innerText = '';
            reset_number = false;
        }

        displayOnScreen(e);

        if(operation_status !== 'none'){
            num2Text += e.target.innerText;
        }
        
    });
});

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    if(num2 === 0)
    {
        clearEquation();
        currentScreen.innerText = 'Math Error!';
    }
    else
        return num1 / num2;
}

function checkOperator(e) {
    const operatorText = e.target.innerText;
    
    operatorText === '+' ? operator = '+' : operatorText === '-' ? operator = '-' : operatorText === '÷' ? operator = '÷' : operator = '×';
    
}


function operate(num1, num2, operator){
    switch(operator){
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '×':
            return multiply(num1, num2);
            break;
        case '÷':
            return divide(num1, num2);
            break;
    }
}

function displayOnScreen(e){
    currentScreen.innerText += e.target.innerText;
}

function calculateResult(){
        num2 = parseFloat(num2Text);
        let result = operate(num1, num2, operator);

        num1 = result;

        if(Number.isInteger(result))
            currentScreen.innerText = `${result}`;
        else
            currentScreen.innerText = `${result.toFixed(2)}`;

        
        num2Text = '';
}

function clearEquation(){
    currentScreen.innerText = '0';
    num1 = 0;
    num2 = 0;
    operator = '';
    num2Text = '';
    operation_status = 'none';
    reset_number = false;
}

function isNumber(char) {
    return !isNaN(parseFloat(char));
}
