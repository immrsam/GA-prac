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

  console.log(makeItTwo(9));

})