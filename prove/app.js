'use strict'

const Person = function(firstName, lastName, birthYear){
    // Instance properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
}

// Prototypes
Person.prototype.calcAge = function(){
    console.log(2022 - this.birthYear);
}

const itsMe = new Person('Dragan', 'Savic', 1995);

itsMe.calcAge()


// 1. New enpty object {} is created
// 2. Function is called, this = {}
// 3. {} linked to prototype
// 4. Function automatically return {}

