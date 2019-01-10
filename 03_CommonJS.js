const http = require("http");
//方法①，直接在根目录下写方法库
const tools1 = require('./03_tool-add');

//方法②，在node_modules里写方法库，
//如果 Node 在当前目录没找到 tool.js 文件，则会去 node_modules 里面去查找
const tools2 = require('03_tool-multiply');

//方法③，定义自己的工具库，需要有package.json(命令行npm init --yes)；
const tools3 = require('jsliang-module');

http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html;charset=UTF-8"
    });

    res.write('<h1>这是03_CommonJS的输出</h1>');
    console.log(tools1.add(2, 2, 1))
    console.log(tools3.multiply(2, 4));
    res.end();
}).listen(3000);