var controls = document.getElementById("segmentedControls");
var contents = document.getElementById("segmentedControlContents");
var html = [];
var i = 1,
	j = 1,
	m = 16, //左侧选项卡数量+1
	n = 21; //每个选项卡列表数量+1
for(; i < m; i++) {
	html.push('<a class="mui-control-item" href="#content' + i + '">选项' + i + '</a>');
}
controls.innerHTML = html.join('');
html = [];
for(i = 1; i < m; i++) {
	html.push('<div id="content' + i + '" class="mui-control-content"><div class="mui-content mui-scroll-wrapper"><div class="mui-scroll"><ul id="proUl" class="mui-table-view mui-table-view-chevron">');
	var tli = "";
	for(j = 1; j < n; j++) {
		var rdom = -(Math.floor((Math.random() * 100) + 1));
		tli += "<li class=\"mui-table-view-cell mui-media\" style=\"height:90px\">";
		tli += "<a href=\"javascript:;\">";
		tli += "<img class=\"mui-media-object mui-pull-left\" src=\"../images/banner.png\">";
		tli += "<div class=\"mui-media-body\">";
		tli += "<span style=\"font-size: 14px;color: black;font-weight: 700;\">路虎发现神行2.0T版</span>";
		tli += "<p class=\"mui-ellipsis\"><span style=\"font-size: 12px;\">总需</span> 777</p>";
		tli += "<p class=\"mui-progressbar mui-progressbar-in\" data-progress=\"80\"><span style=\"transform: translate3d(" + rdom + "%, 0px, 0px);\"></span></p>";
		tli += "<p class=\"mui-ellipsis\"><span style=\"font-size: 12px;\">剩余</span> 666</p>";
		tli += "</p>";
		tli += "<div class=\"cic_bg\" style=\"width: 40px; height: 40px;position: absolute;bottom: 6px;right: 6px;border-radius: 50%;float: left;text-align: right; background-color:#e82743;\">";
		tli += "<div class=\"icon_shop\" style=\"position: absolute;text-align: center;top: 8px;\"><img src=\"../images/index7.png\" width=\"60%\"></div></div>";
		tli += "</div>";
		tli += " </a>";
		tli += "</li>";
		html.push(tli);
	}
	html.push('</ul></div></div></div>');
}
contents.innerHTML = html.join('');
//默认选中第一个
controls.querySelector('.mui-control-item').classList.add('mui-active');
contents.querySelector('.mui-control-content').classList.add('mui-active');

mui.ready(function() {
	//循环初始化所有下拉刷新，上拉加载。
	mui.each(document.querySelectorAll('#segmentedControlContents .mui-scroll'), function(index, pullRefreshEl) {
		mui(pullRefreshEl).pullToRefresh({
			down: {
				callback: function() {
					var self = this;
					setTimeout(function() {
						var tli = "";
						for(var i = 0; i < 10; i++) {
							var rdom = -(Math.floor((Math.random() * 100) + 1));
							tli += "<li class=\"mui-table-view-cell mui-media\" style=\"height:90px\">";
							tli += "<a href=\"javascript:;\">";
							tli += "<img class=\"mui-media-object mui-pull-left\" src=\"../images/banner.png\">";
							tli += "<div class=\"mui-media-body\">";
							tli += "<span style=\"font-size: 14px;color: black;font-weight: 700;\">路虎发现神行2.0T版</span>";
							tli += "<p class=\"mui-ellipsis\"><span style=\"font-size: 12px;\">总需</span> 777</p>";
							tli += "<p class=\"mui-progressbar mui-progressbar-in\" data-progress=\"80\"><span style=\"transform: translate3d(" + rdom + "%, 0px, 0px);\"></span></p>";
							tli += "<p class=\"mui-ellipsis\"><span style=\"font-size: 12px;\">剩余</span> 666</p>";
							tli += "</p>";
							tli += "<div class=\"cic_bg\" style=\"width: 40px; height: 40px;position: absolute;bottom: 6px;right: 6px;border-radius: 50%;float: left;text-align: right; background-color:#e82743;\">";
							tli += "<div class=\"icon_shop\" style=\"position: absolute;text-align: center;top: 8px;\"><img src=\"../images/index7.png\" width=\"60%\"></div></div>";
							tli += "</div>";
							tli += " </a>";
							tli += "</li>";
							html.push(tli);
						}
						$("#proUl").html(tli);
						self.endPullDownToRefresh();
					}, 1000);
				}
			},
			up: {
				callback: function() {
					var self = this;
					setTimeout(function() {
						var tli = "";
						for(var i = 0; i < 10; i++) {
							var rdom = -(Math.floor((Math.random() * 100) + 1));
							tli += "<li class=\"mui-table-view-cell mui-media\" style=\"height:90px\">";
							tli += "<a href=\"javascript:;\">";
							tli += "<img class=\"mui-media-object mui-pull-left\" src=\"../images/banner.png\">";
							tli += "<div class=\"mui-media-body\">";
							tli += "<span style=\"font-size: 14px;color: black;font-weight: 700;\">路虎发现神行2.0T版</span>";
							tli += "<p class=\"mui-ellipsis\"><span style=\"font-size: 12px;\">总需</span> 777</p>";
							tli += "<p class=\"mui-progressbar mui-progressbar-in\" data-progress=\"80\"><span style=\"transform: translate3d(" + rdom + "%, 0px, 0px);\"></span></p>";
							tli += "<p class=\"mui-ellipsis\"><span style=\"font-size: 12px;\">剩余</span> 666</p>";
							tli += "</p>";
							tli += "<div class=\"cic_bg\" style=\"width: 40px; height: 40px;position: absolute;bottom: 6px;right: 6px;border-radius: 50%;float: left;text-align: right; background-color:#e82743;\">";
							tli += "<div class=\"icon_shop\" style=\"position: absolute;text-align: center;top: 8px;\"><img src=\"../images/index7.png\" width=\"60%\"></div></div>";
							tli += "</div>";
							tli += " </a>";
							tli += "</li>";
							html.push(tli);
						}
						$("#proUl").append(tli);
						self.endPullUpToRefresh();
					}, 1000);
				}
			}
		});
	});
});