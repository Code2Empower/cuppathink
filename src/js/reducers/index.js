import {APP_LOADED, ARTICLES_LOADED, ARTICLEDETAIL_LOADED, HOME_LOADED, ABOUT_LOADED, ONLINERESEARCHHELP_LOADED, NEWS_LOADED, SELECT_SOURCE, REQUEST_POSTS, RECEIVE_POSTS} from '../constants/action-types';

const initialState = {
	app:{
    darkMode:true
  },
	home:{},
  about:{},
  onlineResearchHelp:{},
	articles:{},
  articleDetail:{},
	news:{
    page:{},
    json:null
  },
  source:'bbc-news'
}

export const reducers = (state = initialState, action) => {
  switch(action.type) {
    case APP_LOADED:
      return Object.assign({}, state, {
        app: action.data
      });
    case ARTICLES_LOADED:
      return Object.assign({}, state, {
        articles: action.data
      });
    case ARTICLEDETAIL_LOADED:{
      return Object.assign({}, state, {
        articleDetail: action.data
      });
    }
    case HOME_LOADED:
      return Object.assign({}, state, {
        home: action.data
      });
    case ABOUT_LOADED:
      return Object.assign({}, state, {
        about: action.data
      });
    case ONLINERESEARCHHELP_LOADED:
      return Object.assign({}, state, {
        onlineResearchHelp: action.data
      });
    case NEWS_LOADED:
      return Object.assign({}, state, {
        news: action.data
      });
    case SELECT_SOURCE:
       return { ...state, source: action.source };
    case REQUEST_POSTS:
       return { ...state, loading: true };
    case RECEIVE_POSTS:
       return {
        ...state, 
        news:{
          ...state.news.page,
          json: action.json
        },
        loading: false
      };
    default:
      return state;
  }
};