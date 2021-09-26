let player = "Player";
const random = Math.floor(Math.random()*100) + 1;
let gameFinished = false;

function say (a) {
    document.getElementById('nameInterface').style.display = "none";
    document.getElementById('guessInterface').style.display = "none";
    document.getElementById('declareInterface').style.display = "block";
    if (a == 'less' || a == 'more') {
    document.getElementById('declaration').innerText = `No it is ${a}`;
    } else {
    document.getElementById('declaration').innerText = `${player} wins!`;
    }
}
function submitGuess (){
    let playerGuess = +document.getElementById('playerGuess').innerText;
    let gameFinished = false;
    while (!gameFinished){
        if (playerGuess > random) {
            say('less');
        } else if (playerGuess < random) {
            say('more');
        } else {
            say('win');
            gameFinished = true;
        }
    }
}
document.getElementById('playerNameSave').addEventListener('click', ()=>{
    player = document.getElementById('playerName').innerText;
    document.getElementById('nameInterface').style.display = "none";
    document.getElementById('declareInterface').style.display = "none";
    document.getElementById('guessInterface').style.display = "block";
});
document.getElementById('submitGuess').addEventListener('click', submitGuess);