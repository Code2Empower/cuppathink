import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

let NewsFetchButton = ({ getPosts, source }) => (
	<div
	  onClick={() => { getPosts(source) }}
	  className='button'
	>
	  Get top news
	</div>
);

const mapStateToProps = (state) => ({ source: state.source });
const mapDispatchToProps = { getPosts: fetchPosts };
NewsFetchButton = connect(mapStateToProps,mapDispatchToProps)(NewsFetchButton);
export default NewsFetchButton;