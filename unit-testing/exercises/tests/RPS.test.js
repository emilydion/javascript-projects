const whoWon = require('../RPS.js'); 

describe("whoWon", function() {
    test("Function should return \'TIE!\' when the values are equal.", function() {
        let result = whoWon('rock', 'rock'); 
        expect(result).toBe('TIE!'); 
    });

    test("Function should return \'Player 2 wins!\' when player1 has rock and player2 has paper.", function() {
        let result = whoWon('rock', 'paper'); 
        expect(result).toBe('Player 2 wins!'); 
    });

    test("Function should return \'Player 2 wins!\' when player1 has paper and player2 has scissors.", function() {
        let result = whoWon('paper', 'scissors'); 
        expect(result).toBe('Player 2 wins!'); 
    });

    test("Function should return \'Player 2 wins!\' when player1 has scissors and player2 has rock.", function() {
        let result = whoWon('scissors', 'rock'); 
        expect(result).toBe('Player 2 wins!'); 
    });
});