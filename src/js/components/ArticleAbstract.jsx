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
		       <h3 className="article-title">{article.content.title}</h3>
		       <img className="article-image" src={article.content.image} alt="" />
		       <div className="article-description">{Parser( htmlClean )}</div>
		       <a href={readMore} className="article-link"> read more </a>
		    </div>
	    );
	}
}

export default ArticleAbstract;