// 1.var let const
// break up with var

const number = [12, 50, 55];
let salary = 450;
salary = 455;

// 2. default parameters
function calculateSalary(salary, tex = 0.25, bonus = 0){
    const remaining = salary - salary*tex;
    const total = remaining + bonus;
    return total;
}

