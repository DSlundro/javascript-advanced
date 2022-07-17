// Coding Challenge #3
/* 
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// Data 1
/* let score1Dolphins = 96;
let score2Dolphins = 108;
let score3Dolphins = 89;
let averageScoreDolphins = (score1Dolphins + score2Dolphins + score3Dolphins) / 3;

let score1Koalas = 88;
let score2Koalas = 91;
let score3Koalas = 110;
let averageScoreKoalas = (score1Koalas + score2Koalas + score3Koalas) / 3; */

/* // Data 2
let score1Dolphins = 97;
let score2Dolphins = 112;
let score3Dolphins = 101;
let averageScoreDolphins = (score1Dolphins + score2Dolphins + score3Dolphins) / 3;

let score1Koalas = 109;
let score2Koalas = 95;
let score3Koalas = 123;
let averageScoreKoalas = (score1Koalas + score2Koalas + score3Koalas) / 3; */

// Data 3
let score1Dolphins = 97;
let score2Dolphins = 112;
let score3Dolphins = 101;
let averageScoreDolphins = (score1Dolphins + score2Dolphins + score3Dolphins) / 3;

let score1Koalas = 109;
let score2Koalas = 95;
let score3Koalas = 106;
let averageScoreKoalas = (score1Koalas + score2Koalas + score3Koalas) / 3;

console.log(averageScoreDolphins.toFixed(2) + ' average score');
console.log(averageScoreKoalas.toFixed(2) + ' average score');

if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100 && averageScoreKoalas >= 100){
    console.log(`Dolphins wins with ${averageScoreDolphins.toFixed(2)} against ${averageScoreKoalas.toFixed(2)}`)
}
else if (averageScoreKoalas > averageScoreDolphins && averageScoreDolphins >= 100 && averageScoreKoalas >= 100){
    console.log(`Koalas wins with ${averageScoreKoalas.toFixed(2)} against ${averageScoreDolphins.toFixed(2)}`)
}
else if (averageScoreDolphins === averageScoreKoalas && averageScoreDolphins >= 100 && averageScoreKoalas >= 100){
    console.log(`It's draw! ${averageScoreDolphins.toFixed(2)} : ${averageScoreKoalas.toFixed(2)}`);
}