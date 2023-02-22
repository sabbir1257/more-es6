const numbers = [12, 15, 45,21, 32, 15, 62, 44, 34];
const bigNums = numbers.filter(number => number > 20);
const tiny = numbers.filter(x => x < 20);
const even = numbers.filter(x => x % 2 === 0);
console.log(even);


const products = [
    {id: 1, name: 'laptop', price: 40000,},
    {id: 1, name: 'mobile', price: 12000,},
    {id: 1, name: 'watch', price: 32000,},
    {id: 1, name: 'tablet', price: 25000,}
];

const  expensive = products.filter(x => x.price > 200000);
console.log(expensive);