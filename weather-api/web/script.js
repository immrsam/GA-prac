const http = require('http');

const port = 2901;

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


// const server = http.createServer(requestListenerJSON);
const server = http.createServer(requestListenerHTML);

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