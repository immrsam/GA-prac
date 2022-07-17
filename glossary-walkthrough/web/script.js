const container = document.getElementById("container");

const createGlossaryPanel = function(item, index){
    let div = document.createElement("div");
    let term = document.createElement("p");
    let definition = document.createElement("p");
    let classNumber = document.createElement("p");
    let tags = document.createElement("p");

    div.id = `glossary-${index}`;
    div.classList.add("box");

    term.innerText = item.term;
    definition.innerText = item.definition;
    classNumber.innerText = item.class;
    item.tags.forEach(tag =>{
        tags.innerText += `${tag} `;
    })

    div.appendChild(term);
    div.appendChild(definition);
    div.appendChild(classNumber);
    div.appendChild(tags);

    return div;
}

glossary.forEach((item, index) => {
    let glossaryDiv = createGlossaryPanel(item, index);
    container.appendChild(glossaryDiv);
})