let countNumbers = (args) => {
    let arr = args.split('');
    let filtred = arr.filter((item) => !isNaN(item));
    let resultObj = {};
    for (let i = 0; i < filtred.length; i++) {
        if (Object.keys(resultObj).includes(filtred[i])) {
            resultObj[filtred[i]] += 1;
        } else {
            resultObj[filtred[i]] = 1;
        }
    }
    return resultObj;
}
countNumbers('erer384jj4444666888jfd123');