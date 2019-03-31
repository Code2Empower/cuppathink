import React, { Component } from 'react';
import { connect } from 'react-redux';
import Parser from 'html-react-parser';
import axios from 'axios';
import staticData from '../constants/static-data';
import {parseStoryblockPage, parseStoryblockData, purifyHTML} from '../helpers/helpers';
import {HOME_LOADED} from '../constants/action-types';
import ArticleFeedShort from '../components/ArticleFeedShort';

class Home extends Component{

  componentDidMount() {
    const { onLoad } = this.props;

    const cv = '&cv='+ Math.floor(Date.now()/1000);
    axios.get(staticData.api.storyblockBase+'stories/?starts_with=home&version=published&'+staticData.api.storyblockToken+cv)
    .then(res => {
		const APIdata = res.data;
		console.log('Home: Storyblok API Data:', APIdata);
		const appData = parseStoryblockPage(APIdata.stories, 'home');
		console.log('Home: appData', appData)
		
		axios.get(staticData.api.storyblockBase+'stories/?starts_with=posts&per_page=2&version=published&'+staticData.api.storyblockToken+cv)
		.then(res => {
			const APIdata2 = res.data;
			console.log('Home - News Feed: Storyblok API Data:', APIdata2);
			const newsFeed = parseStoryblockData(APIdata2.stories);
			appData["isLoaded"] = true;
			onLoad({
				homeData: appData,
				newsData: newsFeed});
		})
    });
  }

	render() {
		const { home } = this.props;

		return (
			<div className="home-wrapper container full-width">
				<h1 className="home-title">{home.title}</h1>
				<div className="home-intro">
					{Parser( purifyHTML(home.intro) )}
				</div>

				<h2>Latest Articles</h2>
				<ArticleFeedShort/>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	articles: state.articles,
	home: state.home,
	app: state.app
});
const mapDispatchToProps = (dispatch) => ({
  onLoad: data => dispatch({ type: HOME_LOADED, data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);