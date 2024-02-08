const myIncome = [15000, 1000, 10000];
console.log(Array.isArray(myIncome));
console.log(myIncome.includes(2000));
console.log(myIncome.includes(1000));

const myNewIncome = [10000, 4000, 4000];
const allIncome = myNewIncome.concat(myIncome);
console.log(allIncome)