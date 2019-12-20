let a = +prompt('Enter first value for triangle side');
let b = +prompt('Enter second value for triangle side');
let c = +prompt('Enter third value for triangle side');

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('Input values should be ONLY numbers');
} else if (Math.sign(a) === 0 || Math.sign(b) === 0 || Math.sign(c) === 0) {
    alert('A triangle must have 3 sides with a positive definite length');
} else if (Math.sign(a) === -1 || Math.sign(b) === -1 || Math.sign(c) === -1) {
    alert('A triangle must have 3 sides with a positive definite length');
} else if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        console.log('Equilateral triangle');
    } else if (a === b || b === c || a === c) {
        console.log('Isosceles triangle');
    } else {
        console.log('Scalene triangle');
    }
} else {
    console.log('Triangle doesn’t exist');
}



/*if (a === '' || b === '' || c === '' || typeof a === 'undefined' || typeof b === 'undefined' || typeof c === 'undefined') {
    alert('Input values should be ONLY numbers');
}
else if (a == 0 || b == 0 || c == 0) {
    alert('A triangle must have 3 sides with a positive definite length');
}
else if (a + b > c && a + c > b && b + c > a) {
    if (a == b && b == c) {
        console.log('Equilateral triangle');
    }
    else if (a == b || b == c || a == c) {
        console.log('Isosceles triangle');
    }
    else {
        console.log('Scalene triangle');
    }
}
else {
    console.log('Triangle doesn’t exist');
}*/