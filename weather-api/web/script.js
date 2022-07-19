// const container = document.getElementById("container");

// const apiKey = "56e731a692831d9d0a364acc80ea23b1";
// const baseURL = "http://api.openweathermap.org/data/2.5/weather";
// const parameters = `?q=Sydney&units=metric&appid=${apiKey}`;

// function convertToJSObject(res) {
//   // return response converted to json
//   console.log(res);
// }

// function handleData(data) {
//     // display data converted to json in browser
//       console.log(data);
// }

// fetch(baseURL + parameters)
//   .then(convertToJSObject)
//   .then(handleData);
function weatherBalloon( cityID ) {
    var key = '56e731a692831d9d0a364acc80ea23b1';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      console.log(data);
    })
    .catch(function() {
      // catch any errors
    });
  }

  window.onload = function() {
    weatherBalloon( 6167865 );
  }