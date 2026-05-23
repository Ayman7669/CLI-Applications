const express = require("express");

const app = express();

app.use(express.json());

let todoArr = ["go to gym", "go to market"];

app.get("/todos", (req, res) => {
  res.send(todoArr);
});

app.post("/todo", (req, res) => {
  console.log(req.body);
  todoArr.push(req.body.todo);

  res.send({
    message: "todo added successfully",
  });
});

app.put("/todo", (req, res) => {
  const { existingtodo, updateTodo } = req.body;

  todoArr.forEach((todo, index) => {
    if (existingtodo == todo) {
      todoArr.splice(index, 1, updateTodo);
    }
  });
  res.send({ message: "updated successfully" });
});

app.delete("/todo", (req, res) => {
  const { deletetodo } = req.body;
  todoArr = todoArr.filter((todo) => {
    return todo !== deletetodo;
  });
  res.send({ message: "todo delete successfully" });
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
