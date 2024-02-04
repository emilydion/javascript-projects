const checkFive = require('../checkFive.js');

describe("checkFive", function(){
    test("The function should return that the number is less than 5.", function() {
        let output = checkFive(2);
        expect(output).toBe("2 is less than 5.");
    });

    test("The function should return that the number is equal to 5.", function() {
        let output = checkFive(5);
        expect(output).toBe("5 is equal to 5.");
    });

    test("The function should return that the number is greater to 5.", function() {
        let output = checkFive(7);
        expect(output).toBe("7 is greater than 5.");
    });
});