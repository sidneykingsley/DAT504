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
  usernameVal = usernameCheck.replace(/[=&]/g, "");
  locationCity = locationInfo.replace(/\+/g, " ");
  locationCity = locationCity.replace(/%2C/g, ", ");
  locationCity = locationCity.replace(/%20/g, " ");
  console.log(locationCity);
 }

let findUser;
let findTops;
let findBottoms;
let findOut;
let roundedTempData;
let findTshirt;
let findJumper;
let findShorts;
let findTrousers;
let findWaterproofCoat;
let findNormalCoat;
let findCoat;

const urlForApi = apiUrl =>
  `https://api.openweathermap.org/data/2.5/weather?q=${locationCity}&appid=c49e1a20896cceeb541fa744cce3613e`
const url = "http://localhost:4000/getItems";



// var newguy = findTops[0];


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
    roundedTempData = Math.round( temperatureData * 10 ) / 10;
    const descData = this.state.WeatherApiData.weather[0].description;
    const iconData = this.state.WeatherApiData.weather[0].icon;
    const srcIconData = iconData;

    function displayData() {
          if (roundedTempData >= 20) {
            console.log("greater than 20");
            return "1";
          } else if (roundedTempData>10&&roundedTempData<20) {
              console.log("less than or equal to 20");
              return "2";
          } else if (roundedTempData <= 10) {
            return "3";
          } else {
            console.log("error")
          }
    }

    return (
      <div>
      <header>
        <div className="headerChild1">
          <div className="headerChild1Child1"><a href={"home.html?username="+usernameVal+"&city="+locationCity}><img alt="" src={require('../img/icons/nav/white/navicon1.png')} width="22px" /></a></div>
          <div className="headerChild1Child1"><a href={"addclothes.html?username="+usernameVal+"&city="+locationCity}><img alt="" src={require('../img/icons/nav/white/navicon2.png')} width="22px"/></a></div>
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
                    <img alt="" src={require("../img/icons/weather/"+srcIconData+".png")} id="weatherIcon"/>
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
                <p className="topsSectionTitle">BOTTOMS:</p>
                <div className="displayBox" id="bottomsDisplayBox">trousers</div>
                <p className="topsSectionTitle">OUTERWEAR:</p>
                <div className="displayBox" id="outerwearDisplayBox">coat</div>
              </div>
            </div>
            <div className="outfitGraphicContainer">
              <img alt="" id="topsDisplayIcon" className="outfitGraphic1" src={require('../img/icons/clothes/topsIcon.png')} width="200px" />
              <div id="topCaptions">
                <p id="tShirtDisplayGraph">tshirt</p>
                <p id="outerwearDisplayGraph">coat</p>
              </div>
              <img alt="" id="bottomsDisplayIcon" className="outfitGraphic2" src={require('../img/icons/clothes/bottomsIcon.png')} width="200px" />
              <div id="bottomCaptions">
                <p id="bottomsDisplayGraph">trousers</p>
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


if (urlVal === "/home.html") {

window.onload = function() {
    fetch(url)
      .then(function(response) {
          return response.json();
    })
    .then(function(myJson) {
        findUser =  myJson.filter(
          function(username) {
            return username.username === usernameVal;
          }
        );
        console.log("all items from username", findUser);

        findTops = findUser.filter(function(type) {
        return type.category === "1";
        });
        console.log("Tops", findTops);

        findTshirt = findUser.filter(function(type) {
        return type.type === "T-Shirt";
        });
        console.log("T-Shirt", findTshirt);

        findJumper = findUser.filter(function(type) {
        return type.type === "Jumper";
        });
        console.log("Jumper", findJumper);

        findBottoms =  findUser.filter(function(type) {
        return type.category === "2";
        });
        console.log("Bottoms", findBottoms);

        findShorts = findUser.filter(function(type) {
        return type.type === "Shorts";
        });
        console.log("Jumper", findShorts);

        findTrousers = findUser.filter(function(type) {
        return type.type === "Trousers";
        });
        console.log("Jumper", findTrousers);

        findOut =  findUser.filter(function(type) {
        return type.category === "3";
        });
        console.log("OuterWear", findOut);

        findCoat = findUser.filter(function(type) {
        return type.type === "Coat";
        });
        console.log("coats", findCoat);

        findWaterproofCoat = findCoat.filter(function(type) {
        return type.waterproofing === "true";
        });
        console.log("Waterproof", findWaterproofCoat);

        findNormalCoat = findCoat.filter(function(type) {
        return type.waterproofing === "false";
        });
        console.log("Not-Waterproof", findNormalCoat);

        var affectTempData = document.getElementById("weatherTemp").textContent;
        var affectRainData = document.getElementById("weatherDesc").textContent;
        var rainSelect = affectRainData.match(/rain/g);
        if (rainSelect != null){var rainBoolean = true;}
        else {rainBoolean = false;}
        var tempSelect = affectTempData.replace(/°/g, "");
        if (tempSelect > 15){var tempBoolean = true;}
        else {var tempBoolean = false;}
        console.log(affectTempData+" "+affectRainData);
        console.log(rainBoolean+" "+tempBoolean);

        if (findTops.length === 0){
          document.getElementById('tShirtDisplayBox').innerHTML = "No tops have been added yet.";
          document.getElementById('tShirtDisplayGraph').innerHTML = "No tops have been added yet.";
        }
        else {
          if (tempBoolean === true) {
            var topsSelection = findTshirt[Math.floor(Math.random()*findOut.length)].colour +" "+ findTshirt[0].type;
          }
          else {
            var topsSelection = findJumper[0].colour +" "+ findJumper[0].type;
          }
          document.getElementById('tShirtDisplayBox').innerHTML = topsSelection;
          document.getElementById('tShirtDisplayGraph').innerHTML = topsSelection;

        }
        if (findBottoms.length === 0){
          document.getElementById('bottomsDisplayBox').innerHTML = "No bottoms have been added yet.";
          document.getElementById('bottomsDisplayGraph').innerHTML = "No bottoms have been added yet.";
        }
        else {
          if (tempBoolean === true) {
            var bottomsSelection = findShorts[Math.floor(Math.random()*findOut.length)].colour +" "+ findShorts[0].type;
          }
          else {
            var bottomsSelection = findTrousers[0].colour +"  "+ findTrousers[0].type;
          }
          document.getElementById('bottomsDisplayBox').innerHTML = bottomsSelection;
          document.getElementById('bottomsDisplayGraph').innerHTML = bottomsSelection;
        }
        if (!findBottoms.length === 0){
          document.getElementById('outerwearDisplayBox').innerHTML = "No outwear has been added yet.";
          document.getElementById('outerwearDisplayGraph').innerHTML = "No tops have been added yet.";
        }
        else {
          if (rainBoolean === true) {
            var outwearSelection = findWaterproofCoat[0].colour +" Waterproof "+ findWaterproofCoat[0].type;
          }
          else {
            var outwearSelection = findCoat[Math.floor(Math.random()*findOut.length)].colour +" "+ findCoat[0].type;
          }
          document.getElementById('outerwearDisplayBox').innerHTML = outwearSelection;
          document.getElementById('outerwearDisplayGraph').innerHTML = outwearSelection;
        }

      });
  }
}


// function findDay() {
//   date
// }

// console.log(roundedTempData);

  // fetch(url)
  //   .then(function(response) {
  //       return response.json();
  // })
  // .then(function(myJson) {
  //     findUser =  myJson.filter(function(username) {
  //     return username.username === usernameVal;
  //     });
  //     console.log("all items from username", findUser);
  //
  //     findTops = findUser.filter(function(type) {
  //     return type.category === "1";
  //     });
  //     console.log("Tops", findTops[0].type);
  //
  //     findBottoms =  findUser.filter(function(type) {
  //     return type.category === "2";
  //     });
  //     console.log("Bottoms", findBottoms);
  //
  //     findOut =  findUser.filter(function(type) {
  //     return type.category === "3";
  //     });
  //     console.log("OuterWear", findOut);
  //   })



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
