'use strict'

// Coding Challenge #4
/* 
1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
child class of the 'CarCl' class
2. Make the 'charge' property private
3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
methods of this class, and also update the 'brake' method in the 'CarCl'
class. Then experiment with chaining!

Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
*/

// 1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCL' child class of the 'CarCl' class
class CarCL{
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    };

    accelerate(){
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this
    };

    break(){
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this
    }

    get speedUS(){
        return console.log(`${this.make} is going ${this.speed / 1.6} mi/h`);
    };
    
    set speedUS(speed){
        console.log(`${this.make} is going ${this.speed = speed * 1.6} km/h`);
    }
}

class EVCL extends CarCL{
    // 2.   Make the 'charge' property private
    #charge;

    constructor(make, speed, charge){
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo){
        this.#charge = chargeTo;
        return this
    }

    accelerate(){
        this.speed += 20;
        this.#charge--;
        console.log(`${this.make} is goint at ${this.speed} km/h, with charge of ${this.charge}`);
        return this
    }
}

// Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
const rivian = new EVCL('Rivian', 120, 23);

// 3.   Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class,
//      and also update the 'brake' method in the 'CarCl' class. Then experiment with chaining!
rivian.accelerate().chargeBattery(40).accelerate().break().break().break().accelerate().chargeBattery(100)
console.log(rivian)