// set the counters to 0.

var winCount = 0; 
var loseCount = 0; 
var guessLeft = 9; 
var guessMade = []; 
var computerGuess = [];

// all the letters that the computer can guess
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerGuess;
    

    // make the computer guess a letter
function guessNewLetter(){
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // console.log(computerGuess);
}     

function reset(){
    guessMade=[];
    document.getElementById("guess-made").textContent = guessMade;
    guessLeft = 9;
}


// show user what they've guessed so far

document.onkeyup = function(input){

    var userPressed = event.key.toLowerCase();

    guessMade.push(userPressed);
    document.getElementById("guess-made").textContent = guessMade;


    //compare computer pick + user pick 
  
    guessLeft = -- guessLeft;
    document.getElementById("guess-left").textContent = guessLeft;

    if(userPressed === computerGuess){
        winCount = ++winCount; 
        document.getElementById("win-count").textContent = winCount;
        guessNewLetter();
        reset();
    }else if(guessMade.length == 9){
        loseCount = ++loseCount;
        document.getElementById("lose-count").textContent = loseCount;
        guessNewLetter();
        reset();
    }


}
