const express = require('express')


//this helps to read the express files
const app = express();


//listening to requests
app.listen(3000);

app.get('/',(req,res)=> {
//res .sendFile('./Views/404.html')
  //res.send('<p>Home page</p>');

app.get('/about',(req,res)=> {

  //res.send('<p>Home page</p>');

}
