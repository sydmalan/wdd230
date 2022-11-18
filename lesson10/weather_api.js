// The city id is found at the end of the url when your on the city's page 

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5861897&appid=42814d48a45ecf5725dddad02b4c7c93";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);
    // °F = (K - 273.15)* 1.8000 + 32.00
    document.querySelector('#current-temp').textContent = ((jsObject.main.temp - 273.15) * 1.8 + 32).toFixed(2);

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
  };
getWeather();

// if you want to find the wind speed
// objectname.wind.speed


// ogden url
// https://api.openweathermap.org/data/2.5/weather?id=5779206&appid=42814d48a45ecf5725dddad02b4c7c93