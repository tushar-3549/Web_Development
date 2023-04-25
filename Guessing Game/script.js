const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessNumber = form.querySelector("#guessNumber");
const checkButton = form.querySelector("#check");
const resultShow = cardBody.querySelector(".result-show");
const remainingAttempts = cardBody.querySelector(".result-extra");
const lostWonMessage = document.createElement("p");

// let limit = 5;
let win = 0;
let lose = 0;
let attempts = 0;
let totalAttempts = 5;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    // console.log(guessNumber.value);
    CheckResult(guessNumber.value);
    attempts++;
    if (attempts === 5) {
        guessNumber.disabled = true;
        checkButton.disabled = true;
    }
    if (attempts < 6) {
        let guessingNumber = Number(guessNumber.value);
        checkResult(guessingNumber);
        remainingAttempts.innerHTML = `Remaining attempts: ${totalAttempts - attempts
            }`;
    }
    guessNumber.value = "";
})

function CheckResult(guessNumber) {
    // console.log(guessNumber);
    const random_number = getRandomNumber(5);
    if (parseInt(guessNumber) === random_number) {
        resultShow.innerHTML = `You have Won the Game!`;
        win++;
    } else {
        resultShow.innerHTML = `You have Lost the Game! Random Number : ${random_number}`;
        lose++;
    }
    lostWonMessage.classList.add("winlostmsg");
    lostWonMessage.innerHTML = `Won: ${win}, Lost: ${lose}`;
    cardBody.appendChild(lostWonMessage);
}


function getRandomNumber(limit) {
    var randomNumber = Math.floor(Math.random() * limit) + 1;
    return randomNumber;
}