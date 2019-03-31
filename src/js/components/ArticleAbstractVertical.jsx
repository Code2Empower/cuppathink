import React, { Component } from 'react';
import Parser from 'html-react-parser';
import { articleDetailLinker, purifyHTML } from '../helpers/helpers';

class ArticleAbstractVertical extends Component {
	render() {
		const article = this.props.article;
		console.log(article)
		const htmlClean = purifyHTML(article.content.abstract);
		const readMore = articleDetailLinker(article.slug, 'internal');

		return (
		    <div className="article-item">
		    		<a href={readMore} className="no-decoration"><h3 className="article-title">{article.content.title}</h3></a>
					<a href={readMore}><img className="article-image" src={article.content.image} alt="" /></a>
					<div className="article-description">{Parser( htmlClean )}</div>
					<a href={readMore} className="article-link">Read More</a>
		    </div>
	    );
	}
}

export default ArticleAbstractVertical;