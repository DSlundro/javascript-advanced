const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0,
        close: 24,
    },
}
// console.log(openingHours);

const properties = Object.keys(openingHours)
// console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
    openStr += `${day}, `
}
//console.log(openStr);
// console.log(properties);
const values = Object.values(openingHours);
// console.log(values);

const entries = Object.entries(openingHours)
// console.log(entries);

for (const [day, {open, close}] of entries) {
    console.log(`On ${day} we opet at ${open} and close at ${close}`);
}
