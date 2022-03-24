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
        } if (answers.myOptions === "View all roles") {
            allroles()
        }
        
        
        else {
            //for exit 
            console.log("Goodbye ............");
            process.exit(0); 
        }
    })
}




function viewAllDepartments () {

    const sql = `SELECT * FROM department`
    db.query(sql,(err,res)=>{
        if (err)  {
        console.log(error)
    }
        else {
        return console.table(res)
    }
    

    })

}


function allroles (){
    //const sql = `SELECT * FROM role LEFT JOIN department ON role.department_id =department.id` 
    const sql = `SELECT role.*, department_name
    FROM role
    LEFT JOIN department ON role.department_id =department.id` 


    db.query(sql,(err,res)=>{
        if (err)  {
        console.log(error)
    }
        else {
        return console.table(res)
    }
    

    })
}



init(); 
