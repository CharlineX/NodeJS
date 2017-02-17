signUp.onclick=function(){
	ajax({
		url:"/signUp",
		data:{
			user:userSignUp.value,
			password:passwordSignUp.value
		},
		success:function(data){
			console.log(data)
		} 
	})
};
getUsers.onclick=function(){
	ajax({
		url : "/getUsers",
		success:function(data){
			console.log(data)
		}
	})
}
signIn.onclick = function(){
	ajax({
		url : "/signIn",
		data:{
			user : userSignIn.value,
			password:passwordSignIn.value
		},
		success :function(data){
			console.log(data.message)
			data.code || (document.title="Hello"+data.data)
		}
	})
}
//ajax
function ajax(option){
	var xhr = new XMLHttpRequest,
		type = option.type || "get",
		url = option.url,
		data = option.data,
		dataType = option.dataType || "json",
		success = option.success,
		error = option.error,
		isGet = +(type === "get");
	// 将对象字面量转换为location.search形式的查询字符串
	function serialize(obj){
		var i,
			arr = [];
		for(i in obj){
			arr.push(["&", i, "=", obj[i]].join(""));
		}
		return arr.join("").slice(1);
	}
	xhr.onreadystatechange = function(){
		var responseText;
		if(xhr.readyState === 4){
			responseText = xhr.responseText;
			if(xhr.status >= 200 && xhr.status < 300){
				typeof success === "function" && success.call(option, dataType === "json" ? eval(["(", responseText, ")"].join("")) : responseText);
			}else{
				typeof error === "function" && error.call(option, responseText);
			}
		}
	};
	xhr.open(type, [url, ["", ["?", serialize(data)].join("")][isGet]].join(""), option.async === undefined ? 1 : option.async);
	type === "post" && xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send([serialize(data), null][isGet]);
}
