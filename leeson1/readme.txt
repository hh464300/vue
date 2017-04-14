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


	----
	指令：特殊的标签属性
		 职责：当期表达式的值发生改变时 相应的将某些行为应用到dom上
		 vue中 使用v-   开头
		内置指令：
			v-bind：
			v-text
			v-html=
			v-show
			v-if
			v-else
			v-else-if
			v-for
			v-on
			v-model
			v-pre
			v-cloak
			v-once

	模板
		分类： html模板   字符串模板template   render函数模板

		html模板
			基于dom的模板  可以解析成有效的html

			插入值
				文本：  1. {{}}   当值发生改变的时候  内容发生响应的改变
				        2. 不能解析html标签
				        3. 标签中使用v-html：'message' 解析html标签
				属性：  v-bind:  解析属性值	
						4. {{}} 中可以写简单的表达式  或者三元运算符 if(){}不行

		字符串模板
				tempate选项对象的属性
				方法一： 定义字符串
						1. var str = '<div class="active"><div class="small">{{message}}</div></div>'

						2. var app = new Vue({
							el:'#active',
							data:data,
							template:str   //优先级大于挂载的元素
						})

						3. 普通字符串不能  可以使用ECMA6的新定义方式 ``
				方法二：
					1. <script type="x-template" id="temp">
						<div id="active">
							<div class="small">{{message}}</div>
							<div class="sosmall">{{info}}</div>
						</div>	
					</script>
					2. 在template中指定  template:'#temp'



