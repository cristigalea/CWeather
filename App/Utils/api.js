export const getWeatherByCityName = (name, isMetric) => {
  const units = isMetric ? 'metric' : 'imperial';
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${name}&units=${units}&appid=b188f0e07a03278529c6172f3cf43dcc`;
  
  return fetch(url).then((data) => data.json());
}