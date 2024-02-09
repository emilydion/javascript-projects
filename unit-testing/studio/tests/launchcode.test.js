// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", () => {
  test("organization should equal \"nonprofit\"", () => {
    expect(launchcode.organization).toEqual("nonprofit");
  });

  test("executiveDirector should equal \"Jeff\"", () => {
    expect(launchcode.executiveDirector).toEqual("Jeff");
  });

  test("percentageCoolEmployees should equal \"Jeff\"", () => {
    expect(launchcode.percentageCoolEmployees).toEqual(100);
  });

  test("programsOffered array should include \"Web Development\", \"Data Analysis\", and \"Liftoff\", and should be a length of 3.", () => {
    expect(launchcode.programsOffered.includes("Web Development")).toBe(true);
    expect(launchcode.programsOffered.includes("Data Analysis")).toBe(true);
    expect(launchcode.programsOffered.includes("Liftoff")).toBe(true);
    expect(launchcode.programsOffered.length).toEqual(3); 
  });

  test("launchOutput() should return \"Launch!\" when the value is ONLY divisible by 2.", () => {
    expect(launchcode.launchOutput(8)).toEqual("Launch!"); 
  });

  test("launchOutput() should return \"Code!\" when the value is ONLY divisible by 3.", () => {
    expect(launchcode.launchOutput(9)).toEqual("Code!"); 
  });

  test("launchOutput() should return \"Rocks!\" when the value is ONLY divisible by 5.", () => {
    expect(launchcode.launchOutput(5)).toEqual("Rocks!"); 
  });

  test("launchOutput() should return \"LaunchCode!\" when the value is divisible by both 2 AND 3.", () => {
    expect(launchcode.launchOutput(6)).toEqual("LaunchCode!"); 
  });

  test("launchOutput() should return \"Code Rocks!\" when the value is divisible by both 3 AND 5.", () => {
    expect(launchcode.launchOutput(15)).toEqual("Code Rocks!"); 
  });

  test("launchOutput() should return \"Launch Rocks! (CRASH!!!!)\" when the value is divisible by both 2 AND 5.", () => {
    expect(launchcode.launchOutput(10)).toEqual("Launch Rocks! (CRASH!!!!)"); 
  });

  test("launchOutput() should return \"LaunchCode Rocks!\" when the value is divisible by 2, 3, AND 5.", () => {
    expect(launchcode.launchOutput(30)).toEqual("LaunchCode Rocks!"); 
  });

  test("launchOutput() should return \"Rutabagas! That doesn\'t work.\" when the value is divisible by 2, 3, AND 5.", () => {
    expect(launchcode.launchOutput(17)).toEqual("Rutabagas! That doesn\'t work."); 
  });
});