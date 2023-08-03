const db = require("../config")

const employeeService = {

    viewAllEmployees(){
        console.log("viewing all employees")
        db.promise().query("select * from employee").then((result) => {
            console.log(result)
            return result
        })
    }
}

module.exports=employeeService