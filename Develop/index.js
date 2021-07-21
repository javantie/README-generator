// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generatorMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
//const questions = [];
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "UserName",
      validate: (UserNameInput) => {
        if (UserNameInput) {
          return true;
        } else {
          console.log("(Requierd) Please enter GitHub username!");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "Email",
      validate: (EmailInput) => {
        if (EmailInput) {
          return true;
        } else {
          console.log("(Requierd) Please enter an email!");
          return false;
        }
      },
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
      message: "What necessary dependencies must be installed to run this app?",
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
    },
    {
      type: "input",
      name: "features",
      message: "Enter your project Features",
    },
    {
      type: "input",
      name: "Contributor",
      message: "Please add contributors",
      validate: (ContributorsInput) => {
        if (ContributorsInput) {
          return true;
        } else {
          console.log("Please enter a Contributor or Creator");
          return false;
        }
      },
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Successfully wrote: " + fileName);
  });
}

// TODO: Create a function to initialize app
function init() {
  promptUser()
  .then(function (data) {
    writeToFile("README.md", generatorMarkdown(data));
  });
}

// Function call to initialize app
init();
