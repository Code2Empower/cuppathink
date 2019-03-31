import React, { Component } from 'react';
import Parser from 'html-react-parser';
import { articleDetailLinker, purifyHTML} from '../helpers/helpers';

class ArticleAbstract extends Component {
	render() {
		const article = this.props.article;
		const readMore = articleDetailLinker(article.slug, 'internal');

		return (
		    <div className="article-item">
		    	<div className="left-35">
					<a href={readMore}><img className="article-image" src={article.content.image} alt="" /></a>
				</div>
				<div className="right-65">
					<a href={readMore} className="no-decoration"><h3 className="article-title">{article.content.title}</h3></a>
					<div className="article-description">{Parser( purifyHTML(article.content.abstract, 'both') )}</div>
					<a href={readMore} className="article-link">Read More</a>
		    	</div>
		    </div>
	    );
	}
}

export default ArticleAbstract;