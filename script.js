const nameInterface = document.getElementById('nameInterface');
const guessInterface = document.getElementById('guessInterface');
const declareInterface = document.getElementById('declareInterface');
const declaration = document.getElementById('declaration');
const playersGuess = document.getElementById('playersGuess');
const gameStart = document.getElementById('gameStart');
const playersName = document.getElementById('playersName');
let player;
let random = Math.floor(Math.random()*100) + 1;
let streak = 0;
let gameFinished = false;
function check (){
    streak++;//iterating the streak value each time the guess is being checked
    let playersInput = playersGuess.value;
    if (isNaN(playersInput)||playersInput>100||playersInput<1) {
        declaration.innerText = 'Please enter a valid number between 1 and 100.'
    } else {
        if (playersInput > random) {
        declaration.innerText = 'No it is less';
        } else if (playersInput < random) {
        declaration.innerText = 'No it is more';
        } else {
        declaration.innerText = `Very nice ${player}! After ${streak} tries you had a correct guess!`;
        document.getElementById('tryAgain').innerText = 'New game!';//renaming the button to new game after winning
        random = Math.floor(Math.random()*100) + 1;//randomizing a new value for a new game
        gameFinished = true;
        }
    }
    nameInterface.style.display = "none";
    guessInterface.style.display = "none";
    declareInterface.style.display = "block";
}
function again () {
    if (gameFinished) { //starting a new game, resetting all values.
        nameInterface.style.display = "block";
        guessInterface.style.display = "none";
        declareInterface.style.display = "none";
        playersGuess.value ='';
        player = "Player";
        document.getElementById('tryAgain').innerText = 'Try again!';  
    } else { //trying another guess
    nameInterface.style.display = "none";
    guessInterface.style.display = "block";
    declareInterface.style.display = "none";
    playersGuess.value =" ";
}
}
gameStart.addEventListener('click', ()=>{
    player = playersName.value;
    nameInterface.style.display = "none";
    declareInterface.style.display = "none";
    guessInterface.style.display = "block";
    document.getElementById('playersGuessLabel').innerHTML = `Alright <span style = 'color:yellow'>${player}</span>, can you guess my secret number?<br>Hint: it is between 1 and 100.`;
});
document.getElementById('tryAgain').addEventListener('click', again);
document.getElementById('check').addEventListener('click', check);
