const main = document.querySelector("main");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const searchBox = document.querySelector("#searchBox");
const noResult = document.querySelector("#noResult");
const classSelect = document.querySelector("#classSelect");
const tagList = document.querySelector(".tag-list");
let checkedList = [];

const search = function(){
    let userSearchTerm = searchBox.value;
    let multiResult = glossary.filter(item => item.term.toUpperCase().includes(userSearchTerm.toUpperCase()));

    if(userSearchTerm.length === 0){
        noResult.textContent = "EMPTY";
        noResult.style.opacity = "1";
    }else{
        if (multiResult.length > 0){
            clearResults();
            let display = document.createElement("section");
            display.setAttribute("class", "result-list");
            noResult.style.opacity = "0";
            let itemNumber = 0;
            multiResult.forEach(result => {
                if(classSelect.selectedIndex > 0){
                    if(classSelect.selectedIndex === result.class){
                        displayResult(itemNumber, result, display);
                    }
                }else{
                    displayResult(itemNumber, result, display);
                }
            })
        }else{
            noResult.textContent = "NO RESULT";
            noResult.style.opacity = "1";
        }
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
    noResult.style.opacity = "0"
    allResults.forEach(item => {
        item.remove();
    })
}

const clearButtonClick = function(cbList){
    classSelect.selectedIndex = 0;
    searchBox.value = "";
    checkboxClear(cbList);
    clearResults();
}

const loadDropDown = function(){
    let option = document.createElement("option");
    option.text = `All Classes`;
    classSelect.add(option);

    for (let i = 1; i < 9; i++){
        let option = document.createElement("option");
        option.text = `Class ${i}`;
        classSelect.add(option);
    }
}

const loadTagList = function(){
    let tagListCollect = [];
    glossary.forEach(key => {
        key.tags.forEach(tag => {
            if(!tagListCollect.includes(tag)){
                tagListCollect.push(tag);
            }
        })
    });

    tagListCollect.forEach(tag => {
        let checkBoxBox = document.createElement('div');
        checkBoxBox.id = `cbb-${tag}`;
        checkBoxBox.classList.add(`cbb`);

        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = `tag-cb`;
        checkbox.value = `${tag}`;
        checkbox.id = `cb-${tag}`;

        let checkBoxLabel = document.createElement("label");
        checkBoxLabel.setAttribute("for", `tag-cb`);
        checkBoxLabel.textContent = tag;

        checkBoxBox.appendChild(checkbox);
        checkBoxBox.appendChild(checkBoxLabel);

        tagList.appendChild(checkBoxBox);
    });

}

const checkboxClear = function(cbList){
    cbList.forEach(cb => {
        cb.checked = false;
    })
}

document.addEventListener("DOMContentLoaded", () =>{
    loadTagList();
    loadDropDown();
    search();

    const checkboxes = document.querySelectorAll("input[type=checkbox][name=tag-cb]");

    searchButton.addEventListener("click", search);
    clearButton.addEventListener("click", function(){clearButtonClick(checkboxes);});
    classSelect.addEventListener("change", search);
    searchBox.addEventListener("keypress", (e) => {
        if(e.key === "Enter"){
            search();
        }
    });

    checkboxes.forEach(cb => {

        cb.addEventListener('change', function(){
            if(this.checked){
                checkedList.push(this);
                console.log(`${this.value} was added`);
            }else{
                let index = checkedList.indexOf(this);
                checkedList.splice(index, 1);
                console.log(`${this.value} was removed`);
            }
        })
    })

    clearResults();

});
