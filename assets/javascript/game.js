// set the counters to 0.

var winCount = 0; 
var loseCount = 0; 
var guessLeft = 9; 
var guessMade = []; 
var computerGuess = [];

// all the letters that the computer can guess 
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 



// make the computer guess a letter
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);


// show user what they've guessed so far

document.onkeyup = function(input){

var userPressed = event.key.toLowerCase();

guessMade.push(userPressed);
document.getElementById("guess-made").textContent = guessMade;


//compare computer pick + user pick 
// console.log(guessMade); 
console.log(userPressed);

if(userPressed === computerGuess){
    winCount = ++winCount; 
    document.getElementById("win-count").textContent = winCount;
}
else {
    guessLeft = -- guessLeft;
    document.getElementById("guess-left").textContent = guessLeft;
}


}

// show user win/lose



// show amount of guesses left


// reset the win and loss count after guesscount reaches 0 (without refreshing the page)