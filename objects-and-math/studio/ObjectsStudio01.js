// Code your selectRandomEntry function here:
function selectRandomEntry(originalArray) {
  let randomEntry = originalArray[Math.floor(Math.random() * originalArray.length)]; 
  return randomEntry;; 
}

// Code your buildCrewArray function here:
function buildCrewArray(idArray, candidateArray) {
  let crewArray = [];
  for (let i = 0; i < idArray.length; i++) {
    for (let j = 0; j < candidateArray.length; j++) {
      if (candidateArray[j]['astronautID'] === idArray[i]) {
        crewArray.push(candidateArray[j]);
      }
    }
  }
  return crewArray; 
}

let idNumbers = [291, 414, 503, 599, 796, 890];

let idArray = []; 
for (let i = 0; i < 3; i++) {
  let newEntry = selectRandomEntry(idNumbers); 
  while (idArray.includes(newEntry)) {
    newEntry = selectRandomEntry(idNumbers);
  }
  idArray.push(newEntry); 
}

// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:
let crewArray = buildCrewArray(idArray, animals);
console.log(`${crewArray[0].name}, ${crewArray[1].name}, and ${crewArray[2].name} are going to space!`);
