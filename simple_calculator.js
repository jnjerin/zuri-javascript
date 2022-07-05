//build a basic arithmetic calculator without a frontend
/*enter num1, enter num2, select operator, result =
create varaibles num1, num2 that accepts user input
create operator input prompt
convert vars to float
create operator functions
print output with result
*/

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