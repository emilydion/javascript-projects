// Initialize Variables below
let date = "Monday 2019-03-18"; 
let time = "10:05:34 AM"; 
let astronautCount = 7; 
let astronautStatus = "ready"; 
const averageAstronautMassKg = 80.7; 
let crewMassKg = astronautCount * averageAstronautMassKg; 
let fuelMassKg = 760000; 
let shuttleMassKg = 74842.31; 
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg; 
const maximumMassLimit = 850000;
let fuelTempCelsius = -225; 
const minimumFuelTemp = -300; 
const maximumFuelTemp = -150; 
let fuelLevel = "100%"; 
let weatherStatus = "clear"; 
let preparedForLiftOff = true; 

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7) {
    preparedForLiftOff = false; 
    console.log("Too many astronauts, cannot carry out launch.");
}

// add logic below to verify all astronauts are ready
if (astronautStatus != "ready") {
    preparedForLiftOff = false; 
    console.log("Astronauts are not ready for launch, cannot proceed.");
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg > maximumMassLimit) {
    preparedForLiftOff = false; 
    console.log("Total mass kg is too high, offload cargo in order to launch.");
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius < minimumFuelTemp || fuelTempCelsius > maximumFuelTemp) {
    preparedForLiftOff = false; 
    console.log("Cannot launch, check fuel temperature.");
}

// add logic below to verify the fuel level is at 100%
if (fuelLevel != "100%") {
    preparedForLiftOff = false; 
    console.log("Cannot launch, ensure fuel is to 100% before proceeding.");
}

// add logic below to verify the weather status is clear
if (weatherStatus != "clear") {
    preparedForLiftOff = false; 
    console.log("Cannot launch, wait for clear weather conditions to proceed.");
}

// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftOff) {
    console.log(`All systems are a go! Initializing space shuttle launch sequence.
    \n------------------------------------------------------------------
    \nDate: ${date}
    \nTime: ${time}
    \nAstronaut Count: ${astronautCount}
    \nCrew Mass: ${crewMassKg} kg
    \nFuel Mass: ${fuelMassKg} kg
    \nShuttle Mass: ${shuttleMassKg} kg
    \nTotal Mass: ${totalMassKg} kg
    \nFuel Temperature: ${fuelTempCelsius} \u00B0C
    \nWeather Status: ${weatherStatus}
    \n------------------------------------------------------------------
    \nHave a safe trip, astronauts!`);
}