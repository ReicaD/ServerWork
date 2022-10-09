const express = require("express");

//this helps to read the express files
const app = express();

//register view engine
app.set('view engine','ejs');

//listening to requests
app.listen(3000);

app.get("/", (req, res) => {
    //here __dirname gets the directory that we are in the index.html file
  res.sendFile("../Views/index.html",{root: __dirname});
  //res.send("<p>Home page</p>");

  //   app.get("/about", (req, res) => {
  //     //res.send('<p>Home page</p>');
  //   });

  app.get("/about-us",(req,res)=>{
      res.redirect("/about")
  })
});

app.get("/about", (req, res) => {
    res.sendFile("../Views/about.html",{root: __dirname});
  //res.send('<p>Home page</p>');
   
});

//use is used for middleware functions in express 404 page
app.use((req,res)=>{
    res.status(404).sendFile("../Views/404.html",{root: __dirname})
});
