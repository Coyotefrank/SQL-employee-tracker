const inquirer = require('inquirer');
const mysql = require ("mysql2");
const {printTable}= require ("console-table-printer");
const db = mysql.createConnection ({
    host: "localhost", 
    user: "root",
    password: "password",
    port: 3306,
    database: "department_db",
})

db.connect (() => {
    mainPrompt ()
})
// const PORT = process.env.PORT || 3001;
// const app = express();


// Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
function mainPrompt() {
    
    inquirer.prompt(
        [
            {
                // this is the questions the user will see and respond to in the terminal 
                type:"list",
                name: "user_selection",
                message: "what would you like to do?",
                choices: [
                    "view all employees",
                    "add employee",
                    "view all roles",
                    "update employee role",
                    "view all departments"
                ]
            },
           
     ]
     ) .then((answers) => {
         console.log({answers})
         if (answers.user_selection === "view all departments"){
            viewDepartment()
         }
         else if(answers.user_selection === "view all employees"){
            viewEmployee()
         }
         else if (answers.user_selection === "view all roles"){
            viewRole()
         }
         else if(answers.user_selection==="add employee"){
            addEmployee()
         }
         
         else if(answers,user_selection==="update employee role"){
            updateEmployee()
         }
        //  return answers (console logs on line 35 and 38 will show the users selection in the terminal)
        
        }) .catch((err) => {
            console.log({err})
            throw err
        })
        
    }
function viewDepartment() {
 db.query("select * from department", (err,data) => {
    printTable(data)
    mainPrompt()
 })
 
}    
function viewEmployee() {
    db.query("select * from employee", (err,data) => {
        printTable(data)
        mainPrompt()
    })
 }
function viewRole(){
    db.query("select * from role", (err,data) =>{
        printTable(data)
        mainPrompt()
    })
}
function addEmployee(){
    inquirer.prompt([
        {
            type: "input",
            massage: "what is the employees first name?",
            name: "first_name"
        },
        {
        type: "input",
        massage: "what is the employees last name?",
        name: "last_name"
        },
        {
            type: "input",
            message: "what is the role id?",
            name: "role_id"
        },
        {
           type: "input",
           message: "what is the manager id?",
           name: "manager_id"
        }
    ])
    .then(answer =>{
        db.query("insert into employee(first_name,last_name,role_id,manager_id)values(?,?,?,?)",[answer.first_name,answer.last_name,answer.role_id,answer.manager_id],(err)=>{
            mainPrompt()
        })
    })
}
function updateEmployee(){
    inquirer.prompt([
        {
            type: "input",
            massage: "what is the employees first name?",
            name: "first_name"
        },
        {
            type: "input",
            message: "what is the employees first name?",
            name: "last_name"
        },
        {
            type: "input",
            message: "what is the id of the role you wish to switch into?",
            name: "role_id"
        }
    ])
    .then(answer =>{
        db.query("insert into role(first_name,last_name,role_id,manager_id)values(?,?,?,?)",[answer.first_name,answer.last_name,answer.role_id,answer.manager_id],(err)=>{
            mainPrompt()
        })
    })
}


