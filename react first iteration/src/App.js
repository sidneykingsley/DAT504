import React, { Component } from 'react';
import './css/mainstyle.css';
import './css/home.css';
import WeatherApi from './js/weather.js';

class App extends Component {

    render() {

    return (
      <div>
        <script src={require('./js/script.js')}></script>
        <header>
          <div className="headerChild1">
            <div className="headerChild1Child1"><a href="home.html"><img src={require('./img/icons/nav/white/navicon1.png')} width="22px" /></a></div>
            <div className="headerChild1Child1"><a href="addclothes.html"><img src={require('./img/icons/nav/white/navicon2.png')} width="22px"/></a></div>
            <div className="headerChild1Child1"><a href="laundry.html"><img src={require('./img/icons/nav/white/navicon3.png')} width="22px"/></a></div>
            <div className="headerChild1Child1"><a href="yourclothes.html"><img src={require('./img/icons/nav/white/navicon4.png')} width="22px"/></a></div>
            <div className="headerChild1Child1"><a href="settings.html"><img src={require('./img/icons/nav/white/navicon5.png')} width="22px"/></a></div>
          </div>
          <div className="headerChild2">elements</div>
          <div id="headerChild3">time</div>
        </header>
        <content>
          <div className="mainContentBox">
            <div className="contBoxChild1">
              <div className="pageMessage" id="timeOfDayWelcomeMessage">Good morning, *yourname*</div>
            </div>
            <div className="contBoxChild2">
              <div className="outfitWeatherContainer">
                <div className="weatherDisplayTable">
                  <img src={require('./img/icons/weather/placementicon.png')} id="weatherIcon"/>
                  <div className="weatherText">
                    <WeatherApi></WeatherApi>
                  </div>
                </div>
                <div className="outfitDisplayTable">
                  <h1 className="outfitDisplayTitle">Todays Outfit Breakdown:</h1>
                  <p className="topsSectionTitle">TOPS:</p>
                  <div className="displayBox" id="tShirtDisplayBox">tshirt</div>
                  <div className="displayBox" id="jumperDisplayBox">jumper</div>
                  <p className="topsSectionTitle">TOPS:</p>
                  <div className="displayBox" id="bottomsDisplayBox">trousers</div>
                  <p className="topsSectionTitle">TOPS:</p>
                  <div className="displayBox" id="outerwearDisplayBox">coat</div>
                </div>
              </div>
              <div className="outfitGraphicContainer">
                <img id="topsDisplayIcon" className="outfitGraphic1" src={require('./img/icons/clothes/topsIcon.png')} width="200px" />
                <div id="topCaptions">
                  <p id="tShirtDisplayBox">tshirt</p>
                  <p id="jumperDisplayBox">jumper</p>
                  <p id="outerwearDisplayBox">coat</p>
                </div>
                <img id="bottomsDisplayIcon" className="outfitGraphic2" src={require('./img/icons/clothes/bottomsIcon.png')} width="200px" />
                <div id="bottomCaptions">
                  <p id="bottomsDisplayBox">trousers</p>
                </div>
              </div>
            </div>
          </div>
        </content>
        <footer>
          DAT504 Advanced Web Technologies
        </footer>
      </div>
    );
  }
}

export default App;
