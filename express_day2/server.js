const express = require("express");

const app = express();

app.get("/res", (req, res) => {
  const id = req.query.id;
  res.send(`id is ${id}`);
});

app.get("/cal", (req, res) => {
  const q = req.query.q;
  const color = req.query.color;
  res.send(`result to show ${q} and the color is ${color}`);
});

app.get("/calculator/:operator/:a/:b", (req, res) => {
  const { operator, a, b } = req.params;

  if (operator == "addition") {
    const result = parseInt(a) + parseInt(b);

    res.json({ result: result }).status(200);
  } else if (operator == "multiply") {
    const result = parseInt(a) * parseInt(b);
    res.json({ result: result }).status(200);
  } else if (operator == "subract") {
    const result = parseInt(a) - parseInt(b);
    res.json({ result: result }).status(200);
  } else if (operator == "divide") {
    const result = parseInt(a) / parseInt(b);
    res.json({ result: result }).status(200);
  } else {
    res.status(400).json({ message: "invalid operator" });
  }
});

PORT = 8080;
app.listen(PORT, () => {
  console.log("server is running at", PORT);
});

//localhost:8080/cal?q=apple&color=black
//after the url use ( ? ) and query and seperate multiple parameter by &
