// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = ["Enter your project title: ", "Enter your project description: ", "Add a table of contents: ", 
"What are the installation steps? (Y/N): ", "What is the usage for this project: ", "Would you like to add screenshots? (Y/N): ", "Add a license: ",
"Would you like others to contribute? (Y/N): ", "Write tests for your application: ", "Give contact information for people with questions: "];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   
    fs.writeFile("README.md", fileName, (error, data) => {
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
    {
        //Checkbox allows me to include what I want included under table of conents
        type: "checkbox",
        name: "tableOfContents",
        message: questions[2],
        choices: ["Installation", "Usage", "Credits", "License"]
    },
    //not sure how to handle installation yet might do a list for step by step or checkbox, need an N/A option (also might change the question phrase for it in const)
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
    //Checkbox to get license string or list from a list of options
    {
        type: "rawlist",
        name: "license",
        message: questions[6],
        //need to input choices
        choices: []
    },
    //Prob leave as input and write N/A if not applicable
    {
        type: "input",
        name: "projContribution",
        message: questions[7]
    },
    //1 for yes and 2 for no, use JS to allow the user to type in however many steps if yes and N/A if no. Might do this or switch it back to input
    {
        type: "rawlist",
        name: "projTests",
        message: questions[8]
    },
    //provide contact questions such as email could just provide auto or have an option to provide contact or not with with JS after inputing contact (could run a name, message, default)
    {
        type: "input",
        name: "questions",
        message: questions[9]
    },
]).then((responses) => {
    //Might figure out a way to do a prompt for table of contents where it just adds these to it
    /*
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
    */

//need to add javascript for license badge, based on what was selected it generates the license badge

   var myMarkdown = `
    #${responses.title}

    ## Badges
    ${licenseBadge}

    ## Description
    ${responses.description}

    ## Table of Contents
    ${responses.tableOfContents}

    ## Installation
    - [Installation](#${responses.projInstallation})
    - [Usage](#${responses.projInstallation})
    - [Credits](#${responses.projInstallation})
    - [License](#${responses.projInstallation})

    ## Usage
    ${responses.projUsage}
    
    ${responses.screenshots}

    ## License
    ${responses.license}

    ## How to Contribute
    ${responses.projContribution}

    ## Tests
    ${responses.projTests}

    ## Questions
    ${responses.questions}
    `
    writeToFile(myMarkdown, responses);
});
}

// Function call to initialize app
init();
