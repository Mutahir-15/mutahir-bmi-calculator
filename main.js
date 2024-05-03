#!/usr/bin/env node
import inquirer from "inquirer";
const weightInKg = await inquirer.prompt([
    {
        name: "wkg",
        type: "number",
        message: "Enter your Weight in KG: "
    }
]);
const heightInMeter = await inquirer.prompt([
    {
        name: "hm",
        type: "number",
        message: "Enter your Height in Meters: "
    }
]);
if (weightInKg.wkg >= 1) {
    let bmi = weightInKg.wkg / (heightInMeter.hm ** 2);
    console.log(`Your BMI is: ${bmi}`);
}
else
    (console.log("Incorrect value."));
