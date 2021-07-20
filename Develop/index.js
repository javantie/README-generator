// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs= require("fs")

// TODO: Create an array of questions for user input
//const questions = [];
const promptUser = () => {
  return inquirer.prompt([
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "UserName",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "Email",
      },
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("(Requierd) Please enter a project title!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "Description",
      message: "Enter your project description",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Please enter a description!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "Installation",
      message: "Enter your installation description",
      validate: (installationInput) => {
        if (installationInput) {
          return true;
        } else {
          console.log("Please enter an installation description!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "Usage",
      message: "What is this app used for?",
      validate: (usageInput) => {
        if (usageInput) {
          return true;
        } else {
          console.log("Please enter a usage description!");
          return false;
        }
      },
    },
    {
        type: "checkbox",
        name: "License",
        message:
          "What license do you want to add to this project? (Check all that apply)",
        choices: [
          "MIT",
          "Apache License 2.0",
          "Mozilla Public License 2.0",
          "GNU General Public License (GPL)",
        ],
      },
    {
      type: "input",
      name: "credits",
      message: "Enter your project credits",
      validate: (creditsInput) => {
        if (creditsInput) {
          return true;
        } else {
          console.log("Please enter credits!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "features",
      message: "Enter your project Features",
      validate: (featuresInput) => {
        if (featuresInput) {
          return true;
        } else {
          console.log("Please enter project Features!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "Contributors",
      message: "Please add contributors",
    },
    
  ]);
};

promptUser();
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
