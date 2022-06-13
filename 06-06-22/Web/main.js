const myPage = document.body;

let myName = "Sam is\nmy name!";
let myP = document.createElement('h1');

myP.innerText = myName

myPage.appendChild(myP);

let user = {
    name: "Sam",
    age: 39,
    armies: ["Chaos space marines", "Daemons", "Necrons"]
}

console.log(getName(user));

function getName(user){
    return user.name;
}