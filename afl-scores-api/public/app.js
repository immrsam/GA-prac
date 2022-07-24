const http = require("http");
const port = 3000;

const apiKey = ``;
const baseURL = `https://api.squiggle.com.au/?q=teams`;

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
    let htmlOpen = ``, htmlHead = ``, bodyOpen = ``, html1 = ``, html2 = ``,bodyClose = ``, htmlClose = '', htmlAll = ``;

    data.teams.forEach(element => {
        html2 += `
        <h2>${element.name} - ${element.debut}</h2>
        <img src="https://squiggle.com.au/${element.logo}" alt="${element.name}">
        `;
    });

    htmlOpen = `<!DOCTYPE html><html lang="en">`;
    htmlHead = `
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>AFL Teams</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    `;
    bodyOpen = `<body><div id="container">`;

    html1 = `<h1>AFL Teams</h1>`;

    bodyClose = `</div></body>`;
    htmlClose = `</html>`;

    htmlAll = htmlOpen + htmlHead + bodyOpen + html1 + html2 + bodyClose + htmlClose;

    return htmlAll;
  }