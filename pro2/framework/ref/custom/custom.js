var AjaxComponent = (function() {
	//实现一个router的功能,d定义一整套跳转规则
	//检查hash变化了就跳转页面，并且侧边栏也要变
	//具备了一些链接的才能够用hash
	//需要考虑到ie的降级，并且有ua
	//这里用hash的变化来判断跳转的页面，并且能够绑定所有的a标签
	//加载的模块， 然后吧页面加载过来，可能需要自己写一个加载器。
	//可能也需要部署测试框架
	//需要在js中能够拿到代码模板。用jquery.load, 然后判断路由，路由还要能够传参
	//已经有现成的方案：pjax
	//两种方案，第一种可以通过url来实现，第二种可以通过click来实现。
	//点击之后--》hash改变--》引发加载事件
	var Router = function() {
		//hash的值
		var hash = this.hash;
		this.$a = $("a,div[data-click='pjax'],li[data-click='pjax']");
		console.log(this.$a)
		this.hash = window.location.hash.substr(1);
		this.$container = $('#maincontent');
		this.$main = $("#main");
		// 可能会因为跨域的问题
		this.prefix = "";
		this.rooturl = "http://localhost/liduanjie/projects/system/pro2/admin/template/";
	}

	Router.prototype = {
		init: function(){
			this.listen();
			this.initAjaxLink();
		},
		//检测
		listen: function() {
			var self = this;
			window.onhashchange = function() {
				self.hash = window.location.hash.substr(1);
				self.Loader();
			}
		},
		//click
		initAjaxLink: function() {
			var self = this;
			$.each(this.$a, function(k,v) {
				$(v).on('click', function(e) {
					e.preventDefault();
					var a  = $(this).attr('a');
					var b  = $(this).attr('b');
					self.subpath = {a:a, b:b};
					window.location.hash = self.subpath.a + "." + self.subpath.b;
					self.Loader();
				})
				// v.addEventListener("click", function(e){
				// 	e.preventDefault();
				// 	var a  = e.srcElement.attributes.a;
				// 	var b  = e.srcElement.attributes.b;
				// 	console.log(a,b)
				// })
			})
		},
		Loader: function() {
			var self = this,
			path  = self.rooturl + self.subpath.a + "/" + this.subpath.b + ".html";
			self.$container.empty().stop();
			self.$container.load(path);
		},
		router: function() {

		}
	}

	var xx = new Router();
	xx.init();

	$('#hash').on('click', function() {
		window.location.hash = "ldifoisjfd";
		xx.Loader();
	})
})()