// Coding Challenge #1
/* 
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
Test data:
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall. 
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

Data 1 BMI Comparison

Mark BMI ${data1MarkBMI} > John BMI ${data1JohnBMI}
so the boolean value of comparison is ${data1MarkHigherBMI}
`);

console.log(`

Data 2 BMI Comparison

Mark BMI ${data2MarkBMI} > John BMI ${data2JohnBMI}
so the boolean value of comparison is ${data2MarkHigherBMI}
`);