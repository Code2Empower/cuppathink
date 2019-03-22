import React from 'react';
import { connect } from 'react-redux';
import  NewsItem  from '../components/NewsItem';

let NewsFeed = ({ json, loading }) => {
    let NewsFeed = '';
    if(json){
      NewsFeed = json.map((news, index) =>(
        <NewsItem key={index} news={json[index]} />
      )
     )
    }
   if(loading){
    NewsFeed = <h3 className="loading-indicator">Loading ...</h3>
  }
  return (
   <div className="news-feed-wrapper right-50">
     {NewsFeed}
   </div>
  )
}

const mapStateToProps = (state) => ({
  json: state.news.json,
  loading: state.loading
});

NewsFeed = connect(mapStateToProps,null)(NewsFeed)
export default NewsFeed;