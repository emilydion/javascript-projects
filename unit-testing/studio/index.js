
let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput: function(number) {
    let finalString = "";
    if (number % 2 === 0) {finalString += "Launch";}
    if (number % 3 === 0) {finalString += "Code";}
    if (number % 5 === 0 && (number % 2 === 0 || number % 3 === 0)) {finalString += " Rocks";}
    else if (number % 5 === 0) {finalString += "Rocks";} 
    finalString += "!"; 

    if (number % 5 === 0 && number % 2 === 0 && number  % 3 !== 0) {finalString += " (CRASH!!!!)";}

    if (number % 2 !== 0 && number % 3 !== 0 && number % 5 !== 0) {finalString = "Rutabagas! That doesn't work.";}

    return finalString; 
  }
};

module.exports = launchcode;

