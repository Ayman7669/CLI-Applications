
//manually changing CLI Application

const fs = require("fs");
const path = require("path");

// const filepath = path.join(__dirname,"fruit.txt");
// console.log(filepath)

const filepath = process.argv[3];
const data = fs.readFileSync(filepath, "utf8");
console.log("this is data", data);

// fs.writeFileSync(filepath,oldData + "hello world" ,"utf8")
// const data = fs.readFileSync(filepath,"utf8");
// console.log(data);

function Letter_Count() {
  const datalength = data.length;
  console.log("number of letters are", datalength);
}

function line_count() {
  const linecount = data.split("\n").length;
  console.log("The number of line are:", linecount);
}

function word_count() {
  const lineArr = data.split("\n");
  console.log(lineArr);
  let words = 0;
  lineArr.forEach((line) => {
    words = words + line.split(" ").length;
  });
  console.log("These are the number of words:", words);
}

if (process.argv[2] == "line") {
  Letter_Count();
} else if (process.argv[2] == "word") {
  word_count();
} else if (process.argv[2] == "letter") {
  Letter_Count();
}

//node index.js word C:\Users\ayman\Desktop\CLI\fruit.txt
//can also use alias counter=node index.js 
// then counter word file path. 