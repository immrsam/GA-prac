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

    const statusUpdateButton = document.querySelector("#statusButton");
    const statusUpdateDisplay = document.querySelector("#manualStatusUpdate");
    const autoStatusUpdateDisplay = document.querySelector("#autoStatusUpdate");

    const autoStatusNextStep = function(){
        autoStatusUpdateDisplay.textContent = states[autoStateIndex];
        autoStateIndex++;
        if(autoStateIndex < states.length - 1){
            setTimeout(autoStatusNextStep, 1500);
        }
    }

    const autoUpdateStatus = function(){
        autoStarted = true;
        if(autoStateIndex < states.length){
            console.log("auto status update started");
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
            autoUpdateStatus();
        }
    }

    statusUpdateButton.addEventListener("click", updateStatus)

    //end code before here
})
