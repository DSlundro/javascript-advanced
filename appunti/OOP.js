'use strict'


/* 1ST METHOD */
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





// 1. New enpty object {} is created
// 2. Function is called, this = {}
// 3. {} linked to prototype
// 4. Function automatically return {}

// class expression
// const PersonCL = class {}

/* 2ND METHOD */
// class declaration
class PersonCL {
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    // Methods will be added to .prototype property
    calcAge(){
        console.log(2022 - this.birthYear);
    }

    get age(){
        return 2022 - this.birthYear;
    }

    // Set a property that already exist
    set fullName(name){
        console.log(name);
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name`)
    }

    get fullName(){
        return this._fullName;
    }

    // Static method
    static hey(){
        console.log(`Hey there :D`);
        console.log(this);
    }
}

const jessica = new PersonCL('Jessica Davis', 1996);

console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__);
console.log(PersonCL.prototype);

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizes
// 3. Classes are executed in strict mode

const walter = new PersonCL('Walter White', 1965);

PersonCL.hey()

const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],

    get latest(){
        return this.movements.slice(-1).pop();
    },

    set latest(mov){
        this.movements.push(mov);
    }
};

console.log(account.latest);

account.latest = 50;

console.log(account.movements);



/* 3RD METHOD */

const PersonProto = {
    calcAge(){
        console.log(2022 - this.birthYear);
    },

    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ == PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

/* INHERITANCE BETWEEN CLASSES */
const Person1 = function(firstName, lastName, birthYear){
    // Instance properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
}
Person1.prototype.calcAge = function(){
    console.log(2022 - this.birthYear);
}

const Student = function(firstName, lastName, birthYear, course){
    Person.call(this, firstName, lastName, birthYear);
    this.course = course
}

// Linking prototypes
Student.prototype = Object.create(Person1.prototype);

Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 'Taison', 2000, 'Computer Science');
console.log(mike);
mike.introduce()
mike.calcAge()

console.log(mike instanceof Student);
console.log(mike instanceof Person1);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor)




/* Inheritance Between Classes: ES6 Classes */
console.log(`
    Inheritance Between Classes: ES6 Classes
    `);

class PersonClass {
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    // Methods will be added to .prototype property
    currentYear(){
        return new Date().getFullYear();
    }
    
    calcAge(){
        console.log(this.currentYear() - this.birthYear);
    }

    get age(){
        return this.currentYear() - this.birthYear;
    }

    // Set a property that already exist
    set fullName(name){
        console.log(name);
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name`)
    }

    get fullName(){
        return this._fullName;
    }

    // Static method
    static hey(){
        console.log(`Hey there :D`);
        console.log(this);
    }
}

class StudentClass extends PersonClass {
    constructor(fullName, birthYear, course){
        // Always needs to happen first!
        super(fullName, birthYear);
        this.course = course;
    }

    introduce(){
        document.body.innerHTML = `
        <h1 color="cyan">Inheritance Between Classes: ES6 Classes</h1>
        <h2>My full name is <b>${this._fullName}</b></h2>
        <h2>My birth year is <b>${this.birthYear}</b></h2>
        <h2>My job is <b>${this.course}</b></h2>
        <br>
        <h2>I have ${this.age} years old</h2>
        `
    }

    calcAge(){
        console.log(`I'm ${this.currentYear() - this.birthYear} years old, but as a student I feel more like ${this.currentYear() - this.birthYear + 10}`);
    }
}

const dragan = new StudentClass('Dragan Savic', 1995, 'Frontend Developer');
dragan.introduce()
dragan.calcAge()


/* Inheritance Between Classes: Object.create */


const PersonPT = {
    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    },

    currentYear(){
        return new Date().getFullYear();
    },

    calcAge(){
        return this.currentYear() - this.birthYear;
    },

    fullName(){
        return `${this.firstName} Something...`
    },

};

const jack = Object.create(PersonPT);


const StudentPT = Object.create(PersonPT);
StudentPT.init = function(firstName, birthYear, course){
    PersonPT.init.call(this, firstName, birthYear);
    this.course = course;
}

StudentPT.introduce = function(){
    document.body.innerHTML = `
    <h1 color="cyan">Inheritance Between Classes: Object.create</h1>
    <h2>My full name is <b>${this.fullName()}</b></h2>
    <h2>My birth year is <b>${this.birthYear}</b></h2>
    <h2>My job is <b>${this.course}</b></h2>
    <br>
    <h2>I have ${this.calcAge()} years old</h2>
    `
}

const jay = Object.create(StudentPT);
jay.init('Jay', 1999, 'Computer Science');
jay.introduce()

// 1. Public fields
// 2. Private fields
// 3. Public methods
// 4. Private methods
// (there is a static version)

class Account{
    // 1. Public fields (instances)
    locale = navigator.language;
    
    // 2, Private fields (instances)
    #movements = [];
    #pin;

    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        // this._movements =[];
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${this.owner}`);

    }

    // 3. Public methods
    getMovements(){
        return this.#movements;
    }

    deposit(val){
        this.#movements.push(val);
        return this
    }

    withdraw(val){
        this.deposit(-val);
        return this
    }
    
    // 4. Private methods
    /* #approveLoan(val){
        return true;
    } */
    approveLoan(val){
        return true;
    }

    requestLoan(val){
        if(this.approveLoan(val)){
            this.deposit(val);
            console.log(`Loan approved`);
        }
        return this;
    }

}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(250);
acc1.withdraw(150);
acc1.requestLoan(1000);
console.log(acc1.movements);

/* console.log(acc1);
console.log(acc1.pin);

console.log(acc1.approveLoan(1000)); */


/* CHAINING METHODS */
acc1.deposit(300).deposit(500).withdraw(50).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());



