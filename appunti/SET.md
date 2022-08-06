## SET
#### Set object è una collezione di valori unici.
```js
// ESEMPIO
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);

console.log(orderSet)
// Set(3) {'Pasta', 'Pizza', 'Risotto'}
//    [[Entries]]
//    0: "Pasta"
//    1: "Pizza"
//    2: "Risotto"
//    size: 3
```

## Set.size come length per Array
```js
console.log(orderSet.size)
// 3
```

## Set.has() come includes per Array
```js
console.log(orderSet.has('Pizza'))
// true (valore Pizza è presente nel Object)
console.log(orderSet.has('Bread'))
// false (valore Bread non è presente nel Object)
```

## Set.add() aggiunge un elemento dentro Object
```js
orderSet.add('Garlic Bread')
console.log(orderSet)
// Set(4) {'Pasta', 'Pizza', 'Risotto', 'Garlic Bread'}
//    [[Entries]]
//    0: "Pasta"
//    1: "Pizza"
//    2: "Risotto"
//    3: "Garlic Bread"
//    size: 4
```

## Set.delete() elimina un elemento dal Object
```js
orderSet.delete('Pizza')
// Set(3) {'Pasta', 'Risotto', 'Garlic Bread'}
//    [[Entries]]
//    0: "Pasta"
//    1: "Risotto"
//    2: "Garlic Bread"
//    size: 3
```

## Set.clear() elimina tutto il contenuto del Object
```js
orderSet.clear()
// Set(1) {}
//    [[Entries]]
//    size: 0
```

## Ricreare un Array con valori unici
```js
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique)
// (3) ["Waiter", "Chef", "Manager"]


```
