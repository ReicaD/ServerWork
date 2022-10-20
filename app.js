const express = require("express");
const app = express();
const morgan = require('morgan');
//register view engine
app.set("view engine", "ejs");

const PORT = 3000;
//we add next to make sure that our function above can be able to work/render on the bowser
app.use((req, res, next) => {
  console.log("new request made:");
  console.log("host:", req.hostname);
  console.log("path:", req.path);
  console.log("method:", req.method);
  next();
});
app.use((req, res, next) => {
  console.log("in the next middleware:");
  next();
});
//this helps to read the express files
// const app = express();

app.get("/", (req, res) => {
  // here __dirname gets the directory that we are in the index.html file
  const blogs = [
    { tittle: "Money Rules", snippet: "All You Need to know" },
    { tittle: "All regulations", snippet: "See more" },
    { tittle: "See tricks", snippet: "About money life" },
  ];
  res.render("index", { tittle: "Home", blogs });
  //res.send("<p>Home page</p>");

  // app.get("/about", (req, res) => {
  //     //res.send('<p>Home page</p>');
  //   });
});
app.get("/about", (req, res) => {
  res.render("about", { tittle: "about" });
});

// app.get("/about-us", (r eq, res) => {
//   res.redirect("/about");
//   //res.send('<p>Home page</p>');
// });
app.get("/blogs/create", (req, res) => {
  res.render("create", { tittle: "create new Blog" });
});

//use is used for middleware functions in express 404 page
app.use((req, res) => {
  res.status(404).render("404", { tittle: "404" });
});

//register view engine
app.listen(PORT, "localhost", () => {
  console.log(`listening for requests on port ${PORT}`);
});
