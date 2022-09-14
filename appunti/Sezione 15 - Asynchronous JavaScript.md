# Asynchronous JavaScript

## AJAX - Asynchronous Javascript And XML
 ```js
// Allows to communicate with remote web servers in an asynchronous way. With AJAX calls, we can request data from web servers dynamically.
// AJAX calls only XML data format, to use them need to convert them into JSON data format

 ```
## API - Application Programming Interface
```js 
// Piece of software that can be used ny another piece of software, in order to allow applications to talk to each other
// DOM API, Geolocation API, Own Class API, 3rd-party API
```

## XMLHttpRequest
```js
// Make a new request XMLHttp
const request = new XMLHttpRequest();
// Open a request with the type of request and the string of URL from where we make AJAX call
request.open('GET', 'https://restcountries.com/v2/name/italy');
// Send the request 
request.send();
// Make a request on load
request.addEventListener('load', function(){
    console.log(this.responseText);
    /* 
        [{"name":"Italy","topLevelDomain":[".it"],"alpha2Code":"IT","alpha3Code":"ITA","callingCodes":["39"],
        "capital":"Rome","altSpellings":["IT","Italian Republic","Repubblica italiana"],"subregion":"Southern Europe",
        "region":"Europe","population":59554023,"latlng":[42.83333333,12.83333333],"demonym":"Italian","area":301336.0,
        "gini":35.9,"timezones":["UTC+01:00"],"borders":["AUT","FRA","SMR","SVN","CHE","VAT"],"nativeName":"Italia",
        "numericCode":"380","flags":{"svg":"https://flagcdn.com/it.svg","png":"https://flagcdn.com/w320/it.png"},
        "currencies":[{"code":"EUR","name":"Euro","symbol":"€"}],"languages":[{"iso639_1":"it","iso639_2":"ita",
        "name":"Italian","nativeName":"Italiano"}],"translations":{"br":"Italia","pt":"Itália","nl":"Italië",
        "hr":"Italija","fa":"ایتالیا","de":"Italien","es":"Italia","fr":"Italie","ja":"イタリア","it":"Italia",
        "hu":"Olaszország"},"flag":"https://flagcdn.com/it.svg","regionalBlocs":[{"acronym":"EU",
        "name":"European Union"}],"cioc":"ITA","independent":true}] 
    */
    // To use this data we need to convert them
    const data = JSON.parse(this.responseText)
    console.log(data)
    /* 
        alpha2Code: "IT"
        alpha3Code: "ITA"
        altSpellings: (3) ['IT', 'Italian Republic', 'Repubblica italiana']
        area: 301336
        borders: (6) ['AUT', 'FRA', 'SMR', 'SVN', 'CHE', 'VAT']
        callingCodes: ['39']
        capital: "Rome"
        cioc: "ITA"
        currencies: [{…}]
        demonym: "Italian"
        flag: "https://flagcdn.com/it.svg"
        flags: {svg: 'https://flagcdn.com/it.svg', png: 'https://flagcdn.com/w320/it.png'}
        gini: 35.9
        independent: true
        languages: [{…}]
        latlng: (2) [42.83333333, 12.83333333]
        name: "Italy"
        nativeName: "Italia"
        numericCode: "380"
        population: 59554023
        region: "Europe"
        regionalBlocs: [{…}]
        subregion: "Southern Europe"
        timezones: ['UTC+01:00']
        topLevelDomain: ['.it']
        translations: {br: 'Italia', pt: 'Itália', nl: 'Italië', hr: 'Italija', fa: 'ایتالیا', …}
    */

})

```

## Promises
### An objectthat is used as a placeholder for the future result of an asynchronous operation - a container for a future value
```js
const getCountryData = function(country) {
    fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => console.log(data))
};
getCountryData('italy')
```

## Chaining Promises
```js
const getCountryData = function(country) {
    fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
        const newData = data[0];
        newData.borders?.forEach(border => {
            const neighbour = fetch(`https://restcountries.com/v2/alpha/${border}`)
            .then(resp => resp.json())
            .then(data => data);
            console.log(neighbour);
        })
    })
};
getCountryData('portugal')
```

## Rejected Promises - Error
```js
const getCountryData = function(country) {
    fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
        const newData = data[0];
        newData.borders?.forEach(border => {
            const neighbour = fetch(`https://restcountries.com/v2/alpha/${border}`)
            .then(resp => resp.json())
            .then(data => data);
            console.log(neighbour);
        })
    })
    .catch(err => alert(err))
    .finally(() => {
        // this code will run regardless of the promise
    })
};
getCountryData('portugal')
```

## Throwing errors manually
```js
const getJSON = function(url, errorMsg = 'Something went wrong!'){
    return fetch(url).then(response => {
        if(!response.ok) throw new Error(`${errorMsg} (${response.status})`);
        return response.json();
    });
};

