const tempDisplay = document.querySelector("#weather-display");
const currentLocation = document.querySelector("#current-location");
const currentCondtion = document.querySelector("#current-conditon");
const weatherIcon = document.querySelector("#weather-icon");

let responseJSON;
let responseDATA;

// hard coded melbourne lat/lon
let lat = -37.81;
let lon = 144.96;

// my key
const apiKey = '56e731a692831d9d0a364acc80ea23b1';

let lang = 'en';
let units = 'metric';

const baseURL = `https://api.openweathermap.org/data/2.5/weather`;

const parameters = `?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

function convertToJSObject(res) {
  // return response converted to json
  return res.json();
}

function handleData(data) {
  // display data converted to json in browser
  // JSON usage
  responseJSON = JSON.stringify(data);

  // html usage
  responseDATA = data;
}

function loadPage(){
  let icon = `http://openweathermap.org/img/wn/${responseDATA.weather[0].icon}@2x.png`
  console.log(responseDATA);
  console.log(icon);
  tempDisplay.textContent = responseDATA.main.temp.toFixed(1);
  currentLocation.textContent = responseDATA.name;
  currentCondtion.textContent = responseDATA.weather[0].description;
  weatherIcon.src = icon;
}

document.addEventListener("DOMContentLoaded", () =>{

  fetch(baseURL + parameters)
    .then(convertToJSObject)
    .then(handleData)
    .then(loadPage);

  console.log(baseURL + parameters);

})