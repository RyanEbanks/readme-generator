// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = ["Enter your project title: ", "Enter your project description: ", "Add a table of contents: ", 
"What are the installation steps? (Write N/A if not applicable): ", "What is the usage for this project: ", "Would you like to add screenshots (Make sure its saved in assets/images): ",
"Add a license: ", "Would you like others to contribute? (Write N/A if not applicable): ", "Write tests for your application: ", "Give contact information for people with questions: ", 
"What do you want to name the readme (Do not include file type): "];

const additionalQuestions = ["What is the name of the photo/gif (Do not include file type): ", "What is the photo/gifs file type: ", "Add alternate text for screenshot upload: "];

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
    {
        //If yes the table will be auto generated if no it will print blank
        type: "rawlist",
        name: "tableOfContents",
        message: questions[2],
        choices: ["yes", "no"]
    },
   
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
        choices: ["yes", "no"],
    },
    //Follow Up Questions when Answer is yes
    {
        type: "input",
        name: "photoName",
        message: additionalQuestions[0],
        when: (answers) => answers.screenshots === "yes"
    },
    {
        type: "input",
        name: "fileType",
        message: additionalQuestions[1],
        when: (answers) => answers.screenshots === "yes"
    },
    {
        type: "input",
        name: "altText",
        message: additionalQuestions[2],
        when: (answers) => answers.screenshots === "yes"
    },
    // Prints license info based on what is selected
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
    {
        type: "input",
        name: "projTests",
        message: questions[8],
    },
    //provide contact info like an email
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
});
}

// Function call to initialize app
init();

/* Questions
1. Could I use inquirer.promise to load a second set of inquirer prompts to grab the screenshot information?
2. For the user tests how can I write each step if once I press enter the next question is loaded. (Try looking into regex to take specific values from template literals then parsing it and returning those values)
3. Should I just remove the table of contents and auto generate it? If not I was thinking about using a checkbox and returning the answers selected. I could use if statements 
   and template literals to print the order and return it.
*/