//input
const playerName = document.querySelector('#player_name');
const playerGuess = document.querySelector('#player_guess');
//buttons
const startGame = document.querySelector('#start_game');
const checkValue = document.querySelector('#check_value');
const ok = document.querySelector('#ok')
//screen
const message = document.querySelector('#message');
//vars
let usrName ='Player';
let random;
let streak=0;
let guess;
//function loading
function load (){
    ok.innerText = 'Okay';
    ok.style.display = 'none';
    playerName.style.display = 'block';
    playerName.value = '';
    playerGuess.value ='';
    playerGuess.innerText='';
    startGame.style.display = 'block';
    message.innerText = 'Welcome to the guessing game!';
    streak=0;
    random = Math.floor(Math.random()*100)+1;
}
//function of starting
function read (){
    usrName = playerName.value;
    message.innerHTML = `Hello <strong>${usrName}</strong>! My name is Willy.<br>Can you guess my age?<br><i>Hint, it is between 1 and 100.</i>`;
    playerName.style.display = 'none';
    startGame.style.display = 'none';
    playerGuess.style.display = 'block';
    checkValue.style.display = 'block';
}
//function compare
function compare(){
    playerGuess.style.display = 'none';
    checkValue.style.display = 'none';
    ok.style.display = 'block';
    if(isNaN(+playerGuess.value)){
        message.innerHTML = 'Please give me a number!'
    } else{
        guess = +playerGuess.value;
        streak++;
        if (guess < random){
            message.innerHTML = 'Nope! It is more.'
        } else if (guess > random){
            message.innerHTML = 'Nope! It is less.'
        } else{
            message.innerHTML = `Yes, that is right. But only after ${streak} guesses.`
            ok.innerText = 'Play again!';
        }
    }
}
//again
function okay (){
    if(guess === random){
        load();
    }else{
        message.innerHTML = `So <strong>${usrName}</strong>! What is your new guess?`;
        playerName.style.display = 'none';
        startGame.style.display = 'none';
        ok.style.display = 'none';
        playerGuess.style.display = 'block';
        checkValue.style.display = 'block';
    }
}
//load
load();
//clicks
startGame.addEventListener('click',read);
ok.addEventListener('click',okay);
checkValue.addEventListener('click',compare);