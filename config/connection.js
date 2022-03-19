console.log("This is where my sql connection goes");
const mysql = require('mysql2');
//require env file 
require('dotenv').config();

const connection = mysql.createConnection({
    host: "localhost",
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

module.exports = connection; 