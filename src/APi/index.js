const baseurl = "https://api.weatherapi.com/v1/current.json?key=ebfcce63915048ceb13164813262001";

export const getweatherdataforcity = async( city )=>{
const  response = await fetch(`${baseurl}&q=${city}&aqi=yes`);
   return await response.json();
};