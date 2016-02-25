import {EventEmitter} from 'events';

class TodoStore extends EventEmitter {
	constructor() {
		super();

		this.todos = [{
			id: 1456392568353,
			text: 'Go Shopping',
			status: null
		}, {
			id: 1456392580082,
			text: 'Pay Bills',
			status: null
		}];
	}

	createTodoItem(text) {
		const id = Date.now();

		this.todos.push({
			id: id,
			text: text,
			status: null
		});
	}

	changeTodoItemStatus(id, status) {
		const item = this.todos.filter((item) => item.id === id).pop();

		if (item) {
			item.status = status;
		}
	}

	getTodosList() {
		return this.todos;
	}
}

const todoStore = new TodoStore;

export default todoStore;
