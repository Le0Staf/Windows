//-------------------------------------------------Calculator-------------------------------------------------//


function CloseCalculator() {
    document.getElementById("calculator").classList.toggle("visible");
}

function OpenCalculator() {
    if (!document.getElementById("calculator").classList.contains("visible")) {
    document.getElementById("calculator").classList.toggle("visible")
    }
}

let calculatorIsMaximized = 0;

function MaximizeCalculator() {
    if (calculatorIsMaximized == 0) {
        document.getElementById("calculator").style.top = "0";
        document.getElementById("calculator").style.left = "0";
        document.getElementById("calculator").style.width = "100%";
        document.getElementById("calculator").style.height = "100%";

        document.getElementById("calculator-header").style.height = "2.7%";
        document.getElementById("calculator-minimize").style.width = "2.7vw";
        document.getElementById("calculator-fullscreen").style.width = "2.7vw";
        document.getElementById("calculator-close").style.width = "2.7vw";

        document.getElementById("left-calculator-nav").style.marginLeft = "0.5%";
        document.getElementById("calculator-burger").style.marginLeft = "1%";
        document.getElementById("calculator-header2").style.height = "1.5%";
        document.getElementById("calculator-backspace").style.width = "1.5vw";
        document.getElementById("calculator-divide").style.width = "1.2vw"

        calculatorIsMaximized = 1;
    }
    else if (calculatorIsMaximized == 1) {
        document.getElementById("calculator").style.top = "15%";
        document.getElementById("calculator").style.left = "23%";
        document.getElementById("calculator").style.width = "19.55%";
        document.getElementById("calculator").style.height = "55.5%";

        document.getElementById("calculator-header").style.height = "5%"
        document.getElementById("calculator-minimize").style.width = "2.7vw"
        document.getElementById("calculator-fullscreen").style.width = "2.7vw"
        document.getElementById("calculator-close").style.width = "2.7vw"
        document.getElementById("left-calculator-nav").style.marginLeft = "0.5%";
        document.getElementById("calculator-burger").style.marginLeft = "4%";
        document.getElementById("calculator-header2").style.height = "8%";
        document.getElementById("calculator-backspace").style.width = "1.2vw";
        document.getElementById("calculator-divide").style.width = "1vw"

        calculatorIsMaximized = 0;
    }
}

//-----Calculator Calculate-----//

let calculatorNumberCap = 10;

let calculatorValue = 0;
let secondCalculatorValue = 0;

let calculatorIsValue = 1;

let calculatorAddition = false;
let calculatorSubtraction = false;
let calculatorDivision = false;
let calculatorMultiplication = false;

let calculatorChangeToDecimal = false;

function UpdateCalculator() {
    if (calculatorIsValue == 1) {
        document.getElementById("calculator-output").innerHTML = Math.round(calculatorValue * 1e10) / 1e10;
    }
    else if (calculatorIsValue == 2) {
        document.getElementById("calculator-output").innerHTML = secondCalculatorValue;
    }
}

function CalculatorChangeToDecimal() {
    calculatorChangeToDecimal = true;
}

function CalculatorNumber(number) {
    if (calculatorChangeToDecimal == true) {
        if (calculatorIsValue == 1) {
            
            UpdateCalculator();
        }
        else if (calculatorIsValue == 2) {
            secondCalculatorValue = secondCalculatorValue / 10;
            secondCalculatorValue = secondCalculatorValue + (number / 10);
            UpdateCalculator();
        }
    }
    else if (calculatorChangeToDecimal == false) {
        if (calculatorIsValue == 1) {
            calculatorValue = calculatorValue * 10;
            calculatorValue = calculatorValue + number;
            UpdateCalculator();
        }
        else if (calculatorIsValue == 2) {
            secondCalculatorValue = secondCalculatorValue * 10;
            secondCalculatorValue = secondCalculatorValue + number;
            UpdateCalculator();
        }
    }
}

function CalculatorAddition() {
    if (calculatorSubtraction == true) {
        calculatorValue = calculatorValue - secondCalculatorValue; 
        secondCalculatorValue = 0;
        calculatorIsValue = 2;
        calculatorSubtraction = false;
        calculatorAddition = true;
        document.getElementById("calculator-output").innerHTML = calculatorValue;
    }
    else if (calculatorDivision == true) {
        calculatorValue = calculatorValue / secondCalculatorValue; 
        secondCalculatorValue = 0;
        calculatorIsValue = 2;
        calculatorDivision = false;
        calculatorAddition = true;
        document.getElementById("calculator-output").innerHTML = calculatorValue;
    }
    else if (calculatorMultiplication == true) {
        calculatorValue = calculatorValue * secondCalculatorValue; 
        secondCalculatorValue = 0;
        calculatorIsValue = 2;
        calculatorMultiplication = false;
        calculatorAddition = true;
        document.getElementById("calculator-output").innerHTML = calculatorValue;
    }
    else if (calculatorAddition == true && secondCalculatorValue > 0) {
        calculatorValue = calculatorValue + secondCalculatorValue; 
        secondCalculatorValue = 0;
        calculatorIsValue = 2;
        document.getElementById("calculator-output").innerHTML = calculatorValue;
    }
    else if (calculatorIsValue == 1) {
        if (calculatorValue > 0) {
            calculatorIsValue = 2;
            calculatorAddition = true;
            calculatorSubtraction = false;
            calculatorDivision = false;
        }
    }
}

