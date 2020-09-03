const url = require('url');

const myURL = new URL('http://minipixel.ca:8000/collections.html?id=aasefea2234codding');

console.log(myURL.href);
console.log('toString: ', myURL.toString());

console.log('host: ', myURL.host);
console.log('hostname: ', myURL.hostname);

console.log('pathnamme: ', myURL.pathname);

console.log('search: ', myURL.search);
console.log('searchParams: ', myURL.searchParams);

myURL.searchParams.append('color', 'white')
console.log('append: ', myURL.searchParams);
console.log('append: ', myURL.search);

myURL.searchParams.forEach((value, name) => {
    console.log('searchParams forEach: ', `${name} : ${value}`);
})