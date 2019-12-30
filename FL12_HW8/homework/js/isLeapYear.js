let isLeapYear = (year) => {
    let fullDate = new Date(year);
    if (fullDate instanceof Date && !isNaN(fullDate)) {
        fullDate = fullDate.getFullYear();
        if (fullDate % 4 === 0 && fullDate % 100 !== 0 || fullDate % 400 === 0) {
            return `${fullDate} is a leap year`
        } else {
            return `${fullDate} is not a leap year`
        }
    } else {
        return 'Invalid Date';
    }
}

isLeapYear(1213131313);