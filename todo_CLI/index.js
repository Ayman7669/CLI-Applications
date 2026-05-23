//in-memory todo using commander library

const { program } = require("commander");

let todo_arr = ["go to gym"];
program
  .name("TODO-List")
  .description("this is CLI based todo list")
  .version("1.0.0");
program
  .command("add")
  .description("command to add new todo with an argument")
  .argument("<new_todo>", "new task variable")
  .action(() => {
    todo_arr.push();
    console.log("add command called");
  });

program
  .command("show")
  .description("command to show all the todos")
  .action(() => {
    console.log(todo_arr);
  });

program
  .command("delete")
  .description("command to delete todo")
  .argument("<todo_name>", "this has to be deleted")
  .action((todo_name) => {
    let filteredTodo = todoArr.filter((todo) => {
      return todo_name !== todo;
    });

    todoArr = [...filteredTodo];
    console.log("deleted ");
  });
program.parse();
