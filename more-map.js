const numbers = [12, 22, 18, 14];
const half = numbers.map(x => x/2);
const thirds = numbers.map(x => x/3);
// console.log(half);
// console.log(thirds);

const friends = ['Sabbir', 'Sakib', 'Santo', 'Jullo'];
const firstLetters = friends.map(f => f[0]);
// console.log(firstLetters);
const nameLenghts = friends.map(f => f.length);
// console.log(nameLenghts);

const products = [
    {id: 1, name: 'laptop', price: 40000,},
    {id: 1, name: 'mobile', price: 12000,},
    {id: 1, name: 'watch', price: 32000,},
    {id: 1, name: 'tablet', price: 25000,}
];

// const items = products.map(product => console.log(product.name));
const items = products.map(product => product.name);
const prices =products.map(p => p.price);
// console.log(items);
console.log(prices);

