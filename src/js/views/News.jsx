import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Helmet } from "react-helmet";
import staticData from '../constants/static-data';
import {parseStoryblockPage} from '../helpers/helpers';
import {NEWS_LOADED} from '../constants/action-types';
import NewsSources from '../components/NewsSources';
import NewsFetchButton from '../components/NewsFetchButton';
import NewsFeed from '../components/NewsFeed';

class News extends Component{

  componentDidMount() {
    const { onLoad } = this.props;

    const cv = '&cv='+ Math.floor(Date.now()/1000);
    axios.get(staticData.api.storyblockBase+'stories/?starts_with=news&version=published&'+staticData.api.storyblockToken+cv)
    .then(res => {
		const APIdata = res.data;
		console.log('News: Storyblok API Data:', APIdata);
		const appData = parseStoryblockPage(APIdata.stories);
		console.log('News: appData', appData);
		onLoad(appData);
    });
  }

	render() {
		const { news } = this.props;
		const { newsPage } = this.props;
		const { app } = this.props;

		return (
			<div className="news-wrapper container full-width">

				<Helmet>
					<title>World News | CuppaThink</title>
				    <meta name="description" content="Get the latest news from around the world | CuppaThink."/>
				</Helmet>
				<h1>{newsPage.page_title}</h1>
				<p>{newsPage.news_details}</p>
				<div className="news-sources-wrapper left-50 shadow">
					<NewsSources/>
					<div className="news-fetch-wrapper">
						<NewsFetchButton/>
					</div>
				</div>

				<NewsFeed/>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	newsPage: state.newsPage,
	news: state.news,
	app: state.app
});
const mapDispatchToProps = dispatch => ({
  onLoad: data => dispatch({ type: NEWS_LOADED, data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(News);