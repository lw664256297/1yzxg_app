///////////////// 商品详情---子页面页面初始化///////////////
mui.init({
	pullRefresh : {
		container : "#pullrefresh",
		down : {
			height : 50,// 可选,默认50.触发下拉刷新拖动距离,
			auto : true,// 可选,默认false.自动下拉刷新一次
			contentdown : "下拉可以刷新",
			contentover : "释放立即刷新",
			contentrefresh : "正在刷新...",
			callback : downLoad
		},
		up:{
		    contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
		    contentnomore:'没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
		    callback :upLoad//必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
		}
	}

});


/////////////////首页--子页面加载第一页数据(刷新)///////////////
function downLoad() {
	setTimeout(function(){
		mui('#pullrefresh').pullRefresh().endPulldownToRefresh();//refresh completed
		mui('#pullrefresh').pullRefresh().refresh(true);
	}, 300);
}
/////////////////首页--子页面加载更多数据///////////////
function upLoad() {
	setTimeout(function(){
		mui('#pullrefresh').pullRefresh().endPullupToRefresh(true);
	}, 300);
}
