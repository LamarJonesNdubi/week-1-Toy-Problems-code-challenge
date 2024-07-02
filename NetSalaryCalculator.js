// netSalaryCalculator.js <by: Lamar Jones Ndubi> again.
// This is why i failed finance classes.

function netSalaryCalculator() {
    let basicSalary = parseFloat(prompt("Enter the basic salary: "));
    let benefits = parseFloat(prompt("Enter the benefits: "));

    let grossSalary = basicSalary + benefits;

    // If i assume tax rates from the provided KRA link
    let payee = calculateTax(grossSalary);
    let nhif = calculateNHIF(grossSalary);
    let nssf = calculateNSSF(grossSalary);

    let netSalary = grossSalary - payee - nhif - nssf;

    console.log("Gross Salary: " + grossSalary);
    console.log("PAYE: " + payee);
    console.log("NHIF: " + nhif);
    console.log("NSSF: " + nssf);
    console.log("Net Salary: " + netSalary);
    //I feel like i have missed something.....
}

function calculateTax(grossSalary) {
    // Implement tax calculation logic based on KRA rates provided
    // Placeholder value
    return grossSalary * 0.1; // Example tax calculation
}

function calculateNHIF(grossSalary) {
    // Implement NHIF deduction logic
    // Placeholder value-ish
    return 500; // Example NHIF deduction/deductions
}

function calculateNSSF(grossSalary) {
    // Implement NSSF deduction/deductions logic
    // Placeholder value
    return 200; // Example NSSF deduction/deductions
}

// To execute the lines of code, call on the function
// .......node..node..node..
// Guess i am doing this again
netSalaryCalculator();

//-------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------
// please Execute the lines of code bellow separately.

// netSalaryCalculatorNode.js <by: Lamar Jones Ndubi>

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function netSalaryCalculator() {
    rl.question("Enter the basic salary: ", (basicSalary) => {
        rl.question("Enter the benefits: ", (benefits) => {
            basicSalary = parseFloat(basicSalary);
            benefits = parseFloat(benefits);

            if (isNaN(basicSalary) || isNaN(benefits)) {
                console.log("Please enter valid numbers for salary and benefits.");
                rl.close();
                return;
            }

            let grossSalary = basicSalary + benefits;

            let payee = calculateTax(grossSalary);
            let nhif = calculateNHIF(grossSalary);
            let nssf = calculateNSSF(grossSalary);

            let netSalary = grossSalary - payee - nhif - nssf;

            console.log("Gross Salary: " + grossSalary.toFixed(2));
            console.log("PAYE: " + payee.toFixed(2));
            console.log("NHIF: " + nhif.toFixed(2));
            console.log("NSSF: " + nssf.toFixed(2));
            console.log("Net Salary: " + netSalary.toFixed(2));

            rl.close();
        });
    });
}

function calculateTax(grossSalary) {
    // Implement tax calculation logic based on KRA rates provided
    // Placeholder values based on Kenyan tax brackets....
    if (grossSalary <= 24000) {
        return grossSalary * 0.1; // 10% for simplicity
    } else if (grossSalary <= 32333) {
        return grossSalary * 0.25; // 25% for simplicity
    } else {
        return grossSalary * 0.3; // 30% for simplicity
    }
}

function calculateNHIF(grossSalary) {
    // Implement NHIF deduction logic based on provided KRA link
    // Placeholder values for NHIF deductions
    if (grossSalary <= 5999) {
        return 150;
    } else if (grossSalary <= 7999) {
        return 300;
    } else if (grossSalary <= 11999) {
        return 400;
    } else if (grossSalary <= 14999) {
        return 500;
    } else if (grossSalary <= 19999) {
        return 600;
    } else if (grossSalary <= 24999) {
        return 750;
    } else if (grossSalary <= 29999) {
        return 850;
    } else if (grossSalary <= 34999) {
        return 900;
    } else if (grossSalary <= 39999) {
        return 950;
    } else if (grossSalary <= 44999) {
        return 1000;
    } else if (grossSalary <= 49999) {
        return 1100;
    } else if (grossSalary <= 59999) {
        return 1200;
    } else if (grossSalary <= 69999) {
        return 1300;
    } else if (grossSalary <= 79999) {
        return 1400;
    } else if (grossSalary <= 89999) {
        return 1500;
    } else if (grossSalary <= 99999) {
        return 1600;
    } else {
        return 1700;
    }
}

function calculateNSSF(grossSalary) {
    // Implement NSSF deduction logic based on provided KRA link
    // Placeholder values for NSSF deductions
    return 200; // Example NSSF deduction for simplicity
}
//..fingures crossed
// To execute the lines of code, call the function
netSalaryCalculator();
//----------------#REJECTFINANCIALBILL2024------------------
