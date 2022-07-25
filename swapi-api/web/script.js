
const input = document.querySelector('#star-wars-input');
const button = document.querySelector('#star-wars-button');
const section = document.querySelector('#star-wars-section');
const list = document.querySelector('#star-wars-list');

const url = "https://swapi.dev/api/people/?search=";

const render = async(text) => {
  const li = document.createElement("li");
  li.textContent = text;
  list.append(li);
}

const clear = () => {
  list.innerHTML = "";
}

const retreiveDataAsync = async(value) =>{
  const data = await fetch(value);
  const dataJSON = await data.json();
  console.log(dataJSON);
  return dataJSON;
}

const handleSubmitAsync = async() =>{

  const starWarsData = await fetch(url + input.value);
  const dataJSON = await starWarsData.json();

  const size = await dataJSON.results.length;

  clear();
  if(size > 0){

    dataJSON.results.forEach(async element => {

      let homeworld = await retreiveDataAsync(element.homeworld);
      await render(element.name);
      await render(element.height);
      await render(homeworld.name);
      await render("---------------");
    });
  }else{
    render("No results");
  }

  console.log(dataJSON);
}

const handleSubmitWithThen = () =>{
  fetch(url + input.value)
  .then((starWarsData) => starWarsData.json())
  .then((result) => render(result.results[0].name));
}

// button.addEventListener("click", handleSubmitWithThen);
button.addEventListener("click", handleSubmitAsync);
