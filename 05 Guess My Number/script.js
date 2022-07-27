'use strict';

let getRandomNumber = () => Math.floor(Math.random() * 20 + 1);
let getMessage = (message) => document.querySelector('.message').textContent = message;
let getGuessNumber = (number) => document.querySelector('.guess').value = number;
let getSecretNumber = (number) => document.querySelector('.number').textContent = number;
let getScore = (number) => document.querySelector('.score').textContent = number;
let getHighScore = (number) => document.querySelector('.highscore').textContent = number;
let getBodyBackgroundColor = (color) => document.querySelector('body').style.backgroundColor = color;
let getNumberWidth = (width) => document.querySelector('.number').style.width = width;

let randomNumber = getRandomNumber()

let score = 20
let highscore = 0;

let btnCheck = document.querySelector('.check');
let btnReset = document.querySelector('.again');


btnReset.addEventListener('click', ()=>{
    randomNumber = getRandomNumber();
    console.log(randomNumber);
    getGuessNumber('');
    getSecretNumber('?');
    getMessage('Start guessing...');
    getScore(20);
    getBodyBackgroundColor('#222');
    getNumberWidth('15rem')
})

btnCheck.addEventListener('click', ()=>{
    let guessNumber = Number(document.querySelector('.guess').value);
    let score = Number(document.querySelector('.score').textContent);

    if(guessNumber <= 20 && guessNumber > 0){
        // output if guess the number
        if(guessNumber === randomNumber){
            getSecretNumber(randomNumber);
            getMessage('You Win');
            getBodyBackgroundColor('green')
            getNumberWidth('30rem');

            // condition to set the highscore only if it's lower then actual score
            if(score > highscore){
            getHighScore(score)
            }
        }
        else if(guessNumber !== randomNumber && guessNumber !== 0){
            getMessage(guessNumber < randomNumber ?  'Select higher number!' : 'Select lower number!')
        }

        // score decrease on some conditions
        if(guessNumber && guessNumber !== randomNumber && score > 0){
            score--
            getScore(score)
        }
        // output message if the score is 0
        if(score === 0){
            getMessage('You lose!');
        }

        //console.log(guessNumber, randomNumber);
    }
    else{
        getMessage('Select number between 1 and 20')
    }
})

