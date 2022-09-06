'use strict'

// Coding Challenge #2
/* 
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h
*/


// 1.   Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
class CarCL{
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    };

    accelerate(){
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    };

    break(){
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    // 2.   Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6)
    get speedUS(){
        return console.log(`${this.make} is going ${this.speed / 1.6} mi/h`);
    };
    // 3.   Add a setter called 'speedUS' which sets the current speed in mi/h 
    //      (but converts it to km/h before storing the value, by multiplying the input by 1.6)
    set speedUS(speed){
        console.log(`${this.make} is going ${this.speed = speed * 1.6} km/h`);
    }
}
// Test Data
const ford = new CarCL('Ford', 120);

ford.speedUS

ford.speedUS = 50;

console.log(ford);
//ford.speedUS = 50;

const audi = new CarCL('Audi', 130);
audi.speedUS
audi.speedUS = 100
audi.speedUS


