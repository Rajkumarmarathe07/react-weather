import Input from './Components/Input';
import Card from './Components/Card';
import Button from './Components/Button';
import './App.css';
import { useEffect } from 'react';
import { useWeather } from './Context/Weather';

function App() {
  const Weather = useWeather(); // ✅ defined correctly

  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        Weather.fetchWeatherByLocation(lat, lon);
      },
      () => {
        console.log("Location permission denied");
      }
    );
  }, []); // ✅ hook INSIDE component

  return (
    <div className="App">
      <h1>Weather Forecast 🌤</h1>
      <Input />
      <Button onClick={Weather.fetchdata} value="Search" />
      <Card />
    </div>
  );
}

export default App; // ✅ export exists
