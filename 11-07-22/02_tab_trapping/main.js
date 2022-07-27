let openModalButton = document.querySelector(".modal-open");
let closeModalButton = document.querySelector(".modal-close");
let ourModal = document.querySelector(".modal");
let firstFocusableModalElement = ourModal.querySelector("input#name");
let lastFocusableModalElement = closeModalButton;

function listenForKeyPress(event) {
    console.log(event);
    // If they pressed Escape, close the modal
    if(event.key === "Escape") {
        console.log("Escaped");
        return closeModal();
    }

    // If they didn't press Tab, do nothing
    if(event.key !== "Tab") return false;
    if(event.key === "Tab"){
        console.log(document.activeElement);
    }
    // If they were holding the shift key and the active element is the firstFocusableModalElement
    //   Focus the lastFocusableModalElement
    //   Prevent the default behaviour (to stop it tabbing twice)
    // If they weren't holding the shift key and the active element is the lastFocusableModalElement
    //   Focus the firstFocusableModalElement
    //   Prevent the default behaviour (to stop it tabbing twice)
    if(event.shiftKey && document.activeElement === firstFocusableModalElement){
        document.activeElement = lastFocusableModalElement;
        event.preventDefault();
    }else if(!event.shiftKey && document.activeElement === lastFocusableModalElement){
        document.activeElement = firstFocusableModalElement;
        event.preventDefault();
    }

    // Hint 1: You can get the active element with `document.activeElement`
    // Hint 2: event.shiftKey will tell you if the shift key was held
    // Hint 3: There is a .focus method on focusable DOM nodes
}

function openModal() {
    // Add the class modal-active
    // Add a keydown event to the document
    ourModal.classList.add("modal-active");
    document.addEventListener("keydown", listenForKeyPress);
}

function closeModal() {
    // Remove the class modal-active
    // Remove the keydown event from the document
    ourModal.classList.remove("modal-active");
    document.removeEventListener("keydown", listenForKeyPress);
}

openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);
