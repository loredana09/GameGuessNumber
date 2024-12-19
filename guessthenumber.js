//generating random number
let randomNumber= Math.floor(Math.random()*100)+1;

//reference to element p in html
const guesses=document.querySelector(".guesses");
const lastResult=document.querySelector(".lastResult");
const lowORhi=document.querySelector(".lowORhi");

const guessSubmit=document.querySelector(".guessSubmit");
const guessField= document.querySelector(".guessField");

//generating a reset button
let guessCount=1;
let resetButton

function checkGuess(){

let userGuess=Number(guessField.value);

if(userGuess===randomNumber){
    lastResult.textContent="Congratulations!";
    lastResult.style.backgroundColor="green";
    lowORhi.textContent="";
    setGameOver();
}
 else if(guessCount===10){
    lastResult.textContent="Game Over!";
    setGameOver();
 }
   else{
    lastResult.textContent="Incorrect";
    lastResult.style.backgroundColor="red";
    if(userGuess < randomNumber){
        lowORhi.textContent="Your number is smaller";
    }
    else if(userGuess > randomNumber){
        lowORhi.textContent= "Your number is bigger";
    }
   }

   guessCount++;
   guessField.value="";
   guessField.focus();

}
  guessSubmit.addEventListener("click", checkGuess);


  function setGameOver(){
    guessField.disabled=true;
    guessSubmit.disabled=true;
    resetButton=document.createElement("button");
    resetButton.textContent="Initiate new game";
    resetButton.style.backgroundColor="black";
    resetButton.style.color="pink";
    resetButton.style.padding=" 10 px";
    resetButton.style.border="1px solid darkred";
    resetButton.style.borderRadius=" 5px";
    document.body.append(resetButton);
    resetButton.addEventListener("click",resetGame);
  }
  function resetGame(){
     guessCount=1;

     const resetParas=document.querySelectorAll(".resultParas p");
     for(let i=0;i< resetParas.length;i++){
        resetParas[i].textContent="";
     }

     resetButton.parentNode.removeChild(resetButton);

     guessField.disabled=false;
     guessSubmit.disabled=false;
     guessField.value="";
     guessField.focus();

     lastResult.style.backgroundColor="black";

     randomNumber=Math.floor(Math.random() *100)+1;

  }
