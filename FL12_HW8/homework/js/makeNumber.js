let makeNumber = (arg) => {
    let arr = arg.split('');
    let filtred = arr.filter((item) => {
        return !isNaN(item);
    })
    return filtred.join('');
}

makeNumber('erer384jjjfd123');