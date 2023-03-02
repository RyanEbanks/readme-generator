// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = ["Enter your project title: ", "Enter your project description: ", "Add a table of contents: ", 
"What are the installation steps? (Write N/A if not applicable): ", "What is the usage for this project: ", "Would you like to add screenshots: ", "Add a license: ",
"Would you like others to contribute? (Write N/A if not applicable): ", "Write tests for your application: ", "Give contact information for people with questions: ", 
"What do you want to name the readme (Do not include file type): "];

// TODO: Create a function to write README file
function writeToFile(filename, data) {
   
    fs.writeFile(filename, data, (error, data) => {
        if(error) {
            console.log(error);
        }
        console.log(data);
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([{
        type: "input",
        name: "title",
        message: questions[0]
    },
    {
        type: "input",
        name: "description",
        message: questions[1]
    },
    // {
    //     //Checkbox allows me to include what I want included under table of conents
    //     type: "checkbox",
    //     name: "tableOfContents",
    //     message: questions[2],
    //     choices: ["Installation", "Usage", "Credits", "License"]
    // },
   
    {
        type: "input",
        name: "projInstallation",
        message: questions[3]
    },
    {
        type: "input",
        name: "projUsage",
        message: questions[4]
    },
    //rawlist allows me to select 1 for yes and 2 for no 
    {
        type: "rawlist",
        name: "screenshots",
        message: questions[5],
        choices: ["yes", "no"]
    },
    // Checkbox to get license string or list from a list of options
    {
        type: "rawlist",
        name: "license",
        message: questions[6],
        //need to input choices
        choices: ["MIT", "GNU General Public License v3.0", "ISC License (ISC)", "Apache 2.0 License", "Creative Commons license family"]
    },
    //Prob leave as input and write N/A if not applicable
    {
        type: "input",
        name: "projContribution",
        message: questions[7]
    },
    //1 for yes and 2 for no, use JS to allow the user to type in however many steps if yes and N/A if no. Might do this or switch it back to input
    {
        type: "input",
        name: "projTests",
        message: questions[8]
    },
    //provide contact questions such as email could just provide auto or have an option to provide contact or not with with JS after inputing contact (could run a name, message, default)
    {
        type: "input",
        name: "questions",
        message: questions[9]
    },
    {
        type: "input",
        name: "readmeName",
        message: questions[10]
    },
]).then((responses) => {

const generatedMarkdown = generateMarkdown(responses);
writeToFile(`${responses.readmeName}.md`, generatedMarkdown);
//need to add javascript for license badge, based on what was selected it generates the license badge
//Also get the current date and something for the name

});
}

// Function call to initialize app
init();

/* Questions
1. Could I use inquirer.promise to load a second set of inquirer prompts to grab the screenshot information?
2. For the user tests how can I write each step if once I press enter the next question is loaded.
3. Should I just remove the table of contents and auto generate it? If not I was thinking about using a checkbox and returning the answers selected. I could use if statements 
   and template literals to print the order and return it.
*/