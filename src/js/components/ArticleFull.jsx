import React, { Component } from 'react';
import { connect } from 'react-redux';
import showdown from 'showdown';
import DOMPurify from 'dompurify';
import Parser from 'html-react-parser';
import { render } from 'react-dom';
import { articleDetailLinker } from '../helpers/helpers';

const converter = new showdown.Converter();

class ArticleFull extends Component {
	render() {
		const article = this.props.article;
		console.log('article details from articleFull Component:', article);

		if(typeof(article) !== 'undefined'){
			const htmlDirty = converter.makeHtml(article.content.markdown);
			const htmlClean = DOMPurify.sanitize(htmlDirty).toString();

			return (
			    <div className="article-item">
			       <img className="article-image" src={article.content.image} alt="" />
			       <h1 className="article-title">{article.content.title}</h1>
			       <div className="article-description">{Parser( htmlClean )}</div>
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