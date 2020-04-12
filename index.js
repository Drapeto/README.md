var inquirer = require("inquirer");

const questions = [
    {
        type: "input",
        message: "What is your Github user name?",
        name: "username"
    },
    {
        type: "input",
        message: "What is the title of the project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the description of the project?",
        name: "description"
    },
    {
        type: "input",
        message: "Add your table of contents.",
        name: "table of contents"
    },
    {
        type: "input",
        message: "How do you complete the installation?",
        name: "installation"
    },
    {
        type: "input",
        message: "What is the usage?",
        name: "usage"
    },
    {
        type: "input",
        message: "What is your github license?",
        name: "license"
    },
    {
        type: "input",
        message: "What is your contributing status?",
        name: "contributing"
    },
    {
        type: "input",
        message: "What are the tests?",
        name: "tests"
    },

];
inquirer
    .prompt(questions).then(function (answers) {
        console.log(answers)
    })


function writeToFile(fileName, data) {
}

function init() {

}

init();
