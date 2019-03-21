import {SELECT_SOURCE, REQUEST_POSTS, RECEIVE_POSTS} from '../constants/action-types';
import staticData from '../constants/static-data';
import axios from 'axios';

export const getSource = source => ({
  type: SELECT_SOURCE,
  source,
});

export const requestPosts = () => ({
  type: REQUEST_POSTS,
});

export const receivePosts = json => ({
  type: RECEIVE_POSTS,
  json: json.articles,
});

export function fetchPosts(source) {
  return function (dispatch) {
    dispatch(requestPosts());
    axios.get(staticData.api.newsBase + staticData.api.newsAPIToken + '&sources=' + source)
      .then( res =>{
        dispatch(receivePosts(res.data))
      });
  }
}