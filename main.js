var http = require('http');
var fs = require('fs');
var url = require('url');       // module: 'url'

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;

    console.log(title);
   if(_url == '/'){
    title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);

    fs.readFile(`data/${queryData.id}`,'utf8',(err, data) => {
        var template = `<!doctype html>
        <html>
        <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
        </head>
        <body>
        <h1><a href="/">WEB</a></h1>
        <ol>
            <li><a href="/?id=HTML">HTML</a></li>
            <li><a href="/?id=CSS">CSS</a></li>
            <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ol>
        <h2>${title}</h2>
        <p>${data}</p>
        </body>
        </html>
        `;
        response.end(template); 
        //if (err) throw err;
        console.log(data);
      });

    
});
app.listen(3000);       // port 3000