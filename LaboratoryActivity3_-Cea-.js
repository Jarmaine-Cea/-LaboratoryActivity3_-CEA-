// Problem 1: Grade Calculator
function calculateGrade(score) {
    if (score >= 90 && score <= 100) {
        return 'A';
    } else if (score >= 80 && score <= 89) {
        return 'B';
    } else if (score >= 70 && score <= 79) {
        return 'C';
    } else if (score >= 60 && score <= 69) {
        return 'D';
    } else {
        return 'F';
    }
}

// Problem 2: Star Pattern
function showStars(base) {
    const rows = base + 2;
    for (let i = 1; i <= rows; i++) {
        let stars = '';
        for (let j = 1; j <= i; j++) {
            stars += '*';
        }
        console.log(stars);
    }
}

// Problem 3: Prime Number Checker
function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

// Problem 4: Multiplication Table
function multiplicationTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

function main() {
    const baseNumber = 7;
    
    console.log("========================================");
    console.log("PROBLEM 1: GRADE CALCULATOR");
    console.log("========================================");
    
    const score = baseNumber * 10 + 5;
    const grade = calculateGrade(score);
    
    console.log("Base number: " + baseNumber);
    console.log("Calculated score: " + score);
    console.log("Grade: " + grade);
    console.log();
    
    console.log("=== Example Test ===");
    const exampleBase = 7;
    const exampleScore = exampleBase * 10 + 5;
    const exampleGrade = calculateGrade(exampleScore);
    console.log("If base = " + exampleBase + " → score = " + exampleScore + " → Grade = " + exampleGrade);
    
    console.log("\n=== Additional Test Cases ===");
    const testBases = [9, 8, 6, 5, 3];
    
    testBases.forEach(base => {
        const testScore = base * 10 + 5;
        const testGrade = calculateGrade(testScore);
        console.log("Base: " + base + " → Score: " + testScore + " → Grade: " + testGrade);
    });
    
    console.log("\n========================================");
    console.log("PROBLEM 2: STAR PATTERN");
    console.log("========================================");
    
    console.log(`Star pattern for base ${baseNumber} (${baseNumber + 2} rows):`);
    showStars(baseNumber);
    
    console.log("\n========================================");
    console.log("PROBLEM 3: PRIME NUMBER CHECKER");
    console.log("========================================");
    
    const numberToCheck = baseNumber + 10;
    const primeResult = isPrime(numberToCheck);
    console.log(`Checking if ${numberToCheck} (base ${baseNumber} + 10) is prime:`);
    console.log(`${numberToCheck} is prime: ${primeResult}`);
    
    console.log("\n=== Additional Prime Checks ===");
    const numbersToTest = [2, 17, 29, 15, 23, 25];
    numbersToTest.forEach(num => {
        console.log(`${num} is prime: ${isPrime(num)}`);
    });
    
    console.log("\n========================================");
    console.log("PROBLEM 4: MULTIPLICATION TABLE");
    console.log("========================================");
    
    console.log(`Multiplication table for ${baseNumber}:`);
    multiplicationTable(baseNumber);
    
    console.log("\n========================================");
    console.log("ALL PROBLEMS COMPLETED");
    console.log("========================================");
}

main();