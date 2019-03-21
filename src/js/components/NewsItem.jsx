import React from 'react';

const NewsItem = ({ news }) => (
    <div className="news-item">
       <h3 className="news-title">{news.title}</h3>
       <img className="news-image" src={news.urlToImage} alt="" />
       <p className="news-description">{news.description}</p>
       <a href={news.url} className="news-link" target="_blank" rel="noopener noreferrer"> read more </a>
    </div>
);

export default NewsItem;