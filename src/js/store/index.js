import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import {reducers} from '../reducers/index';

export const history = createHistory();

const store = createStore(
 	reducers,
 	applyMiddleware(thunk, logger)
);

export default store;