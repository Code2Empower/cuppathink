import React, { Component } from "react";
import './App.scss';
import './fonts/fa-all-min.css';
import { connect } from 'react-redux';
import { history } from './js/store/index';
import Header from './js/components/Header';
import DarkModeToggle from './js/components/DarkModeToggle';
import Footer from './js/components/Footer';
import Home from './js/views/Home';
import About from './js/views/About';
import OnlineResearchHelp from './js/views/OnlineResearchHelp';
import NoMatch from './js/views/NoMatch';
import Articles from './js/views/Articles';
import ArticleDetail from './js/views/ArticleDetail';
import News from './js/views/News';
import axios from 'axios';
import staticData from './js/constants/static-data';
import {parseStoryblockData} from './js/helpers/helpers';
import {APP_LOADED} from './js/constants/action-types';
import { 
  Router, 
  Route, 
  Link, 
  Switch
} from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    const { onLoad } = this.props;
    const cv = '&cv='+ Math.floor(Date.now()/1000);
    axios.get(staticData.api.storyblockBase+'stories/?starts_with=app&version=published&'+staticData.api.storyblockToken+cv)
    .then(res => {
      const APIdata = res.data;
      console.log('App: Storyblok API Data:', APIdata);
      const appData = parseStoryblockData(APIdata.stories);
      console.log('App: appData', appData)
      onLoad(appData);
    });
  }
  
  render() {

    return (
      <div className="App">
        <Router history={history}>
          <div>
            <Header/>
            <DarkModeToggle/>
            <div className="main">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/news" exact component={News} />
                <Route path="/about" exact component={About} />
                <Route path="/online-research-help" exact component={OnlineResearchHelp} />
                <Route path="/articles" exact component={Articles} />
                <Route path="/articles/:page" component={Articles} />
                <Route path="/articledetail/" component={ArticleDetail} />
                <Route component={NoMatch} />
              </Switch>
            </div>
          <Footer/>
          </div>
        </Router>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  app: state.app,
});
const mapDispatchToProps = dispatch => ({
  onLoad: data => dispatch({ type: APP_LOADED, data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);