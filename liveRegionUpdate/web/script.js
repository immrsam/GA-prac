document.addEventListener("DOMContentLoaded", () =>{
    console.log("Page loaded with content");
    // start code here

    const states = [
        "Starting status update",
        "Status has begun to be updated",
        "One more step",
        "Status Updated",
        "... no more status upadates, please stop",
    ];

    let manualStateIndex = 0;
    let autoStateIndex = 0;
    let autoStarted = false;
    let loadingStatus = false;
    let loadingCount = 0;

    const statusUpdateButton = document.querySelector("#statusButton");
    const statusUpdateDisplay = document.querySelector("#manualStatusUpdate");
    const autoStatusUpdateDisplay = document.querySelector("#autoStatusUpdate");
    const loadStatusAnimation = document.querySelector("#loadStatusAnimation");


    const autoStatusNextStep = function(){
        autoStatusUpdateDisplay.textContent = states[autoStateIndex];
        autoStateIndex++;
        if(autoStateIndex < states.length - 1){
            setTimeout(autoStatusNextStep, 1000);
        }else{
            loadingStatus = false;
        }
    }

    const autoUpdateStatus = function(){
        autoStarted = true;
        if(autoStateIndex < states.length){
            console.log("auto status update started");
            loadAnimation();
            autoStatusNextStep();
        }

    }

    const manualUpdateStatus = function(){
        console.log(`clicked ${manualStateIndex} times`);
        if(manualStateIndex < states.length){
            statusUpdateDisplay.textContent = states[manualStateIndex];
            manualStateIndex++;
        }
    }

    const updateStatus = function(){
        console.log("status updating");
        manualUpdateStatus();
        if(!autoStarted){
            loadingStatus = true;
            autoUpdateStatus();
        }
    }

    const loadAnimation = function(){
        if(loadingStatus){
            let text = "";
            if(loadingCount < 9){
                loadingCount++;
                for(let i = 0; i < loadingCount; i++){
                    text += ".";
                }
            }else{
                loadingCount = 0;
            }
            loadStatusAnimation.textContent = text;
        }
        if(autoStateIndex < states.length - 1){
            setTimeout(loadAnimation, 70);
        }else{
            loadStatusAnimation.textContent = "";
        }
    }

    statusUpdateButton.addEventListener("click", updateStatus)

    //end code before here
})
