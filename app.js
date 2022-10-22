const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require('./models/blog')

//this helps to read the express files
const app = express();

//adding mongolAtlas File that connects to mongoldb
const dbURI =
  "mongodb+srv://Node-Tuts1:NodeToGo225@serverworksss.m7ixa5s.mongodb.net/Node-Tuts1?retryWrites=true&w=majority";

//this function below helps to connect database created. the added argument is to stop deprication warnings
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

//register view engine
app.set("view engine", "ejs")

//middle ware and static files
app.use(express.static("public"));
app.use(morgan("dev"));

//mongoose and mongo sandbox routes

app.get('./add-blog',(req, res) =>{
const blog = new Blog ({
  tittle:'new blog',
  snippet:'about money blog',
 body:'How to Save Money'
});

blog.save()
.then((result)=>{
  res.send(result)
}) 
.catch(err)
console.log(err)
})

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

// app.get("/about-us", (req, res) => {
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
// app.listen(PORT, "localhost", () => {
//   console.log(`listening for requests on port ${PORT}`);
// });
