import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store, { history } from "./js/store/index";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import App from './App';

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById("root")
);