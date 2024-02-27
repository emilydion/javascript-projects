// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    let takeoff = document.getElementById("takeoff"); 
    let flightStatus = document.getElementById("flightStatus"); 
    let shuttleBackground = document.getElementById("shuttleBackground"); 
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight"); 
    let landing = document.getElementById("landing"); 
    let missionAbort = document.getElementById("missionAbort"); 
    let up = document.getElementById("up"); 
    let down = document.getElementById("down"); 
    let left = document.getElementById("left"); 
    let right = document.getElementById("right"); 
    let rocket = document.getElementById("rocket"); 

    takeoff.addEventListener("click", event => {
        let takeoffConfirm = window.confirm("Confirm that the shuttle is ready for takeoff."); 
        if (takeoffConfirm) {
            flightStatus.innerHTML = "Shuttle in flight."
            shuttleBackground.style.backgroundColor = "blue"; 
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
        }
    });

    landing.addEventListener("click", event => {
        window.alert("The shuttle is landing. Landing gear engaged."); 
        flightStatus.innerHTML = "The shuttle has landed."
        shuttleBackground.style.backgroundColor = "green"; 
        spaceShuttleHeight.innerHTML = 0; 
    });

    missionAbort.addEventListener("click", event => {
        let missionAbortConfirm = window.confirm("Confirm that you want to abort the mission."); 
        if (missionAbortConfirm) {
            flightStatus.innerHTML = "Mission aborted."
            shuttleBackground.style.backgroundColor = "green"; 
            spaceShuttleHeight.innerHTML = 0; 
        }
    });

    up.addEventListener("click", event => {
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
        rocket.style.top = "10px"; 
    }); 
});