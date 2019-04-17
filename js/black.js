window.onload = function(){
	//获取画布对象
	var canvas = document.getElementById("canvas");
	var canvasDiv = document.getElementById("canvasDiv");
	//获取画布的上下文
	var context =canvas.getContext("2d");
	//设置canvas的宽度和高度
	var W,H;
	canvas.width = W = canvasDiv.offsetWidth;
	canvas.height = H = canvasDiv.offsetHeight;
	//窗口改变大小，画布随之改变
	window.onresize = function(){
		canvas.width = canvasDiv.offsetWidth;
		canvas.height = canvasDiv.offsetHeight;
	}
	//每个文字的字体大小
	var fontSize = 16;
	//计算列
	var colunms = Math.floor(W /fontSize);	
	//记录每列文字的y轴坐标
	var drops = [];
	//给每一个文字初始化一个起始点的位置
	for(var i=0;i<colunms;i++){
		drops.push(0);
	}

	//运动的文字
	var str ="web czc shi yi tiao xian yu";
	//4:fillText(str,x,y);原理就是去更改y的坐标位置
	//绘画的函数
	function draw(){
		context.fillStyle = "rgba(0,0,0,0.05)";
		context.fillRect(0,0,W,H);
		//给字体设置样式
		context.font = "700 "+fontSize+"px  微软雅黑";
		//给字体添加颜色
		context.fillStyle ="#00cc33";//可以rgb,hsl, 标准色，十六进制颜色
		//写入画布中
		for(var i=0;i<colunms;i++){
			var index = Math.floor(Math.random() * str.length);
			var x = i*fontSize;
			var y = drops[i] *fontSize;
			context.fillText(str[index],x,y);
			//如果要改变时间，肯定就是改变每次他的起点
			if(y >= canvas.height && Math.random() > 0.99){
				drops[i] = 0;
			}
			drops[i]++;
		}
	};

	function randColor(){
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		return "rgb("+r+","+g+","+b+")";
	}

	draw();
	setInterval(draw,30);
};
