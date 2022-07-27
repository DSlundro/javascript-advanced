'use strict';

/* SELECTING ELEMENTS */

// PLAYER 1
const class1 = () => document.querySelector('.player--0');
const player1 = () => document.getElementById('name--0')
const score1 = () => document.getElementById('score--0');
const currentScore1 = () => document.getElementById('current--0')

// PLAYER 2
const class2 = () => document.querySelector('.player--1');
const player2 = () => document.getElementById('name--1')
const score2 = () => document.getElementById('score--1');
const currentScore2 = () => document.getElementById('current--1')

// BUTTONS
let btnNew = () => document.querySelector('.btn--new');
let btnRoll = () => document.querySelector('.btn--roll');
let btnHold = () => document.querySelector('.btn--hold')

const diceEl = () => document.querySelector('.dice');



/* STARTING CONDITION */
score1().textContent = 0;
score2().textContent = 0;
diceEl().classList.add('hidden');

const scores = [0,0];
let currentScore = 0
let activePlayer = 0;


// Rolling dice functionality
btnRoll().addEventListener('click', () => {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display dice
    diceEl().classList.remove('hidden');
    diceEl().src = `dice-${dice}.png`
    // 3. Check for rolled 1:
    if(dice !== 1){
        // Add dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
    }else{
        //switch to next player
        document.getElementById(`current--${activePlayer}`).textContent = 0
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        class1().classList.toggle('player--active');
        class2().classList.toggle('player--active');
    }
})