const http = require("http");
const fs = require("fs");
const port = 3001;

const apiKey = `56e731a692831d9d0a364acc80ea23b1`;
const baseURL = `http://api.openweathermap.org/data/2.5/weather`;
const parameters = `?id=2158177&units=metric&appid=${apiKey}`;
const css = "script.css"

function convertToJSObject(res) {
  // return response converted to json
  return res.json();
}

const requestListenerLoadHtml = (req, res) => {
  fetch(baseURL + parameters)
    .then(convertToJSObject)
    .then((data) => {
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.end(generateHTML(data));

    })
    .catch((error) => {
      res.writeHead(500, {
        "Content-Type": "application/json",
      });
      res.end(`{ error: ${error.message} }`);
    });
};
const server = http.createServer(requestListenerLoadHtml);
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

function generateHTML(data) {
  let temp = parseInt(data.main.temp);
  return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Weather API</title>

        </head>
        <body>
            <div id="container">
                <h1>Weather API</h1>
                <h2>${data.name} - ${data.weather[0].description}</h2>
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
}