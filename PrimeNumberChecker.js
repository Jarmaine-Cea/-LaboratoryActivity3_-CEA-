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

const base = 3;
const numberToCheck = base + 10;
console.log(`${numberToCheck} is prime:`, isPrime(numberToCheck));