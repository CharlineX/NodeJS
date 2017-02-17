var a = 1,
	b = 2,
	c = [a,b];
if(1){
	console.log(1);
}
console.log(1+c.join(""));
while(a){
	a = 0;
	console.log(a);
}
function f(a,b){
	return a*b;	
}
console.log(f(2,3))
function ct(){
	this.a = 233;
}
console.log(new ct);
//获取当前执行的文件的路径
console.log(__filename);
//获取当前执行的文件所属文件夹的路径
console.log(__dirname)
//获取全局对象
// console.log(global);

// require(""/*依赖的模块名称*/)
console.log(require);
console.log(module);
var moduleB = require("./b"),
	test = require("./b").test;
console.log(moduleB, typeof moduleB, moduleB.test,test);

var moduleC = require("./c"),
	name = moduleC.apply({
		name : 666
	});
console.log(name);
console.log(require("express"/*node_modules文件夹中子文件的文件名*/));
console.log(require("fresh"));
// var express = require("express"),
// 	app = express();
// app.get('/asdf'/*路由地址*/, function (req, res) {
//   res.send('<h1>Hello 哈哈</h1><div>嘻嘻</div>'/*显示在body里的innerHTML*/);
// });
 
// app.listen(30000/*端口号*/)