// Coding Challenge #2
/* 
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
*/

// BMI = mass / height ** 2 = mass

// Mark's OBJ
const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    fullName: function(){
        this.fullName = `${this.firstName} ${this.lastName}`
        return this.fullName
    },
    BMI: function(){
        this.BMI = this.mass / this.height ** 2
        return this.BMI.toFixed(2)
    }
}
console.log(`Full name is ${mark.fullName()} and BMI is ${mark.BMI()}`);

// John's OBJ
const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    fullName: function(){
        this.fullName = `${this.firstName} ${this.lastName}`
        return this.fullName
    },
    BMI: function(){
        this.BMI = this.mass / this.height ** 2
        return this.BMI.toFixed(2)
    }
}
console.log(`Full name is ${john.fullName()} and BMI is ${john.BMI()}`);

let heigherBMI = mark.BMI > john.BMI ? `Mark's BMI (${mark.BMI.toFixed(1)}) is heigher then John's (${john.BMI.toFixed(1)})` : `John's BMI (${john.BMI.toFixed(1)}) is heigher then Mark's (${mark.BMI.toFixed(1)})`;

console.log(heigherBMI);