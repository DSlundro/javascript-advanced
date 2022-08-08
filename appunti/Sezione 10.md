# Functions

## Default parameters
```js
const bookings = []

const createBooking = 
function(
    flight, 
    passengers = 1, 
    price = 199 * passengers){

        const booking = {
            flight,
            passengers,
            price,
        }
        console.log(booking);
        bookings.push(booking)
}

createBooking('LH123');                     // {flight: 'LH123', passengers: 1, price: 199}
createBooking('LH123', 2, 800)              // {flight: 'LH123', passengers: 2, price: 800}
createBooking('LH123', 2);                  // {flight: 'LH123', passengers: 2, price: 398}
createBooking('LH123', 2);                  // {flight: 'LH123', passengers: 2, price: 398}
createBooking('LH123', 4);                  // {flight: 'LH123', passengers: 4, price: 796}
createBooking('LH123', undefined, 1000);    // {flight: 'LH123', passengers: 1, price: 1000}
```

## Functions accepting callback cunctions
```js
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str){
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

const transformer = function(str, fn){
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Trasformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord)
transformer('JavaScript is the best!', oneWord)
```

## Functions returning functions
```js
// traditional functions
const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}
const greeterHey = greet('Hey')
greeterHey('Jonas')
greeterHey('Steven')

// arrow functions
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
const greeterArr = greet('Hi')
greeterArr('Michael')
greeterArr('John')
```

## Call method - calls a method of an object, substituting another object for the current object.
```js

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    book(flightNumber, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`);
        this.bookings.push({flight: `${this.iataCode}${flightNumber}`, name})
    },
    
}
lufthansa.book(34632, 'James Bond') // James Bond booked a seat on Lufthansa flight LH34632

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'LW',
    bookings: [],
}

const book = lufthansa.book;
book(23, 'Sarah Williams')                 // Cannot read properties of undefined (reading 'airline')

// call() invoke the global method book into object so the keyword this can be refered to any element passed as argument
book.call(eurowings, 23, 'Sarah Williams') // Sarah Williams booked a seat on Eurowings flight LW23
book.call(lufthansa, 342, 'James Bond')    // James Bond booked a seat on Lufthansa flight LH342
```

## Apply method - similar to call() method, but in this case the apply() method takes arguments as an array
```js
const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'SW',
    bookings: [],
}

const flightData = [534, 'George Cooper'];
book.apply(swiss, flightData)   // George Cooper booked a seat on Swiss Air Lines flight SW534

// we can do the same thing with call() method too with spread operator (...)
book.call(swiss, ...flightData) // George Cooper booked a seat on Swiss Air Lines flight SW534
```

## Bind method - create a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
```js
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    book(flightNumber, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`);
        this.bookings.push({flight: `${this.iataCode}${flightNumber}`, name})
    },
    
}

const book = lufthansa.book;

const bookLH = book.bind(lufthansa);

bookLH(322, 'Mario Rossi') // Mario Rossi booked a seat on Lufthansa flight LH322

```

## Immediately Invoked Function Expressions (IIFE) - function that runs as soon as it's defined
```js
// Normal invoked function
const runOnec = function (){
    console.log(`This will never run again`);
};
runOnec();

// IIFE
(function () {
    console.log(`This will never run again`);
})();

(()=>console.log(`This will never run again`))()
```