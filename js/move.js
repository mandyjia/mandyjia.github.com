function move(obj,json,options){
	options = options || {};
	option.duration = option.duration || 1000;
	option.type = option.type || 'ease-out';
	var timer = null;
	var start = {};
	var dis = {};
	for(var name in json){
		start[name] = parseFloat(getStyle(obj,name)); //开始的值
		dis[name] = json[name] - start[name];  //总距离		
	} 
	var count = Math.floor(options.duration/30);
	var n = 0;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		n++;
		
	},30)
	
}
	obj.timer = setInterval(function(){
		n++;
		for(var name in json){
			switch(options.type){
				case 'linear':
					var a = n/count;
					var cur = start[name]+dis[name]*a;
					break;
				case 'ease-out':
					var a = 1-n/count;
					var cur = start[name]+dis[name]*(1-a*a*a);
					break;
				case 'ease-in':
					var a = n/count;
					var cur = start[name]+dis[name]*(a*a*a);
					break;
			}

			if(name == 'opacity'){
				obj.style[name] = cur;
				obj.style.filter = 'alpha(opacity='+cur*100+')';
			}else{
				obj.style[name] = cur+'px';
			}
		}

		if(n == count){
			clearInterval(obj.timer);
			options.complete && options.complete.apply(obj,arguments);
		}

	},30)

