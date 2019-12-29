let answer;
let randomNum;
let min = 0;
let possiblePrize;
let possiblePrizeNum = 100;
let currentPrize = 0;
let totalPrize = 100;
const numIncrement = 4;
const prizeDec = 2;
const possiblePrizeInc = 2;
let attempts = 3;
let maxNum = 8;
let tryAttempts = 3;

if (confirm('Do you want to play a game?')) {
    let max = 8;
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    attempts;
    currentPrize;
    possiblePrize;
    totalPrize;
    while (attempts > 0) {
        answer = +prompt(`
        Choose a roulette pocket from 0 to ${max}
        Attempts left: ${attempts}
        Total prize: ${currentPrize}$
        Possible prize on current attempt: ${possiblePrize}$
        Please enter your number
        `)
        if (answer === randomNum) {
            currentPrize += possiblePrize;
            alert(`Congratulation, you won! Your prize is: ${currentPrize}$`)
            if (confirm('Do you want to continue?')) {
                max += numIncrement;
                attempts = tryAttempts;
                randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
                totalPrize *= possiblePrizeInc;
                possiblePrize = totalPrize;
            } else {
                alert(`Thank you for your participation. Your prize is: ${currentPrize}$`);
                if (confirm('Do you want to play again?')) {
                    max = maxNum;
                    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
                    attempts;
                    currentPrize = 0;
                    possiblePrize = totalPrize;
                } else {
                    break;
                }
            }
        } else {
            attempts--;
            possiblePrize /= prizeDec;
        }

        if (attempts === 0) {
            alert(`Thank you for your participation. Your prize is: ${currentPrize}$`);
            if (confirm('Do you want to play again?')) {
                max = maxNum;
                randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
                attempts = tryAttempts;
                currentPrize = 0;
                possiblePrize = possiblePrizeNum;
            } else {
                break;
            }
        }
    }
} else {
    alert('You did not become a billionaire, but can.');
}