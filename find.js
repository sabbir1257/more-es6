const numbers = [12, 15, 45,21, 32, 20, 62, 44, 34];
const fives = numbers.find(x => x % 5 === 0);
const fiveAll = numbers.filter(x => x % 5 === 0);
console.log(fives);
console.log(fiveAll);

const products = [
    {id: 1, name: 'laptop', price: 40000,},
    {id: 1, name: 'mobile', price: 12000,},
    {id: 1, name: 'watch', price: 32000,},
    {id: 1, name: 'tablet', price: 25000,}
];

const cheap = products.find(x => x.price > 20000);
console.log(cheap);