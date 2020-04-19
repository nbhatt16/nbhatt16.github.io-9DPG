// NPM Modules
const inquirer = require("inquirer");
const fs = require("fs");

// Local Modules
const render = require("./lib/htmlrender");

// Constructors
const Manager = require("./lib/constructors/Manager");
const Engineer = require("./lib/constructors/Engineer");
const Intern = require("./lib/constructors/Intern");

// Global Variables
// const teamMembers = [
//     new Manager("Brent", 1, "brent@trilogyed.com", 200),
//     new Engineer("Tucker", 2, "tbeauchamp@2u.com", "tuckerbeauchamp"),
//     new Intern("Becky", 3, "becky@becky.com", "UofA"),
//     new Intern("Shelly", 4, "shelly@shelly.com", "UofA")
// ];
const teamMembers = [];
/***
 * THIS PROJECT IS NOT COMPLETE.
 * YOU WILL NEED TO BUILD YOUR HTML LAYOUTS
 * PROMPT THE USER FOR ALL OF THEIR DIFFERENT TEAM MEMBERS
 */
// inquirer.prompt([
//     {
//         type:"input",
//         name: "username",
//         message: "What is the employee's name?"
//     },
//     {
//         type:"number",
//         name: "id",
//         message: "What is the employee's ID number?"
//     },
//     {
//         type:"input",
//         name: "title",
//         message: "What is the employee's title?"
//     },



// ]).then(function(response){
//     const fileData = JSON.stringify(response, null, 2);
//     fs.writeFile("test.json", fileData, function(err){
//         if (err){
//             console.log(err);
//         }
//     })
//     console.log(response);
// });

async function init() {
    const manager = await buildManager();
    teamMembers.push(new Manager(manager.name, manager.id, manager.email, manager.officeNumber));
    promptForEmployee();
}

init();

function buildManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your manager's name?"
        },
        {
            type: "number",
            name: "id",
            message: "What is your manager's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your manager's email?"
        },
        {
            type: "number",
            name: "officeNumber",
            message: "What is your manager's officeNumber?"
        },
    ]).then(function (manager) {
        teamMembers.push(
            new Manager(manager.name, manager.id, manager.email, manager.officeNumber)
        );
        promptForEmployee();
    });
};

function promptForEmployee() {
    inquirer.prompt([
        {
            name: "employee",
            type: "list",
            message: "What Employee would you like to create?",
            choices: [
                "Add Intern",
                "Add Engineer",
                "Build HTML"
            ]
        }
    ]).then(employeeData => {
        if (employeeData.employee === "Add Intern") {
            buildIntern();
        } else if (employeeData.employee === "Add Engineer") {
            buildEngineer();
        } else {
            render(teamMembers);
        }
    });
};

function buildIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your intern's name?"
        },
        {
            type: "number",
            name: "id",
            message: "What is your intern's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "What is your intern's school?"
        },
    ]).then(function (intern) {
        teamMembers.push(
            new Intern(intern.name, intern.id, intern.email, intern.school)
        );
        promptForEmployee();
    });
};

function buildEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your engineer's name?"
        },
        {
            type: "number",
            name: "id",
            message: "What is your engineer's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your engineer's email?"
        },
        {
            type: "input",
            name: "gitHub",
            message: "What is your engineer's GitHub username?"
        },
    ]).then(function (engineer) {
        teamMembers.push(
            new Engineer(engineer.name, engineer.id, engineer.email, engineer.gitHub)
        );
        promptForEmployee();
    });
};