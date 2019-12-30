function addOne(x) {
    return x + 1;
}

let pipe = (...arg) => {
    addOne;
    for (i = 1; i < arg.length; i++) {
        addOne(arg[i]);
    }
}

pipe(1, addOne, addOne);