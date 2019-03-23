import React, { Component } from 'react';
import staticData from '../constants/static-data';

class Header extends Component {


	render() {
		function burgerToggle(elem) {
			const linksEl = document.querySelector('.mobile-links');
			if (linksEl.style.display === 'inline-block') {
			    linksEl.style.display = 'none';
			    elem.classList.remove( "active" );
			} else {
			    linksEl.style.display = 'inline-block';
			    elem.classList.add( "active" );
			}
		}

		return (
			<div className="main-header">
	          <div className="header-outer">
	          	<div className="header-inner">
	          		<div className="header-nav-mobile">
	          			<div className="hamburger" onClick={(e) =>{burgerToggle(e.target)}}><span></span></div>
	          			<div className="mobile-links">
		          			<a className="nav-home" href="../">Home</a>
		          			<a className="nav-home" href="../about">About</a>
		          			<a className="nav-home" href="../online-research-help">Online Research Help</a>
		          			<a className="nav-home" href="../articles">Articles</a>
		          			<a className="nav-home" href="../news">World News</a>

		          			<a className="secondary-nav-close" onClick={() =>{burgerToggle(document.querySelector('.hamburger'))}}><span>X</span>&nbsp; Close Nav</a>
		          		</div>
	          		</div>
	          		<a href="./">
	          			<div className="header-logo">
	          				<img src={staticData.headerLogo} alt="site logo"/>
	          			</div>
	          		</a>
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