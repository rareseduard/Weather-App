import { useState } from 'react';
import { WEATHER_API_URL,  WEATHER_API_KEY  } from './API';
import './App.css';
import Weather from './Components/Search/Current-Weather/Weather';
import Search from './Components/Search/Search';
import Forecast from './Components/Search/Forecast/Forecast';

function App() {
  const [currentWeather, setcurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = async (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    try {
      const [currentWeatherResponse, forecastResponse] = await Promise.all([
        fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`).then(res => res.json()),
        fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`).then(res => res.json())
      ]);

      setcurrentWeather({ city: searchData.label, ...currentWeatherResponse });
      setForecast({ city: searchData, ...forecastResponse });
    } catch (err) {
      console.error(err);
    }
  }

 

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <Weather data={currentWeather}/>
      <Forecast  data={forecast}/>
    </div>
  );
}

export default App;

