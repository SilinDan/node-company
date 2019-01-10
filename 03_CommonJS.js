const http = require("http");
const tools1 = require('./03_tool-add');

http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html;charset=UTF-8"
    });

    res.write('<h1>这是03_CommonJS的输出</h1>');
    console.log(tools1.add(2, 2, 1))
    res.end();
}).listen(3000);