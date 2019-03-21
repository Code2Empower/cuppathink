import React, { Component } from 'react';
import staticData from '../constants/static-data';

class Header extends Component {
	render() {
		return (
			<div className="main-header">
	          <div className="header-outer">
	          	<div className="header-inner">
	          		<div className="header-logo">
	          			<a href="./home"><img src={staticData.headerLogo} alt="site logo"/></a>
	          		</div>
	          		<div className="header-nav">
	          			<a className="nav-home" href="../">Home</a>
	          			<a className="nav-home" href="../about">About</a>
	          			<a className="nav-home" href="../online-research-help">Online Research Help</a>
	          			<a className="nav-home" href="../articles">Articles</a>
	          			<a className="nav-home" href="../news">World News</a>
	          		</div>
	          	</div>
	          </div>
	        </div>
	        );
	}
}

export default Header;