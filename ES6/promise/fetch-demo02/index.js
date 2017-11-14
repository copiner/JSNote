
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const path = require('path');
const fs = require("fs");
var Url = require("url")
//var joinPath = path.join(__dirname, 'json/db.json');

var str, html;
fs.readFile( 'database/db.json', 'utf8', (err, data) => {
     if(err) console.log(err);
     str = JSON.stringify(data);
});
fs.readFile( 'public/index.html', 'utf8', (err, data) => {
     if(err) console.log(err);
     html = data;
});

const server = http.createServer((req, res) => {
  var pathname=__dirname+url.parse(req.url).pathname;
  if (pathname.charAt(pathname.length-1)=="/"){
       pathname+="index.html";
   };
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  //res.write(JSON.parse(str));
  res.write(html);
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
