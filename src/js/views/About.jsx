import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import staticData from '../constants/static-data';
import {parseStoryblockData} from '../helpers/helpers';
import {ABOUT_LOADED} from '../constants/action-types';

class About extends Component{

  componentDidMount() {
    const { onLoad } = this.props;

    const cv = '&cv='+ Math.floor(Date.now()/1000);
    axios.get(staticData.api.storyblockBase+'stories/?starts_with=about&version=published&'+staticData.api.storyblockToken+cv)
    .then(res => {
		const APIdata = res.data;
		console.log('About: Storyblok API Data:', APIdata);
		const appData = parseStoryblockData(APIdata.stories);
		appData["isLoaded"] = true;
		console.log('About: appData', appData)
		onLoad(appData);
    });
  }

	render() {
		const { about } = this.props;
		const { app } = this.props;

		return (
			<div className="home-wrapper">
				<h1>{about.Page}</h1>
				<p>{app.AppTitle}</p>
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