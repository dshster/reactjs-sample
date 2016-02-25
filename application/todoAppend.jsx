import React from 'react';

export default class TodoComponentAppend extends React.Component {
	constructor() {
		super();

		this.state = {};
	}

	appendTodoItem(event) {
		const caption = this.state.caption;

		if (caption) {
			this.props.appendTodoItem(caption);

			this.setState({
				caption: ''
			});

			this.refs.todoCaptionInput.value = '';
		}

		event.preventDefault();
	}

	setTodoItemCaption(event) {
		this.setState({
			caption: event.target.value
		});
	}

	render() {
		return (
			<form onSubmit={this.appendTodoItem.bind(this)}>
				<input type="text" ref="todoCaptionInput" onChange={this.setTodoItemCaption.bind(this)} />
				<button type="submit">Append</button>
			</form>
		);
	}
}
