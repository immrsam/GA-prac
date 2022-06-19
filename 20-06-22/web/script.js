// const container = document.getElementById("container");

const topFive = ["Bender", "Fry", "Zoidburg", "Professor", "Zapp Brannigan"];

for (let i = 0; i < topFive.length; i++){
    let prefix = '';
    switch (i){
        case 0:
            prefix = 'st';
            break;
        case 1:
            prefix = 'nd';
            break;
        case 2:
            prefix = 'rd';
            break;
        default:
            prefix = 'th';
            break;
    }
    console.log(`my ${i + 1}${prefix} choice is ${topFive[i]}!`);
}

const topFiveColour = ["Blue", "Red", "Orange", "Green", "Yellow"];

topFiveColour.forEach(item => {
    let prefix = '';
    let position = topFiveColour.indexOf(item) + 1;

    switch (position){
        case 1:
            prefix = 'st';
            break;
        case 2:
            prefix = 'nd';
            break;
        case 3:
            prefix = 'rd';
            break;
        default:
            prefix = 'th';
            break;
    }
    console.log(`My ${position}${prefix} choice is ${item}`);
})

