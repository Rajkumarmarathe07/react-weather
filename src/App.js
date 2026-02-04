import Input from './Components/Input';
import Card from './Components/Card';
import Button from './Components/Button';
import './App.css';
import { useWeather } from './Context/Weather';

function App() {
  const Weather = useWeather();
  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input/>
      <Button onClick ={Weather.fetchdata} value="search"/>
      <Card/>
     
      
    </div>
  );
}

export default App;
