import React, { Component } from 'react';
import { connect } from 'react-redux';
import Parser from 'html-react-parser';
import axios from 'axios';
import staticData from '../constants/static-data';
import {parseStoryblockPage, purifyHTML} from '../helpers/helpers';
import {ONLINERESEARCHHELP_LOADED} from '../constants/action-types';

class OnlineResearchHelp extends Component{

  componentDidMount() {
    const { onLoad } = this.props;

    const cv = '&cv='+ Math.floor(Date.now()/1000);
    axios.get(staticData.api.storyblockBase+'stories/?starts_with=onlineresearchhelp&version=published&'+staticData.api.storyblockToken+cv)
    .then(res => {
		const APIdata = res.data;
		console.log('Online Reasearch Help: Storyblok API Data:', APIdata);
		const appData = parseStoryblockPage(APIdata.stories);
		appData["isLoaded"] = true;
		console.log('Online Reasearch Help: appData', appData)
		onLoad(appData);
    });
  }

	render() {
		const { onlineResearchHelp } = this.props;
		const { app } = this.props;

		return (
			<div className="research-wrapper container full-width">
				<h1 className="research-intro-header">{onlineResearchHelp.page_title}</h1>
				<div className="research-intro research-section">
					{Parser( purifyHTML(onlineResearchHelp.research_intro, 'both') )}
				</div>
				<h1>{onlineResearchHelp.section_title}</h1>
				<div className="research-section">
					{Parser( purifyHTML(onlineResearchHelp.body_first, 'both') )}
				</div>
				<h1>{onlineResearchHelp.section_title_2}</h1>
				<div className="research-section">
					{Parser( purifyHTML(onlineResearchHelp.body_second, 'both') )}
				</div>
				<h1>{onlineResearchHelp.section_title_3}</h1>
				<div className="research-section">
					{Parser( purifyHTML(onlineResearchHelp.body_third, 'target') )}
				</div>
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