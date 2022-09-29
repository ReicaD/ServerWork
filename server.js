//this is used to create a server
const http = require('http');

//by adding a constant its going to be installed request is used to reque
 const server = http.createServer((req , res) => {
     //this method will return get
console.log(req.url, req.method);
//setting header content type
req.setHeader('Content-Type', 'text/plain');


res.write('We are all one ', 'human');
res.end();
 });


server.listen(3000,'localhost',() => {
 console.log('listening for requests on port 3000');
});
