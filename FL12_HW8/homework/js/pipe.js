function addOne(x) {
    return x + 1;
}

function pipe(...args) {
    return args.reduce((item, total) => {
        return total(item);
    })
}

pipe(1, addOne, addOne);