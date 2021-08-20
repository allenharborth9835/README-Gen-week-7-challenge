// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
  {
    type:'input',
    name:'title',
    message:'what is the name of your project (required)',
    validate: nameInput => {
      if(nameInput){
        return true;
      }else{
        console.log('Please enter your project name!');
        return false;
      }
    }
  },
  {
    type:'input',
    name:'description',
    message:'enter Description of project (required)',
    validate: descInput => {
      if(descInput){
        return true;
      }else{
        console.log('Please enter your project Description!');
        return false;
      }
    }
  },
  {
    type:'input',
    name:'installation',
    message:'enter instruction for installation',
  },
  {
    type:'input',
    name:'usage',
    message:'enter instruction and usage',
  },
  {
    type:'input',
    name:'contributing',
    message:'enter enter any contributions',
  },
  {
    type:'input',
    name:'tests',
    message:'enter any tests',
  },
  {
    type: 'checkbox',
    name:'license',
    message:'choose your license',
    choices:['Unlicensed', 'MIT', 'Boost 1.0', 'Apache 2.0',
     'Mozilla 2.0', 'GNU LGPLv3', 'GNU GPLv3', 'GNU AGPLv3']
  },
  {
    type:'input',
    name:'github',
    message:'enter your github',
  },
  {
    type:'input',
    name:'email',
    message:'enter your email',
  }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`./dist/${fileName}.md`,data,err =>{
    if(err) throw err
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(portfolioData =>
      generateMarkdown(portfolioData)
    )
    .then(ReadMeData =>
      writeToFile("ReadMe", ReadMeData)
    )
}

// Function call to initialize app
init();
