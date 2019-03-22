import React, { Component } from 'react';
import showdown from 'showdown';
import DOMPurify from 'dompurify';
import Parser from 'html-react-parser';
import { render } from 'react-dom';
import { articleDetailLinker } from '../helpers/helpers';

const converter = new showdown.Converter();

class ArticleAbstract extends Component {
	render() {
		const article = this.props.article;
		console.log(article)
		const htmlDirty = converter.makeHtml(article.content.abstract);
		const htmlClean = DOMPurify.sanitize(htmlDirty).toString();
		const readMore = articleDetailLinker(article.slug, 'internal');

		return (
		    <div className="article-item">
		    	<div className="left-35">
					<a href={readMore}><img className="article-image" src={article.content.image} alt="" /></a>
				</div>
				<div className="right-65">
					<a href={readMore} className="no-decoration"><h3 className="article-title">{article.content.title}</h3></a>
					<div className="article-description">{Parser( htmlClean )}</div>
					<a href={readMore} className="article-link">Read More</a>
		    	</div>
		    </div>
	    );
	}
}

export default ArticleAbstract;