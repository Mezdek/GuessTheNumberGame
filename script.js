const nameInterface = document.getElementById('nameInterface');
const guessInterface = document.getElementById('guessInterface');
const declareInterface = document.getElementById('declareInterface');
const declaration = document.getElementById('declaration');
const playersGuess = document.getElementById('playersGuess');
const playersNameSave = document.getElementById('playersNameSave');
const playersName = document.getElementById('playersName');
let player = "Player";
let random = Math.floor(Math.random()*100) + 1;
let streak = 0;
function check (){
    streak++;
    let playersInput = playersGuess.value;
    nameInterface.style.display = "none";
    guessInterface.style.display = "none";
    declareInterface.style.display = "block";
    if (playersInput > random) {
        declaration.innerText = 'No it is less';
    } else if (playersInput < random) {
        declaration.innerText = 'No it is more';
    } else {
        declaration.innerText = `Very nice ${player}! After ${streak} tries you had a correct guess!`;
        document.getElementById('tryAgain').innerText = 'Play again!';
        random = Math.floor(Math.random()*100) + 1;
    }
}
playersNameSave.addEventListener('click', ()=>{
    player = playersName.value;
    nameInterface.style.display = "none";
    declareInterface.style.display = "none";
    guessInterface.style.display = "block";
    document.getElementById('playersGuessLabel').innerText = `Alright ${player}, can you guess my secret number? Hint: it is between 1 and 100.`;
});
document.getElementById('tryAgain').addEventListener('click', ()=>{
    nameInterface.style.display = "none";
    guessInterface.style.display = "block";
    declareInterface.style.display = "none";
    playersGuess.value =" ";
    document.getElementById('tryAgain').innerText = 'Try again!';
});
document.getElementById('check').addEventListener('click', check);
