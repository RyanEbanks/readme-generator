// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = ["Enter your project title: ", "Enter your project description: ", "Add a table of contents: ", 
"What are the installation steps? (Y/N): ", "What is the usage for this project: ", "Would you like to add screenshots? (Y/N): ", "Add a license: ",
"Add a license badge: ", "Would you like others to contribute? (Y/N): ", "Write tests for your application: ", "Give contact information for people with questions: "];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer.prompt([{
        type: "input",
        name: "Project Title",
        message: questions[0]
    },
    {
        type: "input",
        name: "Project Description",
        message: questions[1]
    },
    {
        type: "input",
        name: "Project Table of Contents",
        message: questions[2]
    },
    {
        type: "input",
        name: "Project Installation",
        message: questions[3]
    },
    {
        type: "input",
        name: "Project Usage",
        message: questions[4]
    },
    {
        type: "input",
        name: "Project Screenshots",
        message: questions[5]
    },
    {
        type: "input",
        name: "Project License",
        message: questions[6]
    },
    {
        type: "input",
        name: "Project License Badge",
        message: questions[7]
    },
    {
        type: "input",
        name: "Project Contribution",
        message: questions[8]
    },
    {
        type: "input",
        name: "Project Tests",
        message: questions[9]
    },
    {
        type: "input",
        name: "Project Questions",
        message: questions[10]
    },
]).then((responses) => {
    `
    `
})
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
