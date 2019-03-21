import React, { Component } from 'react';
import { connect } from 'react-redux';
import Parser from 'html-react-parser';
import axios from 'axios';
import staticData from '../constants/static-data';
import {parseStoryblockPage, purifyHTML} from '../helpers/helpers';
import {HOME_LOADED} from '../constants/action-types';

class Home extends Component{

  componentDidMount() {
    const { onLoad } = this.props;

    const cv = '&cv='+ Math.floor(Date.now()/1000);
    axios.get(staticData.api.storyblockBase+'stories/?starts_with=home&version=published&'+staticData.api.storyblockToken+cv)
    .then(res => {
		const APIdata = res.data;
		console.log('Home: Storyblok API Data:', APIdata);
		const appData = parseStoryblockPage(APIdata.stories, 'home');
		appData["isLoaded"] = true;
		console.log('Home: appData', appData)
		onLoad(appData);
    });
  }

	render() {
		const { home } = this.props;
		const { app } = this.props;

		return (
			<div className="home-wrapper container full-width">
				<h1 className="home-title">{home.title}</h1>
				<div className="home-intro">
					{Parser( purifyHTML(home.intro) )}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
  home: state.home,
  app: state.app
});
const mapDispatchToProps = dispatch => ({
  onLoad: data => dispatch({ type: HOME_LOADED, data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);