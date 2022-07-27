const targetElement = document.querySelector("#app");
const form = document.querySelector("form");
const wordInput = document.querySelector(".word");

const turnResponseIntoJSObject = (res) => {
    return res.json();
}

const handleData = (data) =>{
    const word = data[0].word;
    const definition = data[0].meanings[0].definitions[0].definition
    const html = `
    <h2>Word: ${word.toUpperCase()}</h2>
    <h3>Definition: ${definition}</h3>
    `;
    targetElement.innerHTML = html;
    // debugger;
}


const defineWord = (event) => {
    event.preventDefault();
    targetElement.innerHTML = `<h2>Loading...</h2>`;
    // 1. Base URL
    const baseUrl = "https://api.dictionaryapi.dev";
    const path = "/api/v2/entries/en/";
    const word = wordInput.value;
    const endpoint = baseUrl + path + word;

    // 2. Method (None/No reference - GET)
    // 3. Query String / Parameters (None)
    // 4. Headers (None)

    fetch(endpoint).then(turnResponseIntoJSObject).then(handleData);
}

form.addEventListener("submit", defineWord);