// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    var license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "GNU General Public License v3.0") {
    var license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";

  } else if (license === "ISC License (ISC)") {
    var license = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";

  } else if (license === "Apache 2.0 License") {
    var license = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

  } else if (license == 5) {
    var license = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";

  } else {
    var license = "";
  }
  
  console.log("License Badge Result: " + license);
  return license;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //Not working

  if (license == "MIT") {
    var license = "[!License: MIT](https://choosealicense.com/licenses/mit/)";
  } else if (license === "GNU General Public License v3.0") {
    var license = "[!License: GPL v3](https://choosealicense.com/licenses/gpl-3.0/)";

  } else if (license === "ISC License (ISC)") {
    var license = "[!License: IPL 1.0](https://choosealicense.com/licenses/isc/)";

  } else if (license === "Apache 2.0 License") {
    var license = "[!License](https://choosealicense.com/licenses/apache-2.0/)";

  } else if (license === "Creative Commons license family") {
    var license = "[!License: CC0-1.0](https://choosealicense.com/licenses/cc0-1.0/)";

  } else {
    var license = "";
  }
  console.log("License Link Result: " + license);
  return license;
  // switch (license) {
  //   case 1:
  //     return "[![License: MIT](https://choosealicense.com/licenses/mit/)";

  //   case 2:
  //     // code block
  //     return "[![License: GPL v3](https://choosealicense.com/licenses/gpl-3.0/)";

  //   case 3:
  //     // code block
  //     return "[![License: IPL 1.0](https://choosealicense.com/licenses/isc/)";

  //   case 4:
  //     // code block
  //     return "[![License](https://choosealicense.com/licenses/apache-2.0/)";

  //   case 5:
  //     // code block
  //     return "[![License: CC0-1.0](https://choosealicense.com/licenses/cc0-1.0/)";

  //   default:
  //     return "";
  // }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) { }

// function renderScreenshots(myData) {
//   if(myData.screenshots === "yes") {
//     inquirer.prompt([{
//         type: "input",
//         name: "photoName",
//         message: "What is the name of the photo/gif (File type not included): ",
//     },
//     {
//         type: "input",
//         name: "fileType: ",
//         message: "What is the photo/gifs file type: "
//     },
//     {
//         type: "input",
//         name: "altText: ",
//         message: "Add alternate text for screenshot upload: "
//     },
// ]).then((screenResponse) => {
//     var myScreenshot = `![${screenResponse.altText}](assets/images/${photoName}.${fileType})`
//     return myScreenshot;
// });
// } else if(myData.screenshots === "no") {
//     return "";
// }
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //Passing data.license into these functions so it can work with the license name.
  console.log("Data.License: " + data.license);
/*Screenshots will return undefined*/
  myMarkdown = `
# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description} 

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${data.projInstallation}

## Usage
${data.projUsage}

## License
${renderLicenseLink(data.license)}

## How to Contribute
${data.projContribution}

## Tests
${data.projTests}

## Questions
${data.questions}
`

return myMarkdown;
}

// ${renderScreenshots(data.screenshots)}

module.exports = generateMarkdown;
