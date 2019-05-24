// set the counters to 0.

var winCount = 0; 
var loseCount = 0; 
var guessesLeft = 9; 
var guessMade = []; 
var computerGuess = [];

// all the letters that the computer can guess 
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 


// document.onkeyup() = function(event) {

    var playerGuess = 
    
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// make the computer guess a letter
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);


// show amount of guesses left


// show user what they've guessed so far



// }
// declare a variable for the array we're storing the history of user key presses into and assign it to an empty array




// show user win





// reset the win and loss count after guesscount reaches 0 (without refreshing the page)