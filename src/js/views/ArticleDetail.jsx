import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';
import axios from 'axios';
import staticData from '../constants/static-data';
import {parseStoryblockArticle, getSlugFromURL} from '../helpers/helpers';
import ArticleFull from '../components/ArticleFull';
import BackArrow from '../components/BackArrow';
import {ARTICLEDETAIL_LOADED} from '../constants/action-types';

class ArticleDetail extends Component{
	constructor(props) {
		super(props);

		this.state = {
			loaded: false,
			slug: ''
		};
	}

	componentDidMount() {
		const { onLoad } = this.props;
		const slug = getSlugFromURL(window.location.href);
		this.setState({
			slug: slug
		});

		const cv = '&cv='+ Math.floor(Date.now()/1000);
		axios.get(staticData.api.storyblockBase+'stories/posts/'+slug+'?version=published&'+staticData.api.storyblockToken+cv)
		.then(res => {
			const APIdata = res.data;
			console.log('ArticleDetail: Storyblok API Data:', APIdata);
			const articleData = parseStoryblockArticle(APIdata.story);
			console.log('ArticleDetail:', articleData)
			this.setState({
				articleDetail: articleData
			});
			this.setState({
				loaded: true
			});
			onLoad(articleData);
		});
	}



	render() {
		if(this.state.loaded === true){
			return (
				<div className="article-detail-wrapper">
					<Helmet>
			            <title>{this.state.articleDetail.content.title}</title>
			            <meta name="description" content={this.state.articleDetail.content.title} />
			            <meta name="og:image" content={this.state.articleDetail.content.image} />
			         </Helmet>
					<BackArrow
						to={'/articles'}
						text={' Articles'}
						className={'article-detail-back'}
					/>
					<ArticleFull key={this.state.slug} article={this.state.articleDetail} />
				</div>
			)
		}else{
			return(
				<div>Loading...</div>
			)
		}
	}
}

const mapStateToProps = state => ({
  articleDetail: state.articleDetail,
  app: state.app
});

const mapDispatchToProps = dispatch => ({
  onLoad: data => dispatch({ type: ARTICLEDETAIL_LOADED, data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);