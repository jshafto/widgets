import React from 'react';


class Weather extends React.Component {
  constructor () {
    super();

    this.state = {
      weather: "Loading...",
      city: "Loading..."
    };

  }

  pollWeather = async ({coords}) => {
    const apikey = "insertAPIKeyHere"
    const {latitude, longitude} = coords;
    try {
      const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`;
      const res = await fetch(url);
      const data = await res.json();
      this.setState({
           weather: Math.floor((data.main.temp-273) * (9/5) + 32),
           city: data.name,
      });
    } catch {
      this.setState({
        weather: "Unknown",
        city: "Unknown",
      })
    }
  }

  componentDidMount () {
    navigator.geolocation.getCurrentPosition(this.pollWeather);
  }


  render() {
    return (
      <div className="weather-box">
        <h1 className="widget-header">Weather</h1>
        <div className="weather-city">
          <div>{`${this.state.weather}°`}</div>
          <div>{`${this.state.city}`}</div>
        </div>
      </div>
    )
  }

}
export default Weather;
