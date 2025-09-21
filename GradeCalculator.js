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


function main() {

    const baseNumber = 7;

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
}

main();