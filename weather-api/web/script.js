const http = require('http');
const fs = require('fs');
const port = 3001;
let responseJSON;
let responseDATA;

const apiKey = `56e731a692831d9d0a364acc80ea23b1`;
const baseURL = `http://api.openweathermap.org/data/2.5/weather`;
const parameters = `?id=2158177&units=metric&appid=${apiKey}`;

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

fetch(baseURL + parameters)
  .then(convertToJSObject)
  .then(handleData);

const requestListenerJSON = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(responseJSON);
}

const requestListenerHTML = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  console.log(responseDATA);
  res.end(`
  <h1>${responseDATA.name} - ${responseDATA.weather[0].description}</h1>
  <h1>Temp: ${responseDATA.main.temp}</h1>
  `)
}


const requestListenerLoadHtml = (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });

  let temp = parseInt(responseDATA.main.temp);

  let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Weather API</title>
        <style>
          *{
              margin: 0;
              padding: 0;
              font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
              box-sizing: border-box;
          }

          #container{
              width: 80%;
              min-width: 800px;
              min-height: 100vh;
              margin: auto;
              background-color: rgba(223, 226, 230, 0.8);
          }

          #weather-box{
              width: 300px;
              min-height: 150px;
              border: 1px solid black;
              margin: 15px;
          }

          #weather-heading{
              font-size: 2em;

          }

          #weather-display{
              font-size: 8em;
              text-align: center;
          }

          .left-justify{
              min-width: 33%;
              height: 100%;
              float: left;
              /* background-color: aliceblue; */
          }

          h1{
              text-align: center;
              margin: auto;
              padding: 20px;
              width: 100%;
              background-color: rgba(101, 177, 177, 1);
          }
        </style>
    </head>
    <body>
        <div id="container">
            <h1>Weather API</h1>
            <h2>${responseDATA.name} - ${responseDATA.weather[0].description}</h2>
            <section id="weather-box">
                <div class="left-justify">
                    <span id="weather-heading">Today:</span>
                </div>
                <div class="left-justify">
                    <span id="weather-display">${temp}</span>
                </div>
            </section>
        </div>
    </body>
    </html>
    `;

  res.end(html);
}


// const server = http.createServer(requestListenerJSON);
const server = http.createServer(requestListenerLoadHtml);

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})

// example data
// {
//   coord: { lon: 151.2073, lat: -33.8679 },
//   weather: [                 <<<<<<<<< Array
//     {
//       id: 803,
//       main: 'Clouds',
//       description: 'broken clouds',
//       icon: '04n'
//     }
//   ],
//   base: 'stations',
//   main: {
//     temp: 13.87,
//     feels_like: 13.35,
//     temp_min: 10.75,
//     temp_max: 15.15,
//     pressure: 1030,
//     humidity: 78
//   },
//   visibility: 10000,
//   wind: { speed: 7.72, deg: 100, gust: 13.89 },
//   clouds: { all: 75 },
//   dt: 1658405508,
//   sys: {
//     type: 2,
//     id: 2002865,
//     country: 'AU',
//     sunrise: 1658350517,
//     sunset: 1658387246
//   },
//   timezone: 36000,
//   id: 2147714,
//   name: 'Sydney',
//   cod: 200
// }
// {
//   coord: { lon: 151.2073, lat: -33.8679 },
//   weather: [
//     {
//       id: 803,
//       main: 'Clouds',
//       description: 'broken clouds',
//       icon: '04n'
//     }
//   ],
//   base: 'stations',
//   main: {
//     temp: 13.87,
//     feels_like: 13.35,
//     temp_min: 10.75,
//     temp_max: 15.15,
//     pressure: 1030,
//     humidity: 78
//   },
//   visibility: 10000,
//   wind: { speed: 7.72, deg: 100, gust: 13.89 },
//   clouds: { all: 75 },
//   dt: 1658405508,
//   sys: {
//     type: 2,
//     id: 2002865,
//     country: 'AU',
//     sunrise: 1658350517,
//     sunset: 1658387246
//   },
//   timezone: 36000,
//   id: 2147714,
//   name: 'Sydney',
//   cod: 200
// }