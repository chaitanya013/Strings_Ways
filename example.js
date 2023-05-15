let radius = 10;
const pi = 3.14;

console.log(radius,pi);

// // maths operations
console.log(10 / 2);            // 5

let result = radius % 3;        // 1
let result = pi*radius**2;      //314

// oreder of operations- Bidmas rule
let result = 5*(10-3)**2;
console.log(result);

let likes = 10;
likes = likes+1;
likes++;
likes--;
likes += 10;
likes -= 9;
console.log(likes);

let result = 'i have a'+' '+ likes +' '+  'ruppes';
console.log(result);

// Template Strings
const title = 'Best reads of 2022';
const author = 'Mario';
const likes = '30';

// // concatenation way
let result = 'The blog called ' + title + ' by '+ author+ ' has '+ likes + ' likes ';
console.log(result);

// Template Strings Way
let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

// Creating HTML String Way
let Html = `
    <h2>${title}</h2>
    <p>by ${author}</p>
    <span>This blog has ${likes} likes</span>
    `;
console.log(Html);