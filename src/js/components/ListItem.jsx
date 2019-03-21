import React, { Component } from 'react';

class ListItem extends Component{
	render() {
		return (
			<li>{ this.props.meta }</li>
		);
	}
}

export default ListItem;