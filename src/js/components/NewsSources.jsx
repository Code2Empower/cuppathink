import React from 'react';
import NewsSource from '../components/NewsSource';
import staticData from '../constants/static-data';

const NewsSources = () => (
	staticData.channels.map((source, index) =>(
	    <NewsSource key={index} sourceName={source.name} sourceID={source.id} />
      )
     )

 );
export default NewsSources;