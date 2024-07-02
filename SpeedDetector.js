
// speedDetector.js <by: Lamar Jones Ndubi>

function speedDetector() {
    let speed = prompt("Enter the speed of the car:");
    speed = parseInt(speed);

    if (speed < 70) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - 70) / 5);
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else { //coding it tough.
            console.log("Points: " + demeritPoints);
        }
    }
}

// To execute the lines of programme, call the function.
// Execution failure twice...manual checking prompt function availablility on node.js..
// Yeah..node.js is a non browser environment...this will be a challange unless executed on an online text editor
speedDetector();


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Please try this lines of code below on a defferent text editor since the above ones dont function with node.js
// Alrigth here we go agian:

// speedDetectorNode.js <by: Lamar Jones Ndubi>

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function speedDetector() {
    readline.question("Enter the speed of the car: ", speed => {
        if (isNaN(speed) || speed === null || speed === "") {
            console.log("Please enter a valid number for speed.");
            readline.close();
            return;
        }
        // verifying.........

        speed = parseInt(speed);

        if (speed < 70) {
            console.log("Ok");
        } else {
            const demeritPoints = Math.floor((speed - 70) / 5);
            if (demeritPoints > 12) {
                console.log("License suspended");
            } else {
                console.log("Points: " + demeritPoints);
            }
        }
        readline.close();
    });
}
// Hope this version works
// To execute the lines of program, call the function.
speedDetector();
