const inquirer =require('inquirer'); 
const db = require('./config/connection'); 
//const mysql = require('mysql2')
const cTable = require('console.table');





function init(){
    console.log("Welcome Employee Tracker Database ............/n"); 
    inquirer.prompt([
        {
            name: "myOptions", 
            type:"list", 
            message: "What would you like to do ? ", 
            choices: ["View all Departments", "View all roles", "view all employees","add a department","adda role", "add an employee","update an eomployee role", "Exit"]
        }
    ]).then(answers =>{
        console.log(answers);
        //switch or if else if 
        if(answers.myOptions === "View all Departments"){
            viewAllDepartments();
        }else {
            //for exit 
            console.log("Goodbye ............");
            process.exit(0); 
        }
    })
}


function viewAllDepartments () {

    const sql = `DESCRIBE department`
    db.query(sql,(err,res)=>{
        if (err)  {
        console.log(error)
    }
        else {
        return console.table([sql])
    }
    

    })

}

init(); 
