import React, { Component } from 'react';
import staticData from '../constants/static-data';
import { Link } from 'react-router-dom';

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
		          			<Link className="nav-home" activeclassname="active" to="/">Home</Link>
		          			<Link className="nav-home" activeclassname="active" to="/about">About</Link>
		          			<Link className="nav-home" activeclassname="active" to="/online-research-help">Online Research Help</Link>
		          			<Link className="nav-home" activeclassname="active" to="/articles">Articles</Link>
		          			<Link className="nav-home" activeclassname="active" to="/news">World News</Link>

		          			<a className="secondary-nav-close" onClick={() =>{burgerToggle(document.querySelector('.hamburger'))}}><span>X</span>&nbsp; Close Nav</a>
		          		</div>
	          		</div>
	          		<Link to="/">
	          			<div className="header-logo">
	          				<img src={staticData.headerLogo} alt="site logo"/>
	          			</div>
	          		</Link>
	          		<div className="header-nav">
	          			<Link className="nav-home" activeclassname="active" to="/">Home</Link>
	          			<Link className="nav-home" activeclassname="active" to="/about">About</Link>
	          			<Link className="nav-home" activeclassname="active" to="/online-research-help">Online Research Help</Link>
	          			<Link className="nav-home" activeclassname="active" to="/articles">Articles</Link>
	          			<Link className="nav-home" activeclassname="active" to="/news">World News</Link>
	          		</div>
	          	</div>
	          </div>
	        </div>

	    );
	}
}

export default Header;