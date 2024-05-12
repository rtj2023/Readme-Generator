// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');




// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the project title?",
        name: "title",

    },
    {
        type: "input",
        message: "Please briefly describe your project: ",
        name: "description",
    },

    {
        type: "input",
        message: "What files will you install?",
        name: "installation",

    },
    {
        type: "input",
        message: "How will this project be used?",
        name: "usage",
    },
    {
        type: "list",
        message: "What is the license for this project?",
        name: "license",
        choices: ['MIT', "none"],
    },

    {
        type: "input",
        message: "Who contributed to this project?",
        name: "credits"
    }
    {
        type: 'input',
        name: 'projTest',
        message: "What test data do you offer?",
    },
    {
        type: "input",
        message: "Please enter your email address: ",
        name: "questions",
    },

    {
        type: "input",
        message: "Please enter your GitHub profile link: ",
        name: "github",
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log("Success!")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log("Your README file is generating!")
            writeToFile("README.md", generateMarkdown(answers));
        })
}

// Function call to initialize app
init();
