var http = require('http');
var options = {
  hostname: 'www.google.com',
  port: 80,
  path: '/',
  method: 'GET'
};
console.log(options);
console.log('sending request');

 var req = http.request(options, function(res){
    res.setEncoding('utf8');
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
     
    if(res.statusCode=='200' || res.statusCode=='301'){
			console.log('ok');
		} else
		console.log('not ok');
        
        res.on('data', function (chunk) {
          console.log('BODY: ' + chunk);
        });

		req.on('error', function(e) {
		  console.log('not ok');
          console.log(e);
		})
        
  
  });   
       req.shouldKeepAlive = false;
	   req.end();

