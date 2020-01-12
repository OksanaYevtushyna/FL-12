//Task 1
const convert = (...args) => {
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] === 'number') {
            args[i] = args[i] + '';
        } else {
            args[i] = parseInt(args[i]);
        }
    }
    return args;
}

//Task 2
const executeforEach = (args, cb) => {
    for (let item of args) {
        cb(item);
    }
}

//Task 3
const mapArray = (args, cb) => {
    let result = [];
    executeforEach(args, (elem) => result.push(cb(+elem)));
    return result;
}

//Task 4
const filterArray = (args, cb) => {
    let result = [];
    executeforEach(args, elem => {
        if (cb(elem)) {
            result.push(elem);
        }
    })
    return result;
}

//Task 5
const flipOver = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result = str[i] + result;
    }
    return result;
}

//Task 6
const makeListFromRange = (arr) => {
    let result = [];
    for (let num = arr[0]; num <= arr[1]; num++) {
        result.push(num);
    }
    return result;
}

//Task 7
const getArrayOfKeys = (args, key) => {
    let result = [];
    executeforEach(args, (elem) => {
        result.push(elem[key]);
    })
    return result;
}
const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];

//Task 8 
const thirty = 30;
const substitute = (arr) => {
    let resArray = [];
    mapArray(arr, (elem) => elem < thirty ? resArray.push('*') : resArray.push(elem));
    return resArray;
}

//Task 9
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const getPastDay = (date, days) => {
    let dayInMilleseconds = 86400000;
    let getDate = date.getTime();
    const month = (mon) => mon ? MONTHS[mon - 1] : '';
    let countedDate = new Date(getDate - dayInMilleseconds * days);
    let countDays = countedDate.getDate();
    return `${countDays}, (${countDays} ${month(countedDate.getMonth() + 1)} ${countedDate.getFullYear()})`;
}

//Task 10
const formatDate = (date) => {
    const TEN = 10;
    let check = (number) => number < TEN ? '0' + number : number;
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}` +
        ` ${check(date.getHours())}:${check(date.getMinutes())}`
}