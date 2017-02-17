var fs = require("fs");
//异步创建文件夹
fs.mkdir("./a",function(err){
	console.log(err);
});
//同步创建文件夹
try{
	fs.mkdirSync("./c");//同步，尽量少使用同步的API操作，阻塞JS代码的向下执行
}catch(e){
	console.log(e);
}
//异步
fs.appendFile("./a/o.txt","123",function(err){
	err && console.log(err);
});
//同步
try{
	fs.appendFileSync("./a/a.txt","233");
}catch(e){
	console.log(e);
}
//异步创建或覆盖
fs.writeFile("./a/o.txt","666",function(err){
	err && console.log(err);
});
//异步读取
fs.readFile("./a/o.txt","utf-8",function(err,data){
	console.log(err,data.toString());
})
//异步删除文件
fs.rmdir("../server/c",function(err){
	console.log(err);
})
//异步删除文件----------关于文件的删除后不能还原
fs.unlink("./a/a.txt",function(err){
	console.log(err);
})
//查看文件的相关信息
fs.stat("../server/server.js",function(err,data){
	console.log(err,data);
})

fs.readdir("C:\\Users\\admin\\Desktop\\node\\fs",function(err,files){
	console.log(err,files);
});
fs.readdir("../server",function(err,files){
	console.log(err,files);
});
