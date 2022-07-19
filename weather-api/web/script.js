const container = document.getElementById("container");

const apiKey = "56e731a692831d9d0a364acc80ea23b1";
const baseURL = "http://api.openweathermap.org/data/2.5/weather";
const parameters = `?q=Sydney&units=metric&appid=${apiKey}`;

function convertToJSObject(res) {
  // return response converted to json
  console.log(res.status);
}

function handleData(data) {
    // display data converted to json in browser
      console.log(data);
}

fetch(baseURL + parameters)
  .then(convertToJSObject)
  .then(handleData);
