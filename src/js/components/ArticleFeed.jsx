import React from 'react';
import { connect } from 'react-redux';
import  ArticleAbstract  from '../components/ArticleAbstract';

let ArticleFeed = ({ json, loading }) => {
    let ArticleFeed = '';
    if(json){
      ArticleFeed = json.map((article, index) =>(
        <ArticleAbstract key={index} article={json[index]} />
      )
     )
    }
   if(loading){
    ArticleFeed = <h3 className="loading-indicator">Loading ...</h3>
  }
  return (
   <div className="article-feed-wrapper">
     {ArticleFeed}
   </div>
  )
}

const mapStateToProps = (state) => ({
  json: state.articles.posts,
});

ArticleFeed = connect(mapStateToProps,null)(ArticleFeed)
export default ArticleFeed;