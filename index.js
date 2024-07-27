const display = document.getElementById("display");

function appendToDisply(input){
    display.value += input;
}

function clearDisplay(input){
    display.value =  " " ;
}

function calculate(input){
    try{
        display.value =  eval(display.value);
    }

    catch(error){
        display.value = "error";
    }
}