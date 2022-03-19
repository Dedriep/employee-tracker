const inquirer =require('inquirer'); 
//const db = require('./config/connection'); 

function init(){
    console.log("Welcome Employee Tracker Database ............/n"); 
    inquirer.prompt([
        {
            name: "myOptions", 
            type:"list", 
            message: "What would you like to do ? ", 
            choices: ["View all Departments", "Exit"]
        }
    ]).then(answers =>{
        console.log(answers);
        //switch or if else if 
        if(answers.myOptions === "View all Departments"){
            console.log("Coming soon....")
        }else {
            //for exit 
            console.log("Goodbye ............");
            process.exit(0); 
        }
    })
}

init(); 
