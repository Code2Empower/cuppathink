import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import staticData from '../constants/static-data';
import {parseStoryblockData} from '../helpers/helpers';
import {ONLINERESEARCHHELP_LOADED} from '../constants/action-types';

class OnlineResearchHelp extends Component{

  componentDidMount() {
    const { onLoad } = this.props;

    const cv = '&cv='+ Math.floor(Date.now()/1000);
    axios.get(staticData.api.storyblockBase+'stories/?starts_with=onlineresearchhelp&version=published&'+staticData.api.storyblockToken+cv)
    .then(res => {
		const APIdata = res.data;
		console.log('Online Reasearch Help: Storyblok API Data:', APIdata);
		const appData = parseStoryblockData(APIdata.stories);
		appData["isLoaded"] = true;
		console.log('Online Reasearch Help: appData', appData)
		onLoad(appData);
    });
  }

	render() {
		const { onlineResearchHelp } = this.props;
		const { app } = this.props;

		return (
			<div className="home-wrapper">
				<h1>{onlineResearchHelp.Page}</h1>
				<p>{app.AppTitle}</p>
			</div>
		)
	}
}

const mapStateToProps = state => ({
  onlineResearchHelp: state.onlineResearchHelp,
  app: state.app
});
const mapDispatchToProps = dispatch => ({
  onLoad: data => dispatch({ type: ONLINERESEARCHHELP_LOADED, data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(OnlineResearchHelp);