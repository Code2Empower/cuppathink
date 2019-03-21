import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import staticData from '../constants/static-data';
import {parseStoryblockData} from '../helpers/helpers';
import {ARTICLES_LOADED} from '../constants/action-types';
import ArticleFeed from '../components/ArticleFeed';

class Articles extends Component{
	componentDidMount() {
		const { onLoad } = this.props;
		const cv = '&cv='+ Math.floor(Date.now()/1000);

		axios.get(staticData.api.storyblockBase+'stories/?starts_with=posts&version=published&'+staticData.api.storyblockToken+cv)
		.then(res => {
			const APIdata = res.data;
			console.log('Articles: Storyblok API Data:', APIdata);
			const appData = parseStoryblockData(APIdata.stories);
			console.log('Articles: appData', appData)
			onLoad(appData);
		});

	}
	render() {
		const { articles } = this.props;
		const { app } = this.props;
		
		return (
			<div className="articles-page-wrapper">
				<h1>articles</h1>
				<ArticleFeed/>
			</div>
		)
	}
}

const mapStateToProps = state => ({
  articles: state.articles,
  app: state.app
});
const mapDispatchToProps = dispatch => ({
  onLoad: data => dispatch({ type: ARTICLES_LOADED, data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);