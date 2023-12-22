const express = require("express"); //import expresss function
const app = express(); // initialize express
const route = express.Router();

// setting viewengine to view ejs file
app.set("view engine", "ejs");

/////////////////////////////
// app.get("/", (req, res) => {
//   res.send("hello world");
// });

app.get("/", (req, res) => {
  res.render("pages/index.ejs");
});



// uploading to the website with port 1070
app.listen(1070, () => {
  console.log("##-- Connected to the port 1070 --##");
});
