import React,{useState} from 'react';
import Form from './components/Form';
import Weather from './components/Weather';
import apiConfig from './apiKey'

function App() {
    const [weather,setWeather] = useState([])
  
    async function fetchData(e) {
        e.preventDefault()
      const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${apiConfig.openWeatherKey}`)
        .then( res => res.json())
        .then(data => data)
        setWeather({
          data: apiData
        }
        )
    }
  
    return (
      <div className="App">
        <h3>WEATHER APP</h3>
        <Form getWeather={fetchData} />
        {console.log(weather.data)}
      </div>
    );
  }
  
  export default App;