const getCountryData = function(country) {
    getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {

        const newData = data[0];
        newData.borders?.forEach(border => {

            const neighbour = getJSON(`https://restcountries.com/v2/alpha/${border}`, 'Country not found')
            .then(data => data);
            console.log(neighbour);
        })
    })
    .catch(err => alert(err))
    .finally(() => {
        // this code will run regardless of the promise
    })
}; 
getCountryData('portugal')
```

## Building a Simple Promise
```js
const lotteryPromise = new Promise(function(resolve, reject){

    console.log('Lottery draw us happening');
    setTimeout( function() {
        if(Math.random() >= 0.5 ){
            resolve('You WIN!')
        } else {
            reject(new Error('You LOSE!'))
        }

            console.log();
    }, 2000)
})

lotteryPromise
.then( res => console.log(res))
.catch(err => console.error(err))


// Promisifying setTimeout
const wait = function(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds * 1000)
    })
}

wait(2).then(() => {
    console.log('I waited for 2 seconds');
    return wait(1)
}).then(() => console.log('I waited for 1 second')).then(() => console.log())


Promise.resolve('abc').then( x => console.log(x))
Promise.reject(new Error('Problem!')).catch(x => console.error(x))
/* 
    Lottery draw is happening
    abc
    Error: Problem!
    Promise.catch (asinc)
    app.js:18 You WIN!
    app.js:30 I waited for 2 seconds
    app.js:32 I waited for 1 second 
*/
```

## Async/Await
```js
const renderCountry = function(data){
    console.log(`
    ${data.name}
    ${data.region}
    ${+(data.population / 1000000).toFixed(1)} Mln
    ${data.languages[0].name}
    ${data.currencies[0].name}
    `);
}


// Async - the function returns as a promise
const whereAmI = async function(country){
    // Await - await until the promise settles and returns the response
    const res = await fetch(`https://restcountries.com/v2/name/${country}`);
    const data = await res.json()
    renderCountry(data[0])
}

whereAmI('italia');

/* 
    Italy
    Europe
    59.6 Mln
    Italian
    Euro
*/
```

## Try/Catch
```js
try {
    let y = 1;
    const x = 2;
    x = 3
} catch (error) {
    console.log(error.message);
} 

// Assignment to constant variable.
```

## Return values from Async functions
```js
// Async - the function returns as a promise
const whereAmI = async function(country){
    // Await - await until the promise settles and returns the response
    const res = await fetch(`https://restcountries.com/v2/name/${country}`);
    const data = await res.json()
    renderCountry(data[0]);

    return `You are in ${data[0].capital}, ${data[0].name}`
}

whereAmI('italia').then(log => console.log(log))
// You are in Rome, Italy
```

## Transform function in Try/Catch
```js
console.log('1: Will get location');
whereAmI('italia')
.then(city => console.log(`2: ${city}`))
.catch(err => console.log(`2: ${err.message}`))
.finally(() => console.log(`3: Finished getting location`))

/* 
    1: Will get location
    2: You are in Rome, Italy
    3: Finished getting location
*/


(async function whereAmI(){
    console.log('1: Will get location');
    try {
        const city = await whereAmI()
        console.log(`2: ${city}`);
    } catch (error) {
        console.error(`2: ${err.message}`)
    }
    console.log(`3: Finished getting location`)
})();

/* 
    1: Will get location
    2: You are in Rome, Italy
    3: Finished getting location
*/
```

## Running Promises in parallel
```js
const get3Countries = async function(c1, c2, c3){
    try {

        // Running Promises in Parallel
        // If one is rejected all will be rejected
        const data = await Promise.all([
            getJSON(`https://restcountries.com/v2/name/${c1}`),
            getJSON(`https://restcountries.com/v2/name/${c2}`),
            getJSON(`https://restcountries.com/v2/name/${c3}`),
        ])

        console.log(data.map(d => d[0].capital));

    } catch (error) {
        console.error(error);
    }
}

get3Countries('portugal', 'serbia', 'italy')
// (3) ['Lisbon', 'Belgrade', 'Rome']
```

## Promise.race
```js
// Promise.race returns the fastest promise (doesn't matter if rejected)
(async function (){
    const res = await Promise.race([
        getJSON(`https://restcountries.com/v2/name/italy`),
        getJSON(`https://restcountries.com/v2/name/serbia`),
        getJSON(`https://restcountries.com/v2/name/spain`)
    ])
    console.log(res[0]);
})()
```

## Promise.allSettled
```js

```



