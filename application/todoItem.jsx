import React from 'react';

export default class TodoComponentItem extends React.Component {
	changeTodoStatus(event) {
		const checked = event.target.checked;

		this.props.changeTodoItemStatus(this.props.id, checked);
	}

	getTodoItemStyle() {
		return true === this.props.status ? {
			textDecoration: 'line-through',
			opacity: .7
		} : {};
	}

	getTodoItemClass() {
		let className = {
			'todo-status': true,
			'todo-status--checked': true === this.props.status
		};

		return Object.keys(className).filter(function(classNameKey) {
			return true === className[classNameKey]
		}).join(' ');
	}

	render() {
		return (
			<li>
				<label className={this.getTodoItemClass()} style={this.getTodoItemStyle()}>
					<input onChange={this.changeTodoStatus.bind(this)} type="checkbox"/>
					<span>{this.props.text}</span>
				</label>
			</li>
		);
	}
}
