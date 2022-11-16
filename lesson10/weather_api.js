// The city id is found at the end of the url when your on the city's page 

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5861897&appid=42814d48a45ecf5725dddad02b4c7c93";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);
  };
getWeather();

