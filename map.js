const numbers = [2, 8, 6, 3, 4];

function getDouble(numbers) {
  const output = [];
  for (const number of numbers) {
    const doubled = number * 2;
    output.push(doubled);
  }
}
