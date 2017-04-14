//vue
	渐进式前端框架
		1. Vue 的核心库只关注视图层  vue.js
		2. 后续组件系统
		3. 客户端路由系统
		4. 大规模状态管理
		5. 构建工具

	响应式的元素
		--当data发生改变 dom中的数据也会发生改变  类似于@media

	单向数据绑定和双向数据绑定


	MVVM结构
		M:数据模板
		V:视图模板
		VM:  视图模型
			1. 视图层
			<div class="active">
	 			<span v-on:click="show">{{message}}</span>
	 		</div>
	 		2. 数据层
	 		let data = {
	 			message:'hello world'
	 		}
	 		3. 视图模型  链接
	 		var app = new Vue({
		 		el:'.active',    //代理元素
		 		data:data,		 //数据	
		 		methods:{		//方法
		 			show(){
		 				console.log('新的方法');
		 			}
		 		}
	 	})
	 声明式渲染和命令式渲染
	 	声明式：  只需要声明在哪里？ 做什么？ 无需关心如何实现
	 	命令式：  只需要声明在哪里？ 做什么？ 需要知道如何实现
	 		类似：  求数组的元素的倍数
	 			[1,2,3,4].map(function(x){return x*2})