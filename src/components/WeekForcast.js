import React from 'react';
import apiConfig from './apiKey'

class WeekForcast extends React.Component {
  render() {
    const weatherURL =
    `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${apiConfig.openWeatherKey}`

    console.log(weatherURL);
    return (
      <div>
        <h1>My weather app</h1>     
      </div>
    )
  }
}

export default WeekForcast;