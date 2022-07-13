// 1 get element
// 2 create callback
// 3 bind target event type and action

const img = document.querySelector("img");
const fadeOutButton = document.querySelector("#myButton");
const fadeInButton = document.querySelector("#fadeBack");

const buttonFunction = function(){
    console.log("this is a button");
}

const fadeImgAway = function() {
    const currentOpacityAsString = getComputedStyle(img).opacity;
    const currentOpacity = parseFloat(currentOpacityAsString, 10);
    img.style.opacity = currentOpacity - 0.1;
    if (currentOpacity > 0) {
        console.log(currentOpacity);
        setTimeout(fadeImgAway, 50);
    }
    // img.style.opacity = 0;
}

const fadeImgIn = function() {
    const currentOpacityAsString = getComputedStyle(img).opacity;
    const currentOpacity = parseFloat(currentOpacityAsString, 10);
    img.style.opacity = currentOpacity + 0.1;
    if (currentOpacity < 1) {
        console.log(currentOpacity);
        setTimeout(fadeImgIn, 50);
    }

}


fadeOutButton.addEventListener('click', fadeImgAway);
fadeInButton.addEventListener('click', fadeImgIn);
