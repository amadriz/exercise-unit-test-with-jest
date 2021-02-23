// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// 1 EUR (Euro) = 1.2 USD (US Dollar)

function fromDollarToYen(usd){
    return usd * oneEuroIs.JPY
}

function fromEuroToDollar(euro){
    return euro * oneEuroIs.USD
} 

function fromYenToPund(yen){
    return yen * oneEuroIs.GBP
} 

console.log(fromDollarToYen(10));
console.log(fromEuroToDollar(10));
console.log(fromYenToPund(10));

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPund };
