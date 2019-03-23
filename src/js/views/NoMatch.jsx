import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class NoMatch extends Component{
	render() {
		return (
			<div className="404-wrapper">
				<Helmet>
					<title>404 Page Not Found | CuppaThink</title>
				    <meta name="description" content="Sorry, we couldn't find the page you were looking for. | CuppaThink"/>
				</Helmet>
				<h1>404</h1>
				<p>The Page you are looking for was not found.  Please try the nav, or look in our articles section.</p>
			</div>
		)
	}
}


export default NoMatch;