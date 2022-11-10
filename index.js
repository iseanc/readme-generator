// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// VARIABLES:
let licenseBadge, title, description, toc, installation, usage, license, contributing, tests, githubUsername, githubProfileURL, emailAddress;

// TODO: Create an array of questions for user input
// const arrayQuestions = [];
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?  ',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Provide a short description.  Think about your motivation, what problem it solves, why you built it, and what you learned:  ',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the steps required to install your project?  ',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'List any usage instructions and examples for use:  ',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'What kind of license will this project use?  ',
      name: 'contact',
      choices: ['MIT License', 'GNU GPLv3', 'The Unlicense'],
    },
    {
      type: 'input',
      message: 'Provide information on how to contributing to your project:  ',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'Provide examples of how to run any tests here:  ',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Enter your GitHub user name:  ',
      name: 'githubUsername',
    },
    {
      type: 'input',
      message: 'Enter the URL for your GitHub profile:  ',
      name: 'githubProfileURL',
    },
    {
      type: 'input',
      message: 'Enter your email address:  ',
      name: 'emailAddress',
    }
  ])
  .then((response) =>
    console.log(response)
  );


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
