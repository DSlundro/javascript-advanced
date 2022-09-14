'use strict';


// Promise.allSettled

/* (async function () {
    const res = await Promise.allSettled([
        getJSON(`https://restcountries.com/v2/name/italy`),
        getJSON(`https://restcountries.com/v2/name/serbia`),
        getJSON(`https://restcountries.com/v2/name/spain`)
    ])
    console.log(res[0]);
})() */



Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject('ERROR'),
    Promise.resolve('Another success'),
])
.then(res => console.log(res))
.catch(err => console.error(err))



// Promise.any will retur nthe first fullfilled promise

Promise.any([
    Promise.resolve('Success'),
    Promise.reject('ERROR'),
    Promise.resolve('Another success'),
])
.then(res => console.log(res))
.catch(err => console.error(err))

