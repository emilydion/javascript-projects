let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 2,
   steps: function() {return Math.floor(Math.random() * 10);}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 4,
   steps: function() {return Math.floor(Math.random() * 10);}
}; 

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 6,
   steps: function() {return Math.floor(Math.random() * 10);}
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 8,
   steps: function() {return Math.floor(Math.random() * 10);}
}

let bear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 10,
   steps: function() {return Math.floor(Math.random() * 10);}
}

let animals = [superChimpOne, salamander, superChimpTwo, dog, bear];

function crewReports(animalArray) {
   for (let i = 0; i < animalArray.length; i++) {
      console.log(`${animalArray[i].name} is a ${animalArray[i].species}. They are ${animalArray[i].age} years old and ${animalArray[i].mass} kilograms. Their ID is ${animalArray[i].astronautID}.`);
   }
}

crewReports(animals);

function fitnessTest(animalArray) {
   let moveResults = []; 
   for (let i = 0; i < animalArray.length; i++) {
      let numSteps = animalArray[i].steps();
      let count = 0; 
      while (numSteps <= 20) {
         numSteps += animalArray[i].steps(); 
         count++;
      }
      moveResults.push(`${animalArray[i].name} took ${count} turns to take 20 steps.`);
   }
   return moveResults; 
}

let results = fitnessTest(animals); 
for (let i = 0; i < animals.length; i++) {
   console.log(results[i]); 
}

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!