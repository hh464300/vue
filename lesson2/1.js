var list = 
	[
		/*
		//自定义数据  数组类型(模拟)
		{title:'吃饭'},
		{title:'睡觉'},
		{title:'打豆豆'},
		{title:'学习VUE'},
		{title:'搞啥'}*/
	];

var app = new Vue({
	el:'.container',
	data:{
		content:list,
		todo:''   //数据驱动
	},
	methods:{
		addTodo(ev){  //event对象  监听事件
			//向list中添加一项任务
			/*if(ev.keyCode === 13){
				//this 指向根实例
				this.content.push({  
						title:ev.target.value
				}) ;  
			}*/

			/*
			使用事件修饰符
			this.content.push({
				title:ev.target.value
			})*/

			this.content.push({
				title:this.todo
			})
			this.todo='';  //给todo重新赋值为空
		}
	}
})