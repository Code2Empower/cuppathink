import React from 'react';
import { connect } from 'react-redux';
import  ArticleAbstractVertical  from '../components/ArticleAbstractVertical';

let ArticleFeedShort = ({ json, loading }) => {
    let ArticleFeed = '';
    if(json){
      ArticleFeed = json.map((article, index) =>(
        <ArticleAbstractVertical key={index} article={json[index]} />
      )
     )
    }
   if(loading){
    ArticleFeed = <h3 className="loading-indicator">Loading ...</h3>
  }
  return (
   <div className="article-feed-wrapper container">
     {ArticleFeed}
   </div>
  )
}

const mapStateToProps = (state) => ({
  json: state.articles.posts,
});

ArticleFeedShort = connect(mapStateToProps,null)(ArticleFeedShort)
export default ArticleFeedShort;