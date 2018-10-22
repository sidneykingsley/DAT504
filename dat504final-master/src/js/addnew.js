import React, { Component } from 'react';
const urlVal = window.location.pathname;
if (urlVal === "/addclothes.html") {
  var signinUrl = window.location.search;
  var locationInfoArray;
  locationInfoArray = signinUrl.match(/[^=]*$/g);
  var locationInfo = locationInfoArray[0];
  var usernameArray = signinUrl.match(/=.*&/g);
  var usernameCheck = usernameArray[0];
  var usernameVal = usernameCheck.replace(/[=&]/g, "");
  var locationCity = locationInfo.replace(/\+/g, " ");
  locationCity = locationCity.replace(/%2C/g, ", ");
  console.log(locationCity);
 }
class AddNewItemPage extends Component {
  state = {
    washCount:2
  }

  addNum = () =>{
    this.setState({
      washCount: this.state.washCount + 1,
    })
  }

  minNum = () =>{
      this.setState(prevState =>
          ({washCount: prevState.washCount? prevState.washCount-1: 0})
      )
  }

  render() {
    return(
      <div>
      <header>
        <div className="headerChild1">
          <div className="headerChild1Child1"><a href={"home.html?username="+usernameVal+"&city="+locationCity}><img alt="" src={require('../img/icons/nav/black/navicon1.png')} width="22px" /></a></div>
          <div className="headerChild1Child1"><a href="addclothes.html"><img alt="" src={require('../img/icons/nav/black/navicon2.png')} width="22px"/></a></div>
        </div>
        <div className="headerChild2">elements</div>
        <div id="headerChild3">{findTime()}</div>
      </header>
      <content>
        <div className="mainContentBox">
          <div className="pageMessage">Add a new item of clothing:</div>
          <form action="http://localhost:4000/addItems" method='post' className="addNewItemForm">
            <div className="addFormBox">
              <p className="addFormBoxTitle">TYPE:</p>
              <select name="type" className="addFormBoxCont">
                <option value="T-Shirt">T-Shirt</option>
                <option value="Jumper">Jumper</option>
                <option value="Trousers">Trousers</option>
                <option value="Shorts">Shorts</option>
                <option value="Coat">Coat</option>
              </select>
            </div>
            <div className="addFormBox">
              <p className="addFormBoxTitle">WARMTH:</p>
              <select name="warmth" className="addFormBoxCont">
                <option value="1">For hot weather</option>
                <option value="2">For cold weather</option>
              </select>
            </div>
            <div className="addFormBox">
              <p className="addFormBoxTitle">CATEGORY:</p>
              <select name="category" className="addFormBoxCont">
                <option value="1">Tops</option>
                <option value="2">Bottoms</option>
                <option value="3">Outerwear</option>
              </select>
            </div>
            <div className="addFormBox">
            <div className="addFormBoxTitle"><p>WASH:</p><p id="washInfoButton">(info)</p><p id="washInfo">(use the add and min buttons to enter how many times you would like to wear this item before washing it)</p></div>
              <input id="userInputWash" className="addFormBoxCont" value={this.state.washCount}name="timesWorn" onkeypress="return false;"/>
              <div id="addCountButtonCont">
                <button id="reactBtn1" className="reactBtn" type="button" onClick={this.addNum}>ADD</button>
                <button id="reactBtn2" className="reactBtn" type="button" onClick={this.minNum}>MIN</button>
              </div>
            </div>
            <div className="addFormBox">
              <p className="addFormBoxTitle">WATERPROOFING:</p>
              <select name="waterproofing" className="addFormBoxCont">
                <option value="false">Not Waterproof</option>
                <option value="true">Waterproof</option>
              </select>
            </div>
            <div className="addFormBox">
              <p className="addFormBoxTitle">COLOUR:</p>
                <input type="text" name="colour" id="addFormBoxContText"/>
            </div>
              <select name="username" id="addBoxUsername">
                <option value={usernameVal}></option>
              </select>
            <div className="addFormButton"><input type="submit" onClick={itemAlert} value="Submit" id="addSubmitButton"/></div>
          </form>
        </div>
      </content>
      <footer>
        DAT504 Advanced Web Technologies
      </footer>
      </div>
    )
  }
}

if (urlVal === "/addclothes.html") {
window.onload = function() {
  document.body.style.backgroundColor = "#fff"
  document.body.style.color = "#000"
}
}

export default AddNewItemPage;

function findTime() {
  var time = new Date();
  return time.toLocaleString('en-UK', { hour: 'numeric', minute: 'numeric', hour12: true });
}

function itemAlert() {
alert("Item added to your profile")
}
