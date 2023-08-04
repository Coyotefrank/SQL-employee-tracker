const inquirer = require('inquirer');


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
                    "view_all_employees",
                    "add employee",
                    "update employee role",
                    "view all departments"
                ]
            },
            {
                type:"text",
                name:"test_text",
                message:"test_text_prompt"
            }
     ]
     ) .then((answers) => {
         console.log({answers})
        //  return answers (console logs on line 35 and 38 will show the users selection in the terminal)
        
        }) .catch((err) => {
            console.log({err})
            throw err
        })
        
    }






    mainPrompt()