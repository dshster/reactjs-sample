import React from 'react';
import TodoComponentItem from './todoItem.jsx';

export default class TodoComponentList extends React.Component {
	render() {
		const TodoList = this.props.list.map((todo) => {
			return <TodoComponentItem changeTodoItemStatus={this.props.changeTodoItemStatus.bind(this)} key={todo.id} {...todo} />
		});

		return (
			<ul>
				{TodoList}
			</ul>
		);
	}
}
