var numbers = [ 10, 20, 30, 40, 50];

function duplicateValue (num) {
    return num* 2;
}

function sumElements (sumSoFar, currentArrayElement) {
    return sumSoFar + currentArrayElement;
}

const sumOfMultiples = numbers // [ 10, 20, 30, 40, 50 ]
    .map(duplicateValue) // [ 20, 40, 60, 80, 100 ]
    .reduce(sumElements, 0); // 300 = 20 + 40 + 60 + 80 + 100

console.log(numbers);
console.log(numbers.map(duplicateValue))
console.log(sumOfMultiples);

//const [first, second] = [1, 2];
const [first, , third] = [1, 2, 3, 4];
console.log(third)
console.table(['ds', undefined, third])

const mmn = {name: 'MMN', lecturer: 'Prof. Hußmann'};
const mmn18 = {... mmn, year: '2018'};
console.log(mmn18);
