'use strict';

/* const request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v2/name/italy');
request.send();

request.addEventListener('load', function(){
    console.log(this.responseText);

    const data = JSON.parse(this.responseText)
    console.log(data);
}) */

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


/* 
const getCountryData = function(country) {
    fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => {
        if(!response.ok) throw new Error(`Country not found (${response.status})`)
        return response.json();
    })
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
*/

