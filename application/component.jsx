import React from 'react';

export default class Hello extends React.Component {
	render() {
		let myname = 'dmitry';

		return (
			<div>
				<h1>Hello title!</h1>
				<h2>Hello {myname}!</h2>
			</div>
		);
	}
}
