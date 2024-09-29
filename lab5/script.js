
function validateInput(input) {
    let value = parseInt(input.value);
    if (value < 1) {
        input.value = 1;
    } else if (value > 13) {
        input.value = 13;
    }
}


function selectCards() {
    const card1 = parseInt(document.getElementById('card1').value) || 0;
    const card2 = parseInt(document.getElementById('card2').value) || 0;
    const card3 = parseInt(document.getElementById('card3').value) || 0;
    const card4 = parseInt(document.getElementById('card4').value) || 0;
    const card5 = parseInt(document.getElementById('card5').value) || 0;

    const sum = card1 + card2 + card3 + card4 + card5;
    document.getElementById('sumResult').value = sum;
}


function sortCards() {
    let cards = [
        parseInt(document.getElementById('card1').value),
        parseInt(document.getElementById('card2').value),
        parseInt(document.getElementById('card3').value),
        parseInt(document.getElementById('card4').value),
        parseInt(document.getElementById('card5').value)
    ];

    cards.sort((a, b) => a - b);

   
    document.getElementById('card1').value = cards[0];
    document.getElementById('card2').value = cards[1];
    document.getElementById('card3').value = cards[2];
    document.getElementById('card4').value = cards[3];
    document.getElementById('card5').value = cards[4];
}
