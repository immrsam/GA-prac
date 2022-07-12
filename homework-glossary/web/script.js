const main = document.querySelector("main");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const searchBox = document.querySelector("#searchBox");
const noResult = document.querySelector("#noResult");

const search = function(){
    let userSearchTerm = searchBox.value;
    let multiResult = glossary.filter(item => item.term.toUpperCase().includes(userSearchTerm.toUpperCase()));

    if (multiResult.length > 0){
        clearResults();
        let display = document.createElement("section");
        display.setAttribute("class", "result-list");
        noResult.style.opacity = "0";
        let itemNumber = 0;
        multiResult.forEach(result => {
            displayResult(itemNumber, result, display);
        })
    }else{
        console.log("No result");
        noResult.style.opacity = "1";
    }
}

const displayResult = function(number, result, display){
    let box = document.createElement("article");
    // create elements
    let term = document.createElement("span");
    let classNumber = document.createElement("span");
    let definition = document.createElement("span");
    let tags = document.createElement("span");
    // create labels
    let termLabel = document.createElement("label");
    let classNumberLabel = document.createElement("label");
    let definitionLabel = document.createElement("label");
    let tagsLabel = document.createElement("label");
    // set attributes for elements
    term.setAttribute(`id`, `displayTerm${number}`);
    classNumber.setAttribute(`id`, `displayClass${number}`);
    definition.setAttribute(`id`, `displayDefinition${number}`);
    tags.setAttribute(`id`, `displayTags${number}`);
    // set attributes for labels
    termLabel.setAttribute("for", `displayTerm${number}`);
    classNumberLabel.setAttribute("for", `displayClass${number}`);
    definitionLabel.setAttribute("for", `displayDefinition${number}`);
    tagsLabel.setAttribute("for", `displayTags${number}`);
    // labels text
    termLabel.textContent = "Term: ";
    classNumberLabel.textContent = "Class: ";
    definitionLabel.textContent = "Definition: ";
    tagsLabel.textContent = "Tags: ";

    let tagsText = "";
    term.textContent = result.term;
    classNumber.textContent = result.class;
    definition.textContent = result.definition;
    result.tags.forEach(tag => {
        tagsText += `${tag} `;
    });
    tags.textContent = tagsText;
    // put in a box
    box.appendChild(termLabel);
    box.appendChild(term);
    box.innerHTML += "<br/>";
    box.appendChild(classNumberLabel);
    box.appendChild(classNumber);
    box.innerHTML += "<br/>";
    box.appendChild(definitionLabel);
    box.appendChild(definition);
    box.innerHTML += "<br/>";
    box.appendChild(tagsLabel);
    box.appendChild(tags);
    box.innerHTML += "<br/>";
    // put box into display container
    display.appendChild(box);
    // put results into main
    main.appendChild(display);
}

const clearResults = function(){
    let allResults = document.querySelectorAll(".result-list");
    allResults.forEach(item => {
        item.remove();
    })
}

document.addEventListener("DOMContentLoaded", () =>{

    searchButton.addEventListener("click", search);
    clearButton.addEventListener("click", clearResults);
    searchBox.addEventListener("keypress", (e) => {
        if(e.key === "Enter"){
            search();
        }
    });

});
