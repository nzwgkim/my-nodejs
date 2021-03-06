const http = require('http');
const fs = require('fs');
const url = require('url');       // module: 'url'
const { setMaxListeners } = require('events');






const app = http.createServer((request,response)=>{
    var _url = request.url;                             // /?id=HTML 
    var queryData = url.parse(_url, true).query;        // [Object: null prototype] { id: 'HTML' }
    var title = queryData.k;                           // HTML

    console.log(url.parse(_url, true));
    console.log(url.parse(_url, true).query.k);

    // Node.js-18.NodeJS-콘솔에서의 입력값
    // var args = process.argv;
    // console.log(args);
    // console.log(args[2]);



   if(_url === '/'){
        title = 'Welcome';
    }
    else if(_url==="/create")
    {
        
    }
    if(_url === '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);


    var lists;
    var dir_files;

    fs.readdir('./data', function (err, files) {
        //handling error
        if(err){
            return console.log(err);
        }
        dir_files = files;
    });
    
    function templateHtml(title, data, d_file){
        return `
        <!doctype html>
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

        <a href="/create"> create </a>
    
        
        <h2>${title}</h2>
        <p>${data}</p>
        <p>${d_file}</p>
        </body>
        </html>
        `;
    };

    fs.readFile(`data/${title}`,'utf8',(err, data) => {
        var template = templateHtml(title, data, dir_files);
        response.end(template); 
        //if (err) throw err;
        console.log(data);
      });

    
});
app.listen(3000);       // port 3000