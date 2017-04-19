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
			v-bind：  主要用于属性的绑定，不要使用{{}}如：动态生成class id  for name等
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

			给元素添加class的方式
				<div class="big" class="active" v-bind:class='{abc:isAdd}'>{{message}}</div>
				/*
				*给元素添加class 需要使用data中的值进行判断  (数据驱动dom)
				*添加的class 可以和直接设置的class共存
				*/

		reader 函数
					//参数一： 元素
					//参数二： 属性
							class:{}   添加class
							style:{}   添加style
							attrs:{}   添加自定义属性
							domProps:{}  元素节点的方法
							on:{}        给元素绑定事件
					//参数三： 子元素

			el:'.big',
			data:data,
			methods:{
				toshow(){
					console.log('事件触发');
				}
			},
			render(createElement){
				return createElement(
					'ul',
					{
						class:{active:true},    //给ul 添加一个class   active
						style:{fontSize:'25px'}, //给ul 添加一个style
						attrs:{dsd:'大屌丝'},      //给ul 添加自定义属性
					  //domProps:{innerHTML:'<li>dom操作</li>'}  使用ul节点的innerHTML方法
					  	on:{click:this.toshow}    //给ul绑定事件  
					},
					[
						createElement('li','abc'),
						createElement('li','bbb'),
						createElement('li','ccc'),
						createElement('li','ddd')
					]
				)
			}

列表渲染
	v-for指令
		语法：value, key in items
		语法：value, key of items

	变异方法
		vue提供的一组方法，对数组操作的时候 会触发视图的更新
		push()
		pop()
		shift()
		unshift()
		splice()
		sort()
		reverse()


	事件处理器
		v-on   用来监听DOM事件触发代码
		语法：
			v-on:eventName = 'event' ;
		简写：
			@
		事件处理函数在methods中统一管理
		事件对象
			在事件处理函数中获取
			内联事件处理函数执行，传入事件对象
				$event;
		事件修饰符
			---事件处理函数只有纯粹的逻辑判断，不处理dom事件的细节
			如：阻止冒泡，取消默认行为，判断按键等

		修饰符位置：
			v-on:eventName.修饰符

		修饰符：
			.stop
			.prevent
			.captrue
			.self
			.once
		按键修饰符：
			.enter
			.tab
			.delete
			.esc
			.space
			.up
			.down
			.left
			.right
			.ctrl
			.alt
			.shift
			.meta
			.键值

		条件渲染
			--根据表达式的值，用来显示/隐藏元素
			v-show=''  
