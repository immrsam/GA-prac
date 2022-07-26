const http = require("http");
const fs = require("fs");
const port = 3000;

const apiKey = ``;
const baseURL = `https://`;
let id = ``
let parameters = `${apiKey}`;

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

  function generateHTML(data){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Server</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <div id="container">
            <h1>Server</h1>
            <h2>${data} - ${data}</h2>
            <p>${data}</p>
        </div>
    </body>
    </html>
        `;
  }