function CalculatorSubtraction() {
    if (calculatorAddition == true) {
        calculatorValue = calculatorValue + secondCalculatorValue; 
        secondCalculatorValue = 0;
        calculatorIsValue = 2;
        calculatorAddition = false;
        calculatorSubtraction = true;
        document.getElementById("calculator-output").innerHTML = calculatorValue;
    }
    else if (calculatorDivision == true) {
        calculatorValue = calculatorValue / secondCalculatorValue; 
        secondCalculatorValue = 0;
        calculatorIsValue = 2;
        calculatorDivision = false;
        calculatorSubtraction = true;
        document.getElementById("calculator-output").innerHTML = calculatorValue;
    }
    else if (calculatorMultiplication == true) {
        calculatorValue = calculatorValue * secondCalculatorValue; 
        secondCalculatorValue = 0;
        calculatorIsValue = 2;
        calculatorMultiplication = false;
        calculatorSubtraction = true;
        document.getElementById("calculator-output").innerHTML = calculatorValue;
    }
    else if (calculatorSubtraction == true && secondCalculatorValue > 0) {
        calculatorValue = calculatorValue - secondCalculatorValue; 
        secondCalculatorValue = 0;
        calculatorIsValue = 2;
        document.getElementById("calculator-output").innerHTML = calculatorValue;
    }
    else if (calculatorIsValue == 1) {
        calculatorIsValue = 2;
        calculatorSubtraction = true;
        calculatorAddition = false;
        calculatorDivision = false;
    }
}

function CalculatorMultiplication() {
    if (calculatorAddition == true) {
        calculatorValue = calculatorValue + secondCalculatorValue; 
        secondCalculatorValue = 0;
        calculatorIsValue = 2;
        calculatorAddition = false;
        calculatorMultiplication = true;
        document.getElementById("calculator-output").innerHTML = calculatorValue;
    }
    else if (calculatorSubtraction == true) {
        calculatorValue = calculatorValue - secondCalculatorValue; 
        secondCalculatorValue = 0;
        calculatorIsValue = 2;
        calculatorSubtraction = false;
        calculatorMultiplication = true;
        document.getElementById("calculator-output").innerHTML = calculatorValue;
    }
    else if (calculatorDivision == true) {
        calculatorValue = calculatorValue / secondCalculatorValue; 
        secondCalculatorValue = 0;
        calculatorIsValue = 2;
        calculatorDivision = false;
        calculatorMultiplication = true;
        document.getElementById("calculator-output").innerHTML = calculatorValue;
    }
    else if (calculatorMultiplication == true && secondCalculatorValue > 0) {
        calculatorValue = calculatorValue * secondCalculatorValue; 
        secondCalculatorValue = 0;
        calculatorIsValue = 2;
        document.getElementById("calculator-output").innerHTML = calculatorValue;
    }
    else if (calculatorIsValue == 1 && calculatorValue > 0) {
        calculatorIsValue = 2;
        calculatorDivision = false;
        calculatorSubtraction = false;
        calculatorAddition = false;
        calculatorMultiplication = true;
    }
}

function CalculatorDivision() {
    if (calculatorAddition == true) {
        calculatorValue = calculatorValue + secondCalculatorValue; 
        secondCalculatorValue = 0;
        calculatorIsValue = 2;
        calculatorAddition = false;
        calculatorDivision = true;
        document.getElementById("calculator-output").innerHTML = calculatorValue;
    }
    else if (calculatorSubtraction == true) {
        calculatorValue = calculatorValue - secondCalculatorValue; 
        secondCalculatorValue = 0;
        calculatorIsValue = 2;
        calculatorSubtraction = false;
        calculatorDivision = true;
        document.getElementById("calculator-output").innerHTML = calculatorValue;
    }
    else if (calculatorDivision == true && secondCalculatorValue > 0) {
        calculatorValue = calculatorValue / secondCalculatorValue; 
        secondCalculatorValue = 0;
        calculatorIsValue = 2;
        document.getElementById("calculator-output").innerHTML = calculatorValue;
    }
    else if (calculatorMultiplication == true) {
        calculatorValue = calculatorValue * secondCalculatorValue; 
        secondCalculatorValue = 0;
        calculatorIsValue = 2;
        calculatorMultiplication = false;
        calculatorDivision = true;
        document.getElementById("calculator-output").innerHTML = calculatorValue;
    }
    else if (calculatorIsValue == 1 && calculatorValue > 0) {
        calculatorIsValue = 2;
        calculatorDivision = true;
        calculatorSubtraction = false;
        calculatorAddition = false;
    }
}

function CalculatorEquals() {
    if (calculatorIsValue == 2 && secondCalculatorValue > 0) {
        if (calculatorAddition == true) {
            calculatorValue = calculatorValue + secondCalculatorValue; 
            secondCalculatorValue = 0;
            calculatorIsValue = 1;
            calculatorAddition = false;
            UpdateCalculator();
        }
        else if (calculatorSubtraction == true) {
            calculatorValue = calculatorValue - secondCalculatorValue; 
            secondCalculatorValue = 0;
            calculatorIsValue = 1;
            calculatorSubtraction = false;
            UpdateCalculator();
        }
        else if (calculatorDivision == true ) {
            calculatorValue = calculatorValue / secondCalculatorValue;
            secondCalculatorValue = 0;
            calculatorIsValue = 1;
            calculatorDivision = false;
            UpdateCalculator();
        }
        else if (calculatorMultiplication == true ) {
            calculatorValue = calculatorValue * secondCalculatorValue;
            secondCalculatorValue = 0;
            calculatorIsValue = 1;
            calculatorMultiplication = false;
            UpdateCalculator();
        }
    }
}

function CalculatorBackspace() {
    if (calculatorIsValue == 1) {
        if (calculatorValue > 0) {
            calculatorValue = calculatorValue - calculatorValue % 10;
            calculatorValue = calculatorValue / 10;
            UpdateCalculator();
        }
    }
}

function CalculatorReset() {
    calculatorValue = 0;
    secondCalculatorValue = 0;

    calculatorIsValue = 1;

    UpdateCalculator();
}
