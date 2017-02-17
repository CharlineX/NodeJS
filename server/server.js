// var express = require("express"),
// 	app = express();
// app.get('/asdf'/*路由地址*/, function (req, res) {
// 	res.send('<h1>Hello 哈哈</h1><div>嘻嘻</div>'/*显示在body里的innerHTML*/);
// });
 
// app.listen(30000/*端口号*/);

var express = require("express"),
	urlencoded = require("body-parser").urlencoded,
	fs = require("fs"/*文件系统，nodejs内部模块*/),
	app = express(); 
// fs.mkdir("./a",function(){
// 	console.log("success");
// });

app
	.use(urlencoded({
		extended : 1
	}))
	.get('/', function (req, res) {
		fs.readFile("./form.html","utf-8",function(err,file){
			res.send(file);
		});
		// res.send("首页");
	})
	.get('/signUp', function (req, res) {
		res.send("注册");
	})
	.get('/signIn', function (req, res) {
		res.send("登录");
	})
	.post('/upload', function (req, res){
		// console.log(req.body);
		res.send(["您的文件为",req.body.file,"您的用户名为",req.body.user].join(""));
	})
	.listen(30000,function(){
		console.log("Server started on port 30000");
	});
	// fs.appendFileSync("./form.html","<form></form>")
// var App = {
// 	get : function(path,callback){
// 		console.log(path,callback.toString());
// 		return this;
// 	}
// 	listen : function(port,callback){
// 		callback();
// 	}
// }