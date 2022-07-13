const states = [
        "Nothing to display",
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
    const resetStatusButton = document.querySelector("#resetStatus");
    const statusUpdateDisplay = document.querySelector("#manualStatusUpdate");
    const autoStatusUpdateDisplay = document.querySelector("#autoStatusUpdate");
    const loadStatusAnimation = document.querySelector("#loadStatusAnimation");

    const autoStatusNextStep = function(){
        autoStatusUpdateDisplay.textContent = states[autoStateIndex];
        autoStateIndex++;
        if(autoStateIndex < states.length - 1){
            setTimeout(autoStatusNextStep, 1500);
        }else{
            loadingStatus = false;
        }
    }

    const autoUpdateStatus = function(){
        autoStarted = true;
        if(autoStateIndex < states.length){
            loadAnimation();
            autoStatusNextStep();
        }

    }

    const manualUpdateStatus = function(){
        manualStateIndex++;
        if(manualStateIndex < states.length){
            statusUpdateDisplay.textContent = states[manualStateIndex];
        }
    }

    const updateStatus = function(){
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
            setTimeout(loadAnimation, 50);
        }else{
            loadStatusAnimation.textContent = "";
        }
    }

    const resetStatus = function(){
        manualStateIndex = 0;
        autoStateIndex = 0;
        autoStarted = false;
        loadingStatus = false;
        loadingCount = 0;
        statusUpdateDisplay.textContent = states[manualStateIndex];
        autoStatusUpdateDisplay.textContent = states[autoStateIndex];
    }

    document.addEventListener("DOMContentLoaded", () =>{
    resetStatus();
    statusUpdateButton.addEventListener("click", updateStatus);
    resetStatusButton.addEventListener("click", resetStatus);
});
