var list = [
]
;
var app = new Vue({
	el:'.container',
	data:{
		content:list,
		todo:''
	},
	methods:{
		addTodo(){
			this.content.push({
				title:this.todo,
				myinput:'myinput'
			});
			this.todo='';
		},
		del(key){
			this.content.splice(key,1);
		}
		
	}
})