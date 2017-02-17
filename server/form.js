var http=require("http"),
	readFile=require("fs").readFile,
	urlencoded=require("body-parser").urlencoded;

function _readFile(path,cb){
	readFile(path,"utf-8",function(err,file){
			cb(err ? "读取页面失败"  : file)
		})
}
require("express")()
	.use(urlencoded({
		extended:1
	}))
	.get("/sycnForm",function(req,res){
		_readFile("./sycnForm.html",res.end.bind(res));
	})
	.get("/form",function(req,res){
		_readFile("./form.html",res.end.bind(res));
	})
	.get("/upload",function(req,res){
		res.send(["您的文件为",req.query.file,"您的用户名为",req.query.user].join(""));
	})
	.post("/upload",function(req,res){
		res.end(["您的文件为",req.body.file,"您的用户名为",req.body.user].join(""));
	})
	.get("/signUp",function(req,res){
		_readFile("./signUp.html",res.end.bind(res));
	})
	.post("/upload",function(req,res){
		res.send("收到注册请求");
	})
	.get("/code",function(req,res){
		res.send("666888");
	})
	.listen(30000,function(){
		console.log("success  started on port 30000")
	})