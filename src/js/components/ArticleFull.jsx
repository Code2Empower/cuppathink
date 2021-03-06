import React, { Component } from 'react';
import Parser from 'html-react-parser';
import { purifyHTML } from '../helpers/helpers';

class ArticleFull extends Component {
	render() {
		const article = this.props.article;
		console.log('article details from articleFull Component:', article);

		if(typeof(article) !== 'undefined'){

			return (
			    <div className="article-item">
			       <img className="article-image" src={article.content.image} alt="" />
			       <h1 className="article-title">{article.content.title}</h1>
			       <div className="article-description">{Parser( purifyHTML(article.content.markdown, 'both') )}</div>
			    </div>
		    );
		}else{
			return (
			    <div className="article-item">
			       <h3 className="article-title">Article Not Found</h3>
			       <div className="article-description">Article Not Found</div>
			    </div>
		    );
		}
	}
}

export default ArticleFull;