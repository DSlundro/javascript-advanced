const rest1 = {
    name: 'Capri',
    numGuests: 1,
};

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi'
};



let ese1 = rest1.numGuests > 10 ? rest1.numGuests : 10;

let ese2 = rest1.numGuests || 'ciao'


console.log(ese1);
console.log(ese2);