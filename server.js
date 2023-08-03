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
                type:"list",
                name: "user_selection",
                message: "welcome to the employee management app please make a selection",
                choices: [
                    "view_all_employees",
                    "exit"
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
        //  return answers 
        
        }) .catch((err) => {
            console.log({err})
            throw err
        })
        
    }






    mainPrompt()