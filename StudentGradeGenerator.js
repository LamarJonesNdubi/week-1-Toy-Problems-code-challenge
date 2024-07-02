// studentGradeGenerator.js <by: Lamar Jones Ndubi>

function studentGradeGenerator() {
    let marks = prompt("Enter student marks here from (0-100): ");
    marks = parseInt(marks);
    //hope i am correct.

    if (marks > 79) {
        console.log("Grade: A");
    } else if (marks >= 60 && marks <= 79) {
        console.log("Grade: B");
    } else if (marks >= 49 && marks <= 59) {
        console.log("Grade: C");
    } else if (marks >= 40 && marks <= 49) {
        console.log("Grade: D");
    } else {
        console.log("Grade: E");
    }
}

// To execute the lines of  programme, call the function.
// Execution Fauilure...non browser environment..prompt not defined..alright then
studentGradeGenerator();


//----------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------
//Please execute the lines bellow instead.


// studentGradeGeneratorNode.js <by: Lamar Jones Ndubi>

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function studentGradeGenerator() {
    rl.question("Enter student marks here (0-100): ", (marks) => {
        marks = parseInt(marks);
        //I prefer shorter codes..

        if (isNaN(marks) || marks < 0 || marks > 100) {
            console.log("Please enter a valid number between 0 and 100.");
        } else {
            if (marks > 79) {
                console.log("Grade: A");
            } else if (marks >= 60 && marks <= 79) {
                console.log("Grade: B");
            } else if (marks >= 49 && marks <= 59) {
                console.log("Grade: C");
            } else if (marks >= 40 && marks <= 49) {
                console.log("Grade: D");
            } else {
                console.log("Grade: E");
            }
        }

        rl.close();
    });
}

// It better work
// To execute the lines of program, call the function.
studentGradeGenerator();
