const express = require("express");

const PORT = 3000;

//this helps to read the express files
const app = express();

//register view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //here __dirname gets the directory that we are in the index.html file
  res.render("index");
  //res.send("<p>Home page</p>");

  // app.get("/about", (req, res) => {
  //     //res.send('<p>Home page</p>');
  //   });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
  //res.send('<p>Home page</p>');
});

//use is used for middleware functions in express 404 page
app.use((req, res) => {
  res.status(404).render("404");
});

//register view engine
app.listen(PORT, "localhost", () => {
  console.log(`listening for requests on port ${PORT}`);
});
