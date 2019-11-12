window.onload = function(){
	imglocation("conainer","box");
	var json = {
		"date":["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","5.jpg"]
	}
	var a;
	var b;
	var c;
	document.body.onscroll = function(){
		a = document.documentElement.scrollTop;
		b = document.documentElement.clientHeight;
		c = document.documentElement.scrollHeight;
		if(c - b - a < 200)
		{
			for( i = 0 ; i < json.date.length; i++){
				var cparent = document.getElementById("conainer");
				var box = document.createElement("div");
				box.className = "box";
				cparent.appendChild(box);
				var boximg = document.createElement("div");
				boximg.className = "box_img";
				box.appendChild(boximg);
				var img = document.createElement("img");
				boximg.appendChild(img);
				img.src="IMG/"+json.date[i];
				imglocation("conainer","box");
			}
			
		}
	}
	
	if(goLocation()){
		
	}
}
function goLocation(){
	
}
function imglocation (parent,content){
	//将parent下的content全部取出
	var cparent = document.getElementById(parent);
	cparent.style.margin = "0 auto";
	//得到所有box子集
	var ccoent = getChild(cparent,"box");
	//计算每一行有多少个
	var imgwidth = ccoent[0].offsetWidth;
	var cols = parseInt(document.documentElement.clientWidth / imgwidth);
	//将其宽度固定
	cparent.style.cssText = "width:" + imgwidth*cols + "px";
	//获取第一排的所有高度
	var AllHeight = getAllHeight(cols,ccoent);
	
	
}
//获取第一排的所有高度  获取个数 获取对象
function getAllHeight(num,obj){
	var AllHeight = [];	
	for(var i =0; i < obj.length ; i++){
		if(i < num)
		{
			AllHeight.push(obj[i].offsetHeight);
			//获取其中的最小高度
			var minHeight ;
		}
		
		else
		{
			minHeight = Math.min.apply(null,AllHeight);
			//获取最小高度的索引值
			var Pindex=getMinI(AllHeight,minHeight);
			obj[i].style.position = "absolute";
			obj[i].style.top = minHeight + "px";
			obj[i].style.left = Pindex*obj[0].offsetWidth + "px";
			AllHeight[Pindex] = minHeight + obj[i].offsetHeight;
			
		}
		
		
	}
	
	return AllHeight;
}
function getMinI(AllHeight,minHeight){
	for(i in AllHeight)
	{
		if(AllHeight[i] == minHeight)
		return i;
	}
}
//获取所有子集对象
function getChild(parent,content){
	var contentArr = [];
	var allcontent = parent.getElementsByTagName("*");
	for(i=0;i < allcontent.length; i++)
	{
		//将子集的class为box的元素选出来
		if(allcontent[i].className == content)
		contentArr.push(allcontent[i]);
	}
	return contentArr;
	
}