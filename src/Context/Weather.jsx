import { useContext, createContext, useState } from "react";
import {
  getweatherdataforcity,
  getweatherdataforlocation,
} from "../APi";

const Weathercontext = createContext(null);

export const useWeather = () => {
  return useContext(Weathercontext);
};

export const WeatherProvider = (props) => {
  const [data, setdata] = useState(null);
  const [searchcity, setsearchcity] = useState("");

  // City search (existing)
  const fetchdata = async () => {
    const response = await getweatherdataforcity(searchcity);
    setdata(response);
  };

  // ✅ Current location fetch
  const fetchWeatherByLocation = async (lat, lon) => {
    const response = await getweatherdataforlocation(lat, lon);
    setdata(response);
  };

  return (
    <Weathercontext.Provider
      value={{
        searchcity,
        data,
        setsearchcity,
        fetchdata,
        fetchWeatherByLocation,
      }}
    >
      {props.children}
    </Weathercontext.Provider>
  );
};
