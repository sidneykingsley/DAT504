import React, { Component } from 'react';
var locationCity = "london";
var usernameVal = "UserNameNotFilledOut";
const urlVal = window.location.pathname;
if (urlVal === "/home.html") {
  var signinUrl = window.location.search;
  console.log(signinUrl);
  var locationInfoArray;
  locationInfoArray = signinUrl.match(/[^=]*$/g);
  var locationInfo = locationInfoArray[0];
  var usernameArray = signinUrl.match(/=.*&/g);
  var usernameCheck = usernameArray[0];
  var usernameVal = usernameCheck.replace(/[=&]/g, "");
  var locationCity = locationInfo.replace(/\+/g, " ");
  locationCity = locationCity.replace(/\%2C/g, ", ");
  locationCity = locationCity.replace(/\%20/g, " ");
  console.log(locationCity);
 }
const urlForApi = apiUrl =>
  `https://api.openweathermap.org/data/2.5/weather?q=${locationCity}&appid=c49e1a20896cceeb541fa744cce3613e`
class WeatherApi extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    fetch(urlForApi(this.props.apiUrl))
      .then(response => {
        if (!response.ok) {
          throw Error("Please enter an existing location.")
        }
        return response
      })
      .then(d => d.json())
      .then(d => {
        this.setState({
          WeatherApiData: d
        })
      })
  }
  render() {
    if(!this.state.WeatherApiData) return <p>Loading..</p>
    const temperatureData = this.state.WeatherApiData.main.temp - 273.15;
    const roundedTempData = Math.round( temperatureData * 10 ) / 10;
    const descData = this.state.WeatherApiData.weather[0].description;
    const iconData = this.state.WeatherApiData.weather[0].icon;
    const srcIconData = iconData;
    return (
      <div>
      <header>
        <div className="headerChild1">
          <div className="headerChild1Child1"><a href={"home.html?username="+usernameVal+"&city="+locationCity}><img src={require('../img/icons/nav/white/navicon1.png')} width="22px" /></a></div>
          <div className="headerChild1Child1"><a href={"addclothes.html?username="+usernameVal+"&city="+locationCity}><img src={require('../img/icons/nav/white/navicon2.png')} width="22px"/></a></div>
        </div>
        <div className="headerChild2">elements</div>
        <div id="headerChild3">{findTime()}</div>
      </header>
      <content>
        <div className="mainContentBox">
          <div className="contBoxChild1">
            <div className="pageMessage" id="timeOfDayWelcomeMessage">{welcomeMessageFunc()}</div>
          </div>
          <div className="contBoxChild2">
            <div className="outfitWeatherContainer">
                  <div>
                    <div className="weatherDisplayTable">
                    <img src={require("../img/icons/weather/"+srcIconData+".png")} id="weatherIcon"/>
                    <div className="weatherText">
                      <h1 id="weatherTemp">{roundedTempData+"°"}</h1>
                      <p id="weatherDesc">{descData}</p>
                      <p id="locationCityCaption">{locationCity}</p>
                    </div>
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
              <img id="topsDisplayIcon" className="outfitGraphic1" src={require('../img/icons/clothes/topsIcon.png')} width="200px" />
              <div id="topCaptions">
                <p id="tShirtDisplayBox">tshirt</p>
                <p id="jumperDisplayBox">jumper</p>
                <p id="outerwearDisplayBox">coat</p>
              </div>
              <img id="bottomsDisplayIcon" className="outfitGraphic2" src={require('../img/icons/clothes/bottomsIcon.png')} width="200px" />
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
    )
  }
}

export default WeatherApi;

function findTime() {
  var time = new Date();
  return time.toLocaleString('en-UK', { hour: 'numeric', minute: 'numeric', hour12: true });
}


function welcomeMessageFunc() {
  var d = new Date();
  var n = d.getHours();
  var prefixer;
  if (n>=0&&n<=12) prefixer = "Good morning, ";
  else if (n>=12&&n<=17) prefixer = "Good afternoon, ";
  else prefixer = "Good night, ";
  var welcMessage = prefixer + usernameVal;
  return welcMessage;
}


const url = "http://localhost:4000/getItems";

fetch(url)
        .then(function(response) {
            return response.json();
    })

    .then(function(myJson) {

        let findUser =  myJson.filter(function(username) {
        return username.username === usernameVal;
        });
        console.log("all items from username", findUser);


        let findTops =  findUser.filter(function(type) {
        return type.category === "1";
        });
        console.log("Tops", findTops);

        let findBottoms =  findUser.filter(function(type) {
        return type.category === "2";
        });
        console.log("Bottoms", findBottoms);

        let findOut =  findUser.filter(function(type) {
        return type.category === "3";
        });
        console.log("OuterWear", findOut);
      })

  //   const clothesList = document.querySelector('.clothesList');
  //   fetch(url)
  //       .then(function(response) {
  //           return response.json();
  //   })
  //   .then(function(myJson) {
  //     var findUser =  myJson.filter(function(username) {
  //     return username.username === usernameVal;
  //     });
  //           let dataFeed = findUser.map((myClothes) => {
  //               return `
  //                       <ul stlye="list-style: none;" id="clothingList">
  //                       <li id='cL'>Type: ${myClothes.type}</li>
  //                       <li id='cL'>Colour: ${myClothes.colour}</li>
  //                       <li id='cL'>Warmth: "${myClothes.warmth}"</li>
  //                       </ul>`
  //           }).join('');
  //           clothesList.innerHTML = dataFeed;
  //       })
  //       .catch(err => { throw err });
  // })
