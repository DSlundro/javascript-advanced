# Functions

## Default Parameters
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