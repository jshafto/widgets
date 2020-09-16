import React from 'react';


class Weather extends React.Component {
  constructor () {
    super();

    this.state = {
      weather: null,
      city: null
    };

  }

  pollWeather = async ({coords}) => {
    const {latitude, longitude} = coords;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    this.setState({
         weather: Math.floor((data.main.temp-273) * (9/5) + 32),
         city: data.name,
    });
  }

  componentDidMount () {
    navigator.geolocation.getCurrentPosition(this.pollWeather);
  }


  render() {
    return (
      <div className="weather-box">
        <h1>Weather:</h1>
        <div className="weather-city">
          <div>{this.state.weather}</div>
          <div>{this.state.city}</div>
        </div>
      </div>
    )
  }

}
export default Weather;
