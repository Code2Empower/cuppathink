import React, { Component } from "react";
import {connect} from 'react-redux';

let darkMode = localStorage.getItem('darkMode') ==='dark' ? true : false;

function checkTheme(){
  if (!darkMode){
    document.body.className = 'light';
  }
  document.querySelector('#dmcheck').checked = darkMode;
}
function setTheme(className){
  let isDark = className === 'dark' ? true : false;
  document.body.className= className;
  localStorage.setItem('darkMode', className);
  document.querySelector('#dmcheck').checked = isDark;
}
function toggleTheme(elem){
  if(darkMode === true){
    document.body.className = 'light';
    localStorage.setItem('darkMode', 'light');
    darkMode = false;
    elem.checked = darkMode;
  }else{
    document.body.className = 'dark';
    localStorage.setItem('darkMode', 'dark');
    darkMode = true;
    elem.checked = darkMode;
  }
}

class DarkModeToggle extends Component {
  componentDidMount(){
    checkTheme();
  }

  render() {
    return (
      <div className="dark-mode-toggle">
        <button type="button" onClick={() => setTheme('light')}>
          ☀
        </button>
        <span className="toggle-control">
          <input
            className="dmcheck"
            type="checkbox"
            onChange={(e)=> {toggleTheme(e.target)}}
            id="dmcheck"
            value={darkMode}
          />
          <label htmlFor="dmcheck" />
        </span>
        <button type="button" onClick={() => setTheme('dark')}>
          ☾
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  darkmode: state.app.darkMode
});

DarkModeToggle = connect(mapStateToProps,null)(DarkModeToggle)
export default DarkModeToggle; 