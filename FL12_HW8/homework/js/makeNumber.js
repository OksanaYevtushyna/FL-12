let makeNumber = (arg) => {
    return arg.split('').filter((item) => !isNaN(item)).join('');
}

makeNumber('erer384jjjfd123');