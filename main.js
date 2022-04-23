const http = require('http');
const fs = require('fs');
const url = require('url');       // module: 'url'

const app = http.createServer((request,response)=>{
    var _url = request.url;                             // /?id=HTML
    //console.log(+_url);         
 
    var queryData = url.parse(_url, true).query;        // [Object: null prototype] { id: 'HTML' }
    //console.log(queryData);     

    var title = queryData.k;                           // HTML
    //console.log(title);    

   if(_url == '/'){
       title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);

    fs.readFile(`data/${title}`,'utf8',(err, data) => {
        var template = `<!doctype html>
        <html>
        <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
        </head>
        <body>
        <h1><a href="/">WEB</a></h1>
        <ol>
            <li><a href="/?k=HTML">HTML</a></li>
            <li><a href="/?k=CSS">CSS</a></li>
            <li><a href="/?k=JavaScript">JavaScript</a></li>
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