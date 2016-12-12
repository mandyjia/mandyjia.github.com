//加载资源函数
function loadIMg(arr,fnSucc,fnLoading){
	var iNow = 0;
	for(var i=0; i<arr.length;i++){
		var oImg = new Image();
		(function(i,oImg){
			oImg.onload = function(){								
				//把每次创建出来的oImg对象保存到json里面
				JSON[arr[i]] = this;
				//加载过程  或者加载进度
				iNow++;
				var scale = iNow/arr.length;
				fnLoading && fnLoading(scale);
				//加载完成
				if(iNow == arr.length){
					fnSucc && fnSucc();
				}				
			}
		})(i,oImg);						
		oImg.src = 'img/'+arr[i]+'.png';
	}					
}