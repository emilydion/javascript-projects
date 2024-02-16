//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name; 
        this.mass = mass; 
        this.scores = scores; 
    }

    addScore(newScore) {
        this.scores.push(newScore); 
    }

    scoreTotal() {
        let total = null; 
        for (let i = 0; i < this.scores.length; i++) {
            total += this.scores[i]; 
        }
        return total; 
    }

    average() {
        let total = this.scoreTotal(); 
        let average = Math.round((total / this.scores.length) * 10) / 10; 
        return average; 
    }

    status() {
        let average = this.average(); 
        if (average >= 90) {
            return "Accepted"; 
        } else if (average <= 89 && average >= 80) {
            return "Reserve"; 
        } else if (average <= 79 && average >= 70) {
            return "Probationary"; 
        } else {
            return "Rejected"; 
        }
    }
}

let bear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let maltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

bear.addScore(83); 
console.log(bear.scores); 

console.log(maltese.average());

let candidates = [bear, maltese, gator]; 

for (let i = 0; i < candidates.length; i++) {
    console.log(`${candidates[i].name} earned an average test score of ${candidates[i].average()}% and has a status of ${candidates[i].status()}.`); 
}

// console.log(bear); 
// console.log(maltese); 
// console.log(gator); 

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
function acceptanceGauge(candidate) {
    let scoreBaseline = [[70, 80, 90], ["Probationary", "Reserve", "Accepted"]];
    if (candidate.average() >= 90) {
        console.log(`${candidate.name} has an average of ${candidate.average()}%, and is already accepted! Congrats!`)
    } else {
        let testsUntilAccepted = 0; 
        for (let i = 0; i < scoreBaseline[0].length; i++) {
            while (candidate.average() < scoreBaseline[0][i]) {
                candidate.addScore(100); 
                testsUntilAccepted++; 
            }
            console.log(`It will take ${testsUntilAccepted} perfect tests until status is \'${scoreBaseline[1][i]}\'.`);
        }
    }
}

acceptanceGauge(gator); 