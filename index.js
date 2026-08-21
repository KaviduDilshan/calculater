const display = document.getElementById("display");

function appendToDisply(input){
    display.value += input;
}

function clearDisplay(input){
    display.value =  " " ;
}

function calculate(){
    try{
        display.value =  eval(display.value);
    }
    catch(error){
        display.value = "error";
    }
}

function deleteLast(){
    display.value = display.value.slice(0, -1);
}

function squareRoot(){
    try{
        display.value = Math.sqrt(eval(display.value));
    }
    catch(error){
        display.value = "error";
    }
}

function square(){
    try{
        display.value = Math.pow(eval(display.value), 2);
    }
    catch(error){
        display.value = "error";
    }
}

function percentage(){
    try{
        display.value = eval(display.value) / 100;
    }
    catch(error){
        display.value = "error";
    }
}

function reciprocal(){
    try{
        display.value = 1 / eval(display.value);
    }
    catch(error){
        display.value = "error";
    }
}

function toggleSign(){
    try{
        display.value = eval(display.value) * -1;
    }
    catch(error){
        display.value = "error";
    }
}

function calculateFactorial(){
    try{
        let num = eval(display.value);
        if(num < 0){
            display.value = "error";
            return;
        }
        let factorial = 1;
        for(let i = 1; i <= num; i++){
            factorial *= i;
        }
        display.value = factorial;
    }
    catch(error){
        display.value = "error";
    }
}
 function calculatePower(){
    try{
        let num = eval(display.value);
        let power = prompt("Enter the power:");
        display.value = Math.pow(num, power);
    }
    catch(error){
        display.value = "error";
    }
}
 fuinction calculateLogarithm(){
    try{
        let num = eval(display.value);
        if(num <= 0){
            display.value = "error";
            return;
        }
        display.value = Math.log10(num);
    }
    catch(error){
        display.value = "error";
    }
}

function calculateNaturalLogarithm(){
    try{
        let num = eval(display.value);
        if(num <= 0){
            display.value = "error";
            return;
        }
        display.value = Math.log(num);
    }
    catch(error){
        display.value = "error";
    }
}

function calculateSine(){
    try{
        let num = eval(display.value);
        display.value = Math.sin(num);
    }
    catch(error){
        display.value = "error";
    }
}

function calculateCosine(){
    try{
        let num = eval(display.value);
        display.value = Math.cos(num);
    }
    catch(error){
        display.value = "error";
    }
}

function calculateTangent(){
    try{
        let num = eval(display.value);
        display.value = Math.tan(num);
    }
    catch(error){
        display.value = "error";
    }
}

function calculateInverseSine(){
    try{
        let num = eval(display.value);
        if(num < -1 || num > 1){
            display.value = "error";
            return;
        }
        display.value = Math.asin(num);
    }
    catch(error){
        display.value = "error";
    }
}
