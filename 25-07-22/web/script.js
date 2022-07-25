document.addEventListener("DOMContentLoaded", () =>{
  console.log("Loaded");
  let a = 1;

  const makeItTwo = (n) =>{
    console.log(n);
    if(n === 2){
      return n;
    }else{
      if(n > 2){
        makeItTwo(--n);
      }else if(n < 2){
        makeItTwo(++n);
      }
    }
  }

  const getData = async() =>{
    const message = "Hello wordles";
    return message;
  }

  getData().then(data => console.log(data));

  console.log("First")
  console.log("Second")

  setTimeout(()=>{
    console.log("Third")
    setTimeout(()=>{
      console.log("Fourth")
    }, 500)
  }, 2001)
  setTimeout(()=>{
    console.log("Fifth")
  }, 2000)
  console.log("Last")


})