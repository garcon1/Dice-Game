document.getElementById('roll-button').addEventListener('click', function() {
    const diceImage = document.getElementById('dice-image');
    const resultText = document.getElementById('result');
    const rollResult = Math.floor(Math.random() * 6) + 1;

    const imageName = `dice-six-faces-${['one', 'two', 'three', 'four', 'five', 'six'][rollResult - 1]}.png`;
    diceImage.src = `images/${imageName}`;
    resultText.textContent = `You rolled a ${rollResult}!`;
});
