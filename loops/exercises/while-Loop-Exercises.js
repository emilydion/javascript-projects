//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require('readline-sync'); 
let fuelLevel = 0; 
let numberAstronauts = 0; 
let shuttleAltitude = 0; 

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

fuelLevel = input.question("Please enter the starting fuel level: "); 

while (fuelLevel < 5000 || fuelLevel > 30000) {
  if (fuelLevel < 5000) {
    fuelLevel = input.question("Invalid input! Fuel level must be above 5000. Please try again: "); 
  } else if (fuelLevel > 30000) {
    fuelLevel = input.question("Invalid input! Fuel level must be below 30000. Please try again: "); 
  } else {
    break; 
  }
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.

numberAstronauts = input.question("Please enter the number of astronauts aboard: "); 

while (numberAstronauts < 1 || numberAstronauts > 7) {
  if (numberAstronauts < 1) {
    numberAstronauts = input.question("Invalid input! There must be at least one astronaut aboard. Please try again: "); 
  } else if (numberAstronauts > 7) {
    numberAstronauts = input.question("Invalid input! There must be 7 or less astronauts aboard. Please try again: "); 
  } else {
    break; 
  }
}
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while (fuelLevel - (100 * numberAstronauts) >= 0) {
  fuelLevel = fuelLevel - (100 * numberAstronauts); 
  shuttleAltitude += 50; 
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
console.log(`The shuttle gained an altitude of ${shuttleAltitude}.`); 
if (shuttleAltitude >= 2000) {
  console.log("Orbit achieved!"); 
} else {
  console.log("Failed to reach orbit."); 
}