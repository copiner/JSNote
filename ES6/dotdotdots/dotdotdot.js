

var todos = [{
		completed:false,
		id:1,
		text: "get up"},
		{
		completed:false,
		id:2,
		text: "sleep up"},
		]

const areAllMarked = todos.every(todo=> todo.completed)
todos.map(todo=>({
	...todo,
	completed: !areAllMarked
	}))
console.log(areAllMarked);
console.log(todos);
