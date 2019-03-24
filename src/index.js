import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store, { history } from "./js/store/index";

import App from './App';

render(
	<Provider store={store}>
		<App/>	
	</Provider>,
	document.getElementById("root")
);