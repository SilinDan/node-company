const url = require("url");
const http = require("http");
http.createServer(function (req, res) {
    if (req.url != "/favicon.ico") {
        var result = url.parse(req.url, true);
        console.log(url);

        console.log(result.query.userName);
        console.log(result.query.userAge);
    }
    res.writeHead(200, {
        "Content-Type": "text/html;charset=UTF-8"
    })
    res.write('<h1>这是02url.js的输出</h1>');
    res.end();
}).listen(3000);