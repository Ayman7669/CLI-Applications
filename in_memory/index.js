//using functions

let todoArr = ["go to gym", "go to market", "go to college"];

function add_todo(todo) {
  todoArr.push(todo);
  console.log("added->",todo)
}

function print_todo() {
  todoArr.forEach((todo) => {
    console.log(todo);
  });
}

function delete_todo(del_todo) {
  const filterArr = todoArr.filter((todo) => {
    return del_todo != todo;
  });
  console.log("deleted ->", del_todo);
  todoArr = [...filterArr];
}

add_todo("go to shop");
print_todo();
delete_todo("go to market");

print_todo();
