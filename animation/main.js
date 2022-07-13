// - Create a new Javascript file and link to it with a `script` tag at the bottom
// - Create a variable to store a reference to the `img` DOM Node
// - Change the style of the `img` to have a `"left"` position of `"0px"`, so that it starts at the left hand side of the screen
// - Create a function called `catWalk` that moves the cat 10 pixels to the right of where it started, by changing the `"left"` style property.
// - Call that function every `50` milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

//     - Hint: `setTimeout` or `setInterval` might come in handy here!
const catImg = document.querySelector("img");
const heading = document.querySelector("#heading");
let direction = 1;
let windowWidth = screen.width;
let catDancing = false;
let party = false;
let count = 0;
let max = 10;
let speed = 2;
let posStep = true;
let skewAmount = 0;
const maxSkewPos = 20;
const maxSkewNeg = -20;

let timer = setInterval(() => {
    count++;
    if(count == max){
        count = 0;
    }
    // console.log(count);
}, max*speed);

catImg.style.left = "0px";
catImg.style.top = "100px";
heading.style.width = "100%";
heading.style.height = "80vh";
heading.style.textAlign = "center";
heading.style.padding = "600px 0 0 0";
heading.style.fontFamily = "Impact,Charcoal,sans-serif";
heading.style.letterSpacing = "10px";
heading.style.fontSize = "5em";
heading.style.opacity = "1";
heading.style.transform = "skew(0deg, 0deg)";

const catWalk = function(){
    const currentPosAsString = getComputedStyle(catImg).left;
    const currentPos = parseInt(currentPosAsString, 10);
    let newPos = `${currentPos + 5}px`;
    catImg.style.left = newPos;
    if(currentPos >= screen.width - 200){
        catImg.style.left = "-200px";
    }
    if(currentPos < screen.width){
        // console.log(newPos)
        setTimeout(catWalk, 2);
    }

}

const haveAParty = function(catDancing) {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    if(catDancing){
        let bgColor = "rgb(" + x + "," + y + "," + z + ")";
        heading.style.opacity = "1";
        if(count == 0){
            document.body.style.background = bgColor;
        }
        if(skewAmount < maxSkewPos && posStep){
            skewAmount++;
        }
        if(skewAmount == maxSkewPos){
            posStep = false;
            skewAmount--;
        }
        if(skewAmount > maxSkewNeg && !posStep){
            skewAmount--;
        }
        if(skewAmount == maxSkewNeg){
            posStep = true;
            skewAmount++;
        }
        heading.style.transform = `skew(${skewAmount}deg, ${skewAmount}deg)`;

    }else{
        heading.style.opacity = "0";
        let bgColor = "white";
        document.body.style.background = bgColor;
    }
}

const catWalkBack = function(){
    const currentPosAsString = getComputedStyle(catImg).left;
    const currentPos = parseInt(currentPosAsString, 10);
    let newPos = `${currentPos + 10 * direction}px`;
    catImg.style.left = newPos;
    // console.log(direction)
    catImg.style.transform = `scaleX(${direction})`;

    if(currentPos > (windowWidth / 2) - 500 && currentPos < (windowWidth / 2) + 200){
        if(!catDancing){
            catImg.src = "https://64.media.tumblr.com/171d842459cdda1693a9ca0857ae8886/tumblr_msawcdjgDL1rm7gdlo1_400.gif";
            catDancing = true;
        }
    } else{

        if(catDancing){
            // catImg.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
            catImg.src = "https://www.kasandbox.org/programming-images/misc/cat-walk.gif";

            catDancing = false;

        }
    }
    haveAParty(catDancing);

    if(currentPos >= windowWidth - 200){
        direction = -1;
    }
    if(currentPos < 0){
        direction = 1;
    }
    if(currentPos < windowWidth){
        setTimeout(catWalkBack, 20);
    }
}

catWalkBack();