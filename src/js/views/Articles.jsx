import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import staticData from '../constants/static-data';
import {parseStoryblockData, parseStoryblockPage} from '../helpers/helpers';
import {ARTICLES_LOADED} from '../constants/action-types';
import ArticleFeed from '../components/ArticleFeed';

class Articles extends Component{
	componentDidMount() {
		const { onLoad } = this.props;

		const cv = '&cv='+ Math.floor(Date.now()/1000);
	    axios.get(staticData.api.storyblockBase+'stories/?starts_with=articles&version=published&'+staticData.api.storyblockToken+cv)
	    .then(res => {
			const APIdata = res.data;
			console.log('Articles: Storyblok API Data:', APIdata);
			const appData = parseStoryblockPage(APIdata.stories, 'home');
			console.log('Articles: appData', appData)
			
			axios.get(staticData.api.storyblockBase+'stories/?starts_with=posts&version=published&'+staticData.api.storyblockToken+cv)
			.then(res => {
				const APIdata2 = res.data;
				console.log('Articles - News Feed: Storyblok API Data:', APIdata2);
				const newsFeed = parseStoryblockData(APIdata2.stories);

				onLoad({
					articlesData: appData,
					newsData: newsFeed});
			})
	    });

	}
	render() {
		const { articles } = this.props;
		const { articlesPage } = this.props;
		const { app } = this.props;
		
		return (
			<div className="articles-page-wrapper">
				<h1>{articlesPage.title}</h1>
				<ArticleFeed/>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	articlesPage: state.articlesPage,
	articles: state.articles,
	app: state.app
});
const mapDispatchToProps = dispatch => ({
  onLoad: data => dispatch({ type: ARTICLES_LOADED, data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);