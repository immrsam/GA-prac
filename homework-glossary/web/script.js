const main = document.querySelector("main");
const searchButton = document.querySelector("#searchButton");
const searchBox = document.querySelector("#searchBox");

const search = function(){
    let searchResult = searchBox.value;
    let result = glossary.find(item => item.term.toUpperCase() === searchResult.toUpperCase());
    if (result != null){
        clearResults();
        let display = document.createElement("article");
        display.setAttribute("class", "result-list");
        displayResult(0, result, display);
    }else{
        console.log("No result");
    }
}

const displayResult = function(number, result, display){
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

    display.appendChild(termLabel);
    display.appendChild(term);
    display.innerHTML += "<br/>";
    display.appendChild(classNumberLabel);
    display.appendChild(classNumber);
    display.innerHTML += "<br/>";
    display.appendChild(definitionLabel);
    display.appendChild(definition);
    display.innerHTML += "<br/>";
    display.appendChild(tagsLabel);
    display.appendChild(tags);
    display.innerHTML += "<br/>";
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
    searchBox.addEventListener("keypress", (e) => {
        if(e.key === "Enter"){
            search();
        }
    });

});
