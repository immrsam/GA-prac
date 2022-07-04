// - Create a new Javascript file and link to it with a `script` tag at the bottom
// - Create a variable to store a reference to the `img` DOM Node
// - Change the style of the `img` to have a `"left"` position of `"0px"`, so that it starts at the left hand side of the screen
// - Create a function called `catWalk` that moves the cat 10 pixels to the right of where it started, by changing the `"left"` style property.
// - Call that function every `50` milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

//     - Hint: `setTimeout` or `setInterval` might come in handy here!
const catImg = document.querySelector("img");
let direction = 1;
let windowWidth = screen.width;
catImg.style.left = "0px";

var onresize = function() {
    //your code here
    //this is just an example
    width = document.body.clientWidth;
 }
 window.addEventListener("resize", onresize);

const catWalk = function(){
    const currentPosAsString = getComputedStyle(catImg).left;
    const currentPos = parseInt(currentPosAsString, 10);
    let newPos = `${currentPos + 5}px`;
    catImg.style.left = newPos;
    if(currentPos >= screen.width - 200){
        catImg.style.left = "-200px";
    }
    if(currentPos < screen.width){
        console.log(newPos)
        setTimeout(catWalk, 2);
    }

}

const catWalkBack = function(){
    const currentPosAsString = getComputedStyle(catImg).left;
    const currentPos = parseInt(currentPosAsString, 10);
    let newPos = `${currentPos + 10 * direction}px`;
    catImg.style.left = newPos;
    console.log(direction)
    catImg.style.transform = `scaleX(${direction})`;
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