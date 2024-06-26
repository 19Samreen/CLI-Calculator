#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Kindly enter your first number: "
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Kindly enter your second number: "
    },
    {
        type: "list",
        choices: ["+", "-", "*", "/"],
        name: "operator",
        message: "Select Operator:"
    },
]);
const { numberOne, numberTwo, operator } = answer;
if (numberOne && numberTwo && operator) {
    let result = 0;
    if (operator === "+") {
        result = numberOne + numberTwo;
    }
    else if (operator === "-") {
        result = numberOne - numberTwo;
    }
    if (operator === "*") {
        result = numberOne * numberTwo;
    }
    if (operator === "/") {
        result = numberOne / numberTwo;
    }
    console.log("Your result is:", result);
}
else {
    console.log("Kindly enter valid input");
}
