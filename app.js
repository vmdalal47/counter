const numberContainer = document.getElementById("number-container");
const decreaseButton = document.getElementById("decrease-button");
const resetButton = document.getElementById("reset-button");
const increaseButton = document.getElementById("increase-button");

const increaseNumber = function(event) {
    event.preventDefault();
    let currentNumber = numberContainer.innerText;
    currentNumber++;
    numberContainer.innerText = currentNumber;
}

const decreaseNumber = function(event) {
    event.preventDefault();
    let currentNumber = numberContainer.innerText;
    currentNumber--;
    numberContainer.innerText = currentNumber;
}

increaseButton.addEventListener("click", increaseNumber);

decreaseButton.addEventListener("click", decreaseNumber);