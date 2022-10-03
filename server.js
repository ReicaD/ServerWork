//this is used to create a server
const http = require("http");

//by adding a constant its going to be installed request is used to reque
const server = http.createServer((req, res) => {
  //this method will return get
  console.log(req.url, req.method);
  //setting header content type
  res.setHeader("Content-Type", "text/plain");
 
  res.write("We are all one, human");
  res.end();
});

const PORT = 3000;
server.listen(PORT, "localhost", () => {
  console.log(`listening for requests on port ${PORT}`);
});
