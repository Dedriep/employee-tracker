DROP DATABASE IF EXISTS employeetrackerdb; 

CREATE DATABASE employeetrackerdb; 

USE employeetrackerdb; 

--CReate the three tables 
CREATE TABLE department(
    id INTEGER AUTO_INCREMENT PRIMARY_KEY,
    name VARCHAR(30) NOT NULL
)

CREATE TABLE role (
    id INTEGER AUTO_INCREMENT PRIMARY_KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL (10,2) NOT NULL,
    department_id INTEGER NOT NULL, 
    FOREIGN KEY (department_id)
        REFERENCES department(id)
        ON DELETE CASCADE
)

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY_KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL, 
    manager_id INTEGER , 
    FOREIGN KEY (role_id)
        REFERENCES role(id)
        ON DELETE CASCADE,

    FOREIGN KEY (manager_id)
        REFERENCES employee(id)
        ON DELETE SET NULL,
    
)