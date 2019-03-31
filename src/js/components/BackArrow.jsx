import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BackArrow extends Component {
	render() {
		return (
			<Link to={this.props.to}>
				<span className={this.props.className}>
					<i className="fas fa-arrow-circle-left">{this.props.text}</i>
				</span>
			</Link>
		);
	}
}

export default BackArrow;