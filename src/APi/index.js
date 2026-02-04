const baseurl =
  "https://api.weatherapi.com/v1/current.json?key=ebfcce63915048ceb13164813262001";

// Existing city search (NO CHANGE)
export const getweatherdataforcity = async (city) => {
  const response = await fetch(`${baseurl}&q=${city}&aqi=yes`);
  return await response.json();
};

// ✅ NEW: fetch weather using latitude & longitude
export const getweatherdataforlocation = async (lat, lon) => {
  const response = await fetch(`${baseurl}&q=${lat},${lon}&aqi=yes`);
  return await response.json();
};
