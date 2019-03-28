var http = require('http');
var url = require("url");
var path = require("path");
var fs = require('fs');
//var qs = require('querystring');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(handle_incoming_request);

function handle_incoming_request(req, res){
	console.log("Incoming request: (" + req.method + ") " + req.url);
	req.parsed_url = url.parse(req.url, true);
	//console.log(req.parsed_url);
	var core_url = req.parsed_url.pathname;
  //console.log(core_url);
  if(core_url.substring(0, 7) == '/calvin'){
    serve_calvin(req, res);
    //console.log("calvin");
    //res.end("calvin");
  } else if(core_url.substring(0, 5) == '/rose'){
    console.log(req.parsed_url.query);
    res.end(JSON.stringify({ name: 'rose' }));
  } else if(core_url.substring(0, 5) == '/anna'){
    var body = '';
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        body = JSON.parse(body);
				console.log(body);
    });
    res.end(JSON.stringify({ name: 'anna' }));
	} else {
		res.writeHead(404, {"Content-Type": "application/json"});
		res.end(JSON.stringify({error: "unknown_resource"}));
	}
}

function serve_calvin(req, res){
	var page_name = req.parsed_url.pathname.substring(0, 8);
  //console.log(page_name);
	res.writeHead(200, { "Content-Type": "text/html"} );
  res.end(fs.readFileSync('app.html'));
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
