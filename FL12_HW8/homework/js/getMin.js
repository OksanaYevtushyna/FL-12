let getMin = (...arguments) => {
    return arguments.sort((a, b) => a - b)[0];
}

getMin(5, 14, 8, -3, 2);