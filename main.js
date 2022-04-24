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
    if(_url === '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);


    var dir_files;
    var lists;
    fs.readdir('./data', function (err, files) {
        //handling error
        if(err){
            return console.log(err);
        }
        dir_files = files;
        console.log('1------------------------');
        console.log(files);

        // lists = '<ol>';
        // for(var i = 0; i< dir_files.length;i++){
        //     lists = lists +'<li><a href="/?k=${dir_files[i]}">${dir_files[i]}</a></li>';
        // }
        // lists=lists+'</ol>';
    });


    fs.readFile(`data/${title}`,'utf8',(err, data) => {
        var template = `
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

        
        <h2>${title}</h2>
        <p>${data}</p>
        <p>${dir_files}</p>
        </body>
        </html>
        `;
        response.end(template); 
        //if (err) throw err;
        console.log(data);
      });

    
});
app.listen(3000);       // port 3000