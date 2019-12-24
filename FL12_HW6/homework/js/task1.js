let a = parseFloat(prompt('Please, enter a first value'));
let b = parseFloat(prompt('Please, enter a second value'));
let c = parseFloat(prompt('Please. enter a third value'));

const twoNumber = 2;
const fourNumber = 4;
let discriminant = b * b - fourNumber * a * c;
let scqDisc = Math.sqrt(discriminant);
let denomin = twoNumber * a;

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('Invalid input data');
} else if (Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)) {
    if (a === 0 || b === 0 || c === 0) {
        console.log('Invalid input data');
    } else if (discriminant < 0) {
        console.log('No solution');
    } else if (discriminant === 0) {
        console.log((- b + scqDisc) / denomin);
    } else {
        let x1 = Math.round((- b + scqDisc) / denomin);
        let x2 = Math.round((- b - scqDisc) / denomin);
        console.log(`x1 = ${x1}`);
        console.log(`x2 = ${x2}`);
    }
} else {
    console.log('Invalid input data');
}
