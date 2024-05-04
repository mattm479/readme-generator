// Package imports
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions to ask user to populate README
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please give a description of your project"
    },
    {
        type: "input",
        name: "installation",
        message: "Please give instructions for how to install this project"
    },
    {
        type: "input",
        name: "usage",
        message: "Please give information on how to use this project"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please enter the guidelines for contributing to this project"
    },
    {
        type: "input",
        name: "tests",
        message: "Please give instructions for how to test this project"
    },
    {
        type: "list",
        name: "license",
        message: "Please select your license from the list below",
        choices: [
            "Apache 2.0",
            "BSD 3",
            "GNU GPL 3",
            "ISC",
            "MIT",
            "Mozilla 2.0",
            "None"
        ]
    },
    {
        type: "input",
        name: "githubUsername",
        message: "Please enter your GitHub username"
    },
    {
        type: "input",
        name: "emailAddress",
        message: "Please enter your email address"
    }
];

// Function call to write README information to specified file
function writeToFile(fileName, data) {}

// Function call to prompt user for README information
function init() {}

// Function call to initialize app
init();
