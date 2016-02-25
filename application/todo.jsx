import React from 'react';
import TodoComponentList from './todoList.jsx'
import TodoComponentAppend from './todoAppend.jsx'
import TodoStore from './store/todoStore';

export default class TodoComponent extends React.Component {
	constructor() {
		super();

		this.state = {
			todos: TodoStore.getTodosList()
		};
	};

	reloadTodoStore() {
		this.setState({
			todos: TodoStore.getTodosList()
		});
	}

	changeTodoItemStatus(id, status) {
		TodoStore.changeTodoItemStatus(id, status);
		this.reloadTodoStore();
	}

	appendTodoItem(caption) {
		TodoStore.createTodoItem(caption);
		this.reloadTodoStore();
	}

	render() {
		const { todos } = this.state;

		return (
			<div>
				<TodoComponentList changeTodoItemStatus={this.changeTodoItemStatus.bind(this)} list={todos}/>
				<TodoComponentAppend appendTodoItem={this.appendTodoItem.bind(this)} />
			</div>
		);
	}
}
