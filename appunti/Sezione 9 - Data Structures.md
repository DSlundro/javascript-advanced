# Destructuring
## Arrays
```js
// Assign a costant to each array's elements
const array = [1, 2, 3, 4]
const a = array[0];
const b = array[1];
const c = array[2];
const d = array[3];

console.log(a, b, c, d)
// 1 2 3 4

// Same thing with destructuring method
const [e, f, g, h] = array

console.log(e, f, g, h)
// 1 2 3 4
```
### Inverte variable's values of array's elements
```js
const normal = ['one', 'two'];

// Normale
let [n1, n2] = normal;
console.log(n1, n2);
// one two

// Inverted
[n1, n2] = [n2, n1];
console.log(n1, n2);
// two one

```

### Some other examples of destructuring
```js
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Carpese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri:  {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    }
    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    }
};

// Receive 2 return values from a function
const [starter, main] = restaurant.order(2, 0)
console.log(starter, main);
// Garlic Bread Pizza
// starterMenu[2] => Garlic Bread 
// mainMenu[0] => Pizza
```

### Nested Arrays
```js
// Nested destructuring
const nested = [2, 4, [5, 6]];
const [i, j, [k, l]] = nested;
console.log(i, j, k, l);
// 2 5 6

// Default values
const [p=1, q=1, r=1] = [8, 9]
console.log(p, q, r)
// 8 9 1
```

## Objects
```js
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ],
    starterMenu: [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Carpese Salad' ],
    mainMenu: [ 'Pizza', 'Pasta', 'Risotto' ],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri:  {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },
    order: function(starterIndex, mainIndex){
        return [ this.starterMenu[starterIndex], this.mainMenu[mainIndex] ]
    },
};

const { name, openingHours, categories } = restaurant
console.log(name, openingHours, categories);
// Classico Italiano 
// => {thu: {…}, fri: {…}, sat: {…}} 
// => (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
```

### Changing property's names
```js
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant
console.log(restaurantName, hours, tags);
// Classico Italiano 
// => {thu: {…}, fri: {…}, sat: {…}} 
// => (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
```

### Asign default value in case it doesn't exist
```js
const { menu = [], starterMenu: starters = [] } = restaurant
console.log(menu, starters);
// => []
// => (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Carpese Salad']
```

### Mutating variables
```js
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14};

// Here we have a syntax error because if we start line with {}, JavaScript will expect a code block
{ a, b } = obj; => Uncaught SyntaxError: Unexpected token '='
// To solve it we need to put all in ()
({ a, b } = obj); => 23 7
```

### Nested Objects
```js
// Destructuring inside destructuring
const { openingHours } = restaurant
const { fri: {open, close} } = openingHours
console.log(open, close);
```

### Object as argument of method
```js
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ],
    starterMenu: [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Carpese Salad' ],
    mainMenu: [ 'Pizza', 'Pasta', 'Risotto' ],
    orderDelivery: function ({
        starterIndex = 1,
        mainIndex = 0,
        time = '20:00',
        address,
    }) {
        console.log(`
        Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
        will be delivered to ${address} 
        at ${time}`);
    },
}

restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
})
// Order received! Garlic Bread and Risotto 
// will be delivered to Via del Sole, 21 
// at 22:30

restaurant.orderDelivery({
    address: 'Via Pietro Maroncelli, 3',
    starterIndex: 1,
})
// Order received! Bruschetta and Pizza 
// will be delivered to Via Pietro Maroncelli, 3 
// at 20:00
```
