// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const gm = require('./utils/generateMarkdown');

// Array of SPDX license IDs (for opensource.org)
const licenses = [
  'NONE',
  'Unlicense', 
  'BSL-1.0', 
  'MIT', 
  'Apache-2.0', 
  'MPL-2.0', 
  'LGPL-3.0', 
  'GPL-3.0', 
  'AGPL-3.0'
];

// TODO: Create an array of questions for user input
const arrayQuestions = [
    {
      type: 'input',
      message: 'What is the title of this project? ',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Project description: What problem is solved? What was the motivation? ',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What steps are required to install your project? (leave blank to skip)',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'List usage instructions and examples for use: (leave blank to skip)',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'What kind of license will this project use? ',
      name: 'license',
      // https://choosealicense.com/licenses/
      choices: licenses
    },
    {
      type: 'input',
      message: 'How to contribute to the project: (leave blank to skip) ',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'Examples of how to run any tests: (leave blank to skip) ',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Enter your GitHub user name: (leave blank to skip)',
      name: 'githubUsername',
    },
    {
      type: 'input',
      message: 'Enter your email address: (leave blank to skip)',
      name: 'emailAddress',
    }
  ];

// TODO: Create a function to write README file
function writeToFile(data) {

  fs.writeFile('./data/README.md', data, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(arrayQuestions)
  .then((response) => { 
    writeToFile(gm(response));
    // console.log(gm(response));
    }
  );
}

// Function call to initialize app
init();
