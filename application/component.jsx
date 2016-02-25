import React from 'react';
import TodoComponent from './todo.jsx'

export default class Header extends React.Component {
	render() {
		return (
			<header>
				<h1>Simple ToDo!</h1>
				<TodoComponent />
			</header>
		);
	}
}
