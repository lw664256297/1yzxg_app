/////////////////全部商品--加载子页面///////////////
mui.init({
	pullRefresh: {
		container: "#pullrefresh",
		down: {
			height: 50, // 可选,默认50.触发下拉刷新拖动距离,
			auto: true, // 可选,默认false.自动下拉刷新一次
			contentdown: "下拉可以刷新",
			contentover: "释放立即刷新",
			contentrefresh: "正在刷新...",
			callback: downLoad
		},
		up: {
			contentrefresh: "正在加载...", //可选，正在加载状态时，上拉加载控件上显示的标题内容
			contentnomore: '没有更多数据了', //可选，请求完毕若没有更多数据时显示的提醒内容；
			callback: upLoad //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
		}
	}
});
/**
 * 左侧页面下拉
 */
function downLoad() {
	setTimeout(function() {
		mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
		mui('#pullrefresh').pullRefresh().refresh(true);
	}, 500);
}
/**
 * 左侧页面上拉
 */
function upLoad() {
	setTimeout(function() {
		mui('#pullrefresh').pullRefresh().endPullupToRefresh(true); //没有更多数据了
	}, 500);
}
$(document).ready(function(){
	var controls = document.getElementById("segmentedControls");
	var contents = document.getElementById("segmentedControlContents");
	var html = [];
	var i = 1,
		j = 1,
		m = 16, //左侧选项卡数量+1
		n = 21; //每个选项卡列表数量+1
	for (; i < m; i++) {
		html.push('<a class="mui-control-item" href="#content' + i + '">选项' + i + '</a>');
	}
	controls.innerHTML = html.join('');
	html = [];
	for (i = 1; i < m; i++) {
		html.push('<div id="content' + i + '" class="mui-control-content"><ul class="mui-table-view">');
		for (j = 1; j < n; j++) {
			html.push('<li class="mui-table-view-cell">第' + i + '个选项卡子项-' + j + '</li>');
		}
		html.push('</ul></div>');
	}
	contents.innerHTML = html.join('');
	//默认选中第一个
	controls.querySelector('.mui-control-item').classList.add('mui-active');
	contents.querySelector('.mui-control-content').classList.add('mui-active');
});
