import React, { Component } from 'react';
import './css/mainstyle.css';
import './css/index.css';
import './css/home.css';
import WeatherApi from './js/weather.js';
import AddNewItemPage from './js/addnew.js'
const urlVal = window.location.pathname;
if (urlVal === "/"){
window.location.pathname = "/index.html";
}
class App extends Component {

    render() {

      if (urlVal === "/index.html") {
        return (
          <div>
            <header>
              <div className="headerChild1">
                <div className="headerChild1Child1"><a href="home.html"><img src={require('./img/icons/nav/white/navicon1.png')} width="22px" /></a></div>
                <div className="headerChild1Child1"><a href="addclothes.html"><img src={require('./img/icons/nav/white/navicon2.png')} width="22px"/></a></div>
              </div>
              <div className="headerChild2">elements</div>
              <div id="headerChild3">{findTime()}</div>
            </header>
            <content>
              <div className="mainContentBox">
                <div className="indexBoxChild1">

                </div>
                <div className="indexBoxChild2">
                  <div className="pageMessage">Sign in:</div>
                  <form action="./home.html" className="signupForm">
                    <div className="indexFormBox">
                      <p className="indexFormBoxTitle">USERNAME: </p>
                      <input type="text" name="username" className="indexFormBoxCont"/>
                    </div>
                    <div className="indexFormBox">
                      <p className="indexFormBoxTitle">CITY: </p>
                      <input type="text" name="city" className="indexFormBoxCont"/>
                    </div>
                    <div className="indexFormButton"><input type="submit" value="Submit" id="indexSubmitButton"/></div>
                  </form>
                </div>
              </div>
            </content>
            <footer>
              DAT504 Advanced Web Technologies
            </footer>
          </div>
        );
    }
    else if (urlVal === "/home.html") {
    return (
      <WeatherApi></WeatherApi>
    );
    }
    else if (urlVal === "/addclothes.html") {
    return (
      <AddNewItemPage></AddNewItemPage>
    );
    }
  }
}
export default App;

function findTime() {
  var time = new Date();
  return time.toLocaleString('en-UK', { hour: 'numeric', minute: 'numeric', hour12: true });
}
