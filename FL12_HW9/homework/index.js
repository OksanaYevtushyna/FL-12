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
const getPastDay = (date, days) => {
    let dayInMilleseconds = 86400000;
    let getDate = date.getTime();
    let finalDate = new Date(getDate - dayInMilleseconds * days);
    return finalDate.toDateString();
}
const date = new Date(2019, 0, 2);

//Task 10
const formatDate = (date) => {
    /*let newDate = [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('/') + ' ' + [date.getHours(), date.getMinutes()].join(':')
    return newDate;*/
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
}