//build a basic arithmetic calculator without a frontend


//Create operator input
const operator = prompt('Select the operator : (+ , - , * or /)');

//Creare the operand input
const num1 = parseFloat(window.prompt('Enter the first number: '));
const num2 = parseFloat(window.prompt('Enter the second number: '));

let answer;

//use if...else if..else for calculation
if (operator == '+'){
    answer = num1 + num2;
}
else if (operator == '-'){
    answer = num1 - num2;
}
else if (operator == '*'){
    answer = num1 * num2;
}
else{
    answer = num1 / num2;
}

//Display the answer
window.alert(answer);