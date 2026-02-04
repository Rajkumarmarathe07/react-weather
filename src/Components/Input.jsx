import React from "react";
import { useWeather } from "../Context/Weather";
const Input = ()=>{
    const weather = useWeather();
    console.log(weather);
    return(
        <input 
        className="inputfield"
        placeholder="type" 
         value = {weather.searchcity }
         onChange={(e)=> weather.setsearchcity(e.target.value)}/>
    );
};

export default Input;