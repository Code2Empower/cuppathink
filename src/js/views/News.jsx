import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import staticData from '../constants/static-data';
import {parseStoryblockData} from '../helpers/helpers';
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
		const appData = parseStoryblockData(APIdata.stories);
		console.log('News: appData', appData)
		onLoad(appData);
    });
  }

	render() {
		const { news } = this.props;
		const { app } = this.props;

		return (
			<div className="news-wrapper">
				<h1>news</h1>
				<h3>{news.story}</h3>
				<p>{app.AppTitle}</p>
				<div className="news-sources-wrapper">
					<NewsSources/>
				</div>
				<div className="news-fetch-wrapper">
					<NewsFetchButton/>
				</div>
				<NewsFeed/>
			</div>
		)
	}
}

const mapStateToProps = state => ({
  news: state.news,
  app: state.app
});
const mapDispatchToProps = dispatch => ({
  onLoad: data => dispatch({ type: NEWS_LOADED, data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(News);