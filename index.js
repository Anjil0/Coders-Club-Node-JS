const express = require("express"); //import expresss function
const app = express(); // initialize express
const route = express.Router();
// making json file to read so requiring fs library
const fs = require("fs");
app.use(express.static("public")); // to use css do this and folder

// setting viewengine to view ejs file
app.set("view engine", "ejs");

function fetchdata() {
  const data = fs.readFileSync("./Components/book.json");
  const dataJSON = JSON.parse(data);
  return dataJSON;
}

app.get("/", (req, res) => {
  const books = fetchdata();
  res.render("pages/index", { books: books });
});

// uploading to the website with port 1070
app.listen(1070, () => {
  console.log("##-- Connected to the port 1070 --##");
});
