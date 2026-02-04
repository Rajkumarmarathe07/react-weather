import { useContext, createContext, useState } from "react";
import { getweatherdataforcity } from "../APi";

const Weathercontext = createContext(null);

export const useWeather = () => {
  return useContext(Weathercontext);
};

export const WeatherProvider = (props) => {
  const [data, setdata] = useState(null);
  const [searchcity, setsearchcity] = useState("");

  const fetchdata = async () => {
    const response = await getweatherdataforcity(searchcity);
    setdata(response);
  };

  return (
    <Weathercontext.Provider
      value={{ searchcity, data, setsearchcity, fetchdata }}
    >
      {props.children}
    </Weathercontext.Provider>
  );
};
