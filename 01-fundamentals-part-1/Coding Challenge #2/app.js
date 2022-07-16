// Coding Challenge #2
/* 
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 
*/

// Data 1

// Mark
let data1MarkWeight = 78;
let data1MarkHeight = 1.69;

let data1MarkMass = data1MarkWeight * data1MarkHeight;
let data1MarkBMI = (data1MarkMass / data1MarkHeight) ** 2;

console.log(`
Data 1

Mark Mass: ${data1MarkMass} 
Mark BMI:  ${data1MarkBMI}`);
// John
let data1JohnWeight = 92;
let data1JohnHeight = 1.95;

let data1JohnMass = data1JohnWeight * data1JohnHeight;
let data1JohnBMI = (data1JohnMass / data1JohnHeight) ** 2;

console.log(`
John Mass: ${data1JohnMass} 
John BMI:  ${data1JohnBMI}`);


// Data 2

// Mark
let data2MarkWeight = 95;
let data2MarkHeight = 1.88;

let data2MarkMass = data2MarkWeight * data2MarkHeight;
let data2MarkBMI = (data2MarkMass / data2MarkHeight) ** 2;

console.log(`
Data 2

Mark Mass: ${data2MarkMass} 
Mark BMI:  ${data2MarkBMI}`);

// John
let data2JohnWeight = 85;
let data2JohnHeight = 1.76;

let data2JohnMass = data2JohnWeight * data2JohnHeight;
let data2JohnBMI = (data2JohnMass / data2JohnHeight) ** 2;

console.log(`
John Mass: ${data2JohnMass} 
John BMI:  ${data2JohnBMI}`);

let data1MarkHigherBMI = data1MarkBMI > data1JohnBMI;
let data2MarkHigherBMI = data2MarkBMI > data2JohnBMI;

console.log(`
Conditional
`);
if(data1MarkBMI > data1JohnBMI){
    console.log(`Mark's ${data1MarkBMI} BMI is higher then John's ${data1JohnBMI} BMI`);
} else{
    console.log(`John's ${data1JohnBMI} BMI is higher then Mark's ${data1MarkBMI} BMI`);
}

if(data2MarkBMI > data2JohnBMI){
    console.log(`Mark's ${data2MarkBMI} BMI is higher then John's ${data2JohnBMI} BMI`);
} else{
    console.log(`John's ${data1JohnBMI}BMI is higher then Mark's ${data2MarkBMI} BMI`);
}