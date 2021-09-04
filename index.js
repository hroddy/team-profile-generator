const inquirer = require("inquirer");
const fs = require('fs');
const template = require('./template');
const Employee = require('./lib/employee');
const Manager = require("./lib/manager");
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const team = [];

function appMenu() {

    //first step, create the manager for the team
   function createManager () {
       inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the managers's office number?"
        }
       ]).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        team.push(manager);
        //call createEngingeers, as every team is required to have at least one
        createEngingeer();
       })
   }
   function createTeam() {
       //prompt would you like to list an engineer, an intern, or is your team complete?
      inquirer.prompt([
        {
            type: 'list',
            name: 'addAnother',
            message: "Would you like to add another employee?",
            choices: ["Add an engingeer", "Add an intern", "Done"]
        }
        ])
        
       //switch on response
       .then(response => {switch (response.addAnother) {
           //if they call engingeeer, createEngineer();
           case "Add an engingeer":
               createEngingeer();
               break;
            //if they call intern, createIntern();
            case "Add an intern":
               createIntern();
               break;
            //if done, render team html
            case "Done":
                renderTeam();
                break;
            default:
                break;
       }}) 
   }

   function createEngingeer() {
        inquirer.prompt ([
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the engineer's id?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the engingeer's email address?"
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's Github url?"
            }
        ]).then(answers => {
            //push engineer into team array
            const engingeer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            team.push(engingeer);
            //then loop back to createTeam prompt to check if there are any more team members to add
            createTeam();
       })
   }

   function createIntern() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?"
        },
        {
            type: 'input',
            name: 'school',
            message: "Which school does the intern attend?"
        }
    ]).then(answers => {
        //push intern into team array
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        team.push(intern);
        //then loop back to createTeam prompt to check if there are any more team members to add
        createTeam();
   })
   }

   function renderTeam() {
    fs.writeFileSync('team.html', template(team), 'utf-8')
   }

   createManager();
   
}

//run the team creation menu from the begining, starting with creating a manager
appMenu();