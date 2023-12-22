const express = require("express"); //import expresss function
const app = express(); // initialize express
const route = express.Router();
// making json file to read so requiring fs library
const fs = require("fs");

// setting viewengine to view ejs file
app.set("view engine", "ejs");

function fetchdata() {
  const data = fs.readFileSync("./Components/book.json");
  const dataJSON = JSON.parse(data);
}

app.get("/", (req, res) => {
  fetchdata();
  res.render("pages/index.ejs");
});

// uploading to the website with port 1070
app.listen(1070, () => {
  console.log("##-- Connected to the port 1070 --##");
});
