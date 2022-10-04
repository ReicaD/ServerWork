//this is used to create a server
const http = require("http");
const fs = require("fs");

//by adding a constant its going to be installed request is used to reque
const server = http.createServer((req, res) => {
  //this method will return get
  console.log(req.url, req.method);
  //setting header content type
  res.setHeader("Content-Type", "text/html");
//switch is used to see what url the user has visited on the site depending on the case targeted it can either bring a 404.html or views the file index or about ..html
  let path = '../Views/';
  switch(req.url){
    case '/': 
    path += 'index.html';
    break;
    case '/about':
      path += 'about.html';
      break;
      default:
        path += '404.html';
        break;
  }

  //   res.write('<head><link rel="stylesheet" href="#"></head>');
  //   res.write('<p>We are all one, human</p>');
  //   res.write('<p>The world is us</p>');
  //   res.end();

  // send an Html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      //res.write("<p>The world is, us</p>");
      res.end();
    }
  });
});

const PORT = 3000;
server.listen(PORT, "localhost", () => {
  console.log(`listening for requests on port ${PORT}`);
});
