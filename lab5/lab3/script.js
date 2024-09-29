let user1Roll = 0;
let user2Roll = 0;

// Function to generate random dice number and display
function rollDice(user) {
    const roll = Math.floor(Math.random() * 6) + 1; // Generates random number between 1 and 6
    
    if (user === 'user1') {
        user1Roll = roll;
        document.getElementById('user1Roll').textContent = roll;
    } else if (user === 'user2') {
        user2Roll = roll;
        document.getElementById('user2Roll').textContent = roll;
    }
}

// Function to determine winner
function determineWinner() {
    if (user1Roll > user2Roll) {
        alert("User 1 is the winner!");
    } else if (user1Roll < user2Roll) {
        alert("User 2 is the winner!");
    } else if (user1Roll === 0 || user2Roll === 0) {
        alert("Both users must roll the dice!");
    } else {
        alert("It's a tie!");
    }
}
