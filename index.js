import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "todo",
            message: "What do you want to do?"
        },
        {
            type: "confirm",
            name: "addmore",
            message: "add what you want to do more",
            default: false
        },
    ]);
    const { todo, addmore } = answers;
    console.log(answers);
    loop = addmore;
    if (todo) {
        todos.push(todo);
    }
    else {
        console.log("kindly enter a valid todo");
    }
    if (todos.length > 0) {
        console.log("your todo list: \n");
        todos.forEach(todo => {
            console.log(todo);
        });
    }
    else {
        console.log("your todo list is empty");
    }
}
console.log(todos);
