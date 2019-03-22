import React, { Component } from "react";
import {connect} from 'react-redux';

let darkMode = localStorage.getItem('darkMode') ==='dark' ? true : false;

function checkTheme(){
  if (!darkMode){
    document.body.className = 'light';
    document.querySelector('.sun i').className = 'fas fa-sun';
    document.querySelector('.moon i').className = 'fas fa-cloud-moon';
  }
  document.querySelector('#dmcheck').checked = darkMode;
}
function setTheme(className){
  let isDark = className === 'dark' ? true : false;
  document.body.className = className;
  localStorage.setItem('darkMode', className);
  document.querySelector('#dmcheck').checked = isDark;
  if(isDark){
    document.querySelector('.sun i').className = 'fas fa-cloud-sun';
    document.querySelector('.moon i').className = 'fas fa-moon';
  }else{
    document.querySelector('.sun i').className = 'fas fa-sun';
    document.querySelector('.moon i').className = 'fas fa-cloud-moon';
  }
}
function toggleTheme(elem){
  if(darkMode === true){
    document.body.className = 'light';
    localStorage.setItem('darkMode', 'light');
    darkMode = false;
    elem.checked = darkMode;
    document.querySelector('.sun i').className = 'fas fa-sun';
    document.querySelector('.moon i').className = 'fas fa-cloud-moon';
  }else{
    document.body.className = 'dark';
    localStorage.setItem('darkMode', 'dark');
    darkMode = true;
    elem.checked = darkMode;
    document.querySelector('.sun i').className = 'fas fa-cloud-sun';
    document.querySelector('.moon i').className = 'fas fa-moon';
  }
}

class DarkModeToggle extends Component {
  componentDidMount(){
    checkTheme();
  }

  render() {
    return (
      <div className="dark-mode-toggle">
        <button className="sun" type="button" onClick={() => setTheme('light')}>
          <i className="fas fa-cloud-sun"></i>
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
        <button type="button" className="moon" onClick={() => setTheme('dark')}>
          <i className="fas fa-moon"></i>
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