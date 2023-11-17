import React, { useState } from 'react'
import './weather.css'

const api = '65179c0e5c2d0a8918d63d43d1d5f6c9'

function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  const searchWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=imperial`)
     .then((res) => res.json())
     .then((result) => {
      setWeather(result);
     });
  };

  return (
    <div className='all'>

      <div className='search'>
        <input
          type='text'
          placeholder='Enter city'
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={searchWeather}>Search</button>
      </div>

      
        <div className="weathercard">
          <div className='top'>
            <div className='weathericon'>
              <img src={`https://openweathermap.org/img/wn/10d@2x.png`} alt='weather icon'></img>
            </div>
            <div className='currenttemp'>{weather?.main?.temp}ºF</div>
            <div className='city'>{weather?.name}</div>
          </div>

          <div className='temps'>
            <div className='lowtemp'>L: {weather?.main?.temp_min}ºF</div>
            <div className='hightemp'>H: {weather?.main?.temp_max}ºF</div>
          </div>

          <div className='humidity'>Humidity: {weather?.main?.humidity}%</div>
        </div>
      
    </div>
  );
}

export default Weather;