//1.fs.stat
//下面是快速查找：
// fs.stat 检测是文件还是目录
// fs.mkdir 创建目录
// fs.writeFile 创建写入文件（会覆盖原有的）
// fs.appendFile 追加文件（在原有的后面添加）
// fs.readFile 读取文件
// fs.readdir 读取目录
// fs.rename 重命名（还有剪切功能）
// fs.rmdir 删除目录
// fs.unlink 删除文件

const fs = require('fs');

// fs.stat('index.js', (error, stats) => {
//     if (error) {
//         console.log(error);
//         return false;
//     } else {
//         console.log(stats);
//         console.log(`文件:${stats.isFile()}`);
//         console.log(`文件夹:${stats.isDirectory()}`);
//         return false;
//     }
// })

// fs.mkdir('css', (error) => {
//     if (error) {
//         console.log('创建目录失败！');
//         return false;
//     } else {
//         console.log('创建目录成功!');
//     }
// })

// fs.writeFile('index.js', '我总是那么可爱', (error) => {
//     if (error) {
//         console.log('写入失败!');
//         return false;
//     } else {
//         console.log('写入成功!');
//     }
// })

// fs.rename('index.js', 'new_index.js', (error) => {
//     if (error) {
//         console.log('更名失败!');
//         return false;
//     } else {
//         console.log('更名成功!');
//     }
// })

fs.rename('new_index.js', 'node_modules/new_index.js', (error) => {
    if (error) {
        console.log('剪切失败!');
        return false;
    } else {
        console.log('剪切成功!');
    }
})