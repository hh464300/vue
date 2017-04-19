var list = [
	
];

var app = new Vue({
	el:'.container',
	data:{
		content:list,
		todo:''   //数据驱动
	},
	methods:{
		addTodo(ev){ 
			this.content.push({
				title:this.todo,
				myinput:'myinput'
			})
			this.todo=''; 
		},
		show(n,event){
			console.log(n,event); //第一个为传参  第二个为event对象
		},
		delTodo(todo){
			//var index = this.content.indexOf(todo); //获取索引
			this.content.splice(todo,1);
		}
	}
})