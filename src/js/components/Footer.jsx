import React, { Component } from 'react';
import staticData from '../constants/static-data';

class Footer extends Component {
	render() {
		return (
			<div className="footer grey shadow">
	        	<div className="footer-outer">
	          		<div className="footer-inner container">
	          			<div className="left-50">
	          				<p className="footer-copyright"> {staticData.footer.legalJargon1 + staticData.currentYear + staticData.footer.legalJargon2} </p>
	          				<p className="footer-email"> {staticData.emailText + " " + staticData.email} </p>
	          				<p className="footer-website"> {staticData.websiteClean} </p>
	          			</div>
	          			<div className="right-50 footer-links">
	          				<p className="footer-developer">
	          					{staticData.footer.dev1}
	          					<a href={staticData.footer.dev3}>{staticData.footer.dev2}</a>
	          				</p>
	          				<p className="footer-disclaimer"> {staticData.Disclaimers} </p>
	          			</div>
	          		</div>
	        	</div>
	        </div>
	        );
	}
}

export default Footer;