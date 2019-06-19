<script type="text/javascript">

var guesses = 9;
var guessesRem = 9;
var wins = 0;
var losses = 0;
var letterUser = [];
var letters = null;


var letterArray= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var computerLetter = letterArray[Math.floor(Math.random() * letterArray.length)];

function countGuessesRem() {
document.querySelector("#guessesRem").innerHTML = "Guesses Remaining: " + guessesRem
}

function userGuesses() {
document.querySelector("#letter").innerHTML = "Letters You Have Guessed " + letterUser.join(" ");
}

countGuessesRem();

function startOver() {
    guessesRem;
    letterUser;
}

document.onkeyup = function(event) {
guessesRem--;

var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

letterUser.push(userGuess);
countGuessesRem();
userGuesses();

if (userGuess === computerLetter){
wins++;
document.querySelector("#wins").innerHTML = "Wins " + wins;
startOver();
}

else if (guessesRem === 0){
losses++;
document.querySelector("#lose").innerHTML = "Loses " + losses;
startOver();
}

};
    



</script>