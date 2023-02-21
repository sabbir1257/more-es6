// 1.var let const
// break up with var

const numbers = [12, 50, 55];
let salary = 450;
salary = 455;

// 2. default parameters
function calculateSalary(salary, tex = 0.25, bonus = 0){
    const remaining = salary - salary*tex;
    const total = remaining + bonus;
    return total;
}

// 3.template string
const elementHTML = `
<div>
    <h3> Name:</h3>
    <p>Address: </p>
    <p>Salary: ${calculateSalary(1000, 0, 0)} </p>
    <p>Others: ${numbers[2]} </p>
</div>
`

// 4.Arrow function
const doubleId = x => x*2;
const calculateSalary2 = (salary, tex, bonus) => salary - salary * tex + bonus ;

// 5.spread
const ages = [10 ,12, 14, 16, 15, 18];
const newAges = [...ages, 22, 24];

// 6. destructuring 
const{z, x, ...c} = {x: 15, y: 22, z: 24, name: 'Sabbir Sarker', salary = 25000};
const [a, b, ...r] = [12, 58, 74, 55];