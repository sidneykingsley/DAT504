import React, { Component } from 'react';
const locationCity = "London";
const urlForUsername = username =>
  `https://api.openweathermap.org/data/2.5/weather?q=${locationCity}&appid=c49e1a20896cceeb541fa744cce3613e`

class WeatherApi extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    fetch(urlForUsername(this.props.username))
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed")
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
    return (
      <div>
        <h1 id="weatherTemp">{roundedTempData+"°"}</h1>
        <p id="weatherDesc">{descData}</p>

      </div>
    )
  }
}

export default WeatherApi;
