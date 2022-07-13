const container = document.getElementById("container");
const myGA = document.querySelector("#GA");

const sayHello = function(){
    console.log("Hello GA");
}

myGA.addEventListener('click', sayHello)
