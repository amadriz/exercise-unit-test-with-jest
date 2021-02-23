// // import the function sum from the app.js file
// const { sum } = require('./app.js');

// // start your first test
// test('adds 14 + 9 to equal 23', () => {
// test('adds 14 + 9 to equal 23', () => {
//     let total = sum(14, 9);

//     // we expect the sum of those 2 numbers to be 23
//     expect(total).toBe(23);
// });

const { fromDollarToYen, fromEuroToDollar, fromYenToPund } = require('./app.js');


test('10 dollars to yens', () => {

let total = fromDollarToYen(10);

expect(total).toBe(1279);

});

test('10 Euros to Dollars', () => {

let total = fromEuroToDollar(10);

expect(total).toBe(12);

});

test('10 Yens to Pounds', () => {

let total = fromYenToPund(10);

expect(total).toBe(8);

});

