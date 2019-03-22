import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Parser from 'html-react-parser';
import staticData from '../constants/static-data';
import {parseStoryblockPage, purifyHTML} from '../helpers/helpers';
import {ABOUT_LOADED} from '../constants/action-types';

class About extends Component{

  componentDidMount() {
    const { onLoad } = this.props;

    const cv = '&cv='+ Math.floor(Date.now()/1000);
    axios.get(staticData.api.storyblockBase+'stories/?starts_with=about&version=published&'+staticData.api.storyblockToken+cv)
    .then(res => {
		const APIdata = res.data;
		console.log('About: Storyblok API Data:', APIdata);
		const appData = parseStoryblockPage(APIdata.stories, 'about');
		appData["isLoaded"] = true;
		console.log('About: appData', appData)
		onLoad(appData);
    });
  }

	render() {
		const { about } = this.props;
		const { app } = this.props;

		return (
			<div className="about-wrapper container full-width">
				<h1 className="about-intro">{about.page_title}</h1>
				<div className="about-intro">
					{Parser( purifyHTML(about.about_details, 'no') )}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
  about: state.about,
  app: state.app
});
const mapDispatchToProps = dispatch => ({
  onLoad: data => dispatch({ type: ABOUT_LOADED, data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);