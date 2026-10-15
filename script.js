/* JavaScript Loops Assignment - Task 14 */

// ---------- Core operations (all built using loops) ----------

// Sum of the first n natural numbers using a for loop.
function sumOfFirstN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Print the multiplication table of n using a for loop.
function tableOfN(n) {
    const lines = [`Table of ${n}:`];
    for (let i = 1; i <= 10; i++) {
        lines.push(`${n} x ${i} = ${n * i}`);
    }
    return lines;
}

// Check whether a number is prime.
function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

// Print all factors of n using a for loop.
function getFactors(n) {
    const factors = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

// Sum of all digits of a number using a while loop.
function sumOfDigits(n) {
    let sum = 0;
    let temp = Math.abs(n);
    while (temp > 0) {
        sum += temp % 10;
        temp = Math.floor(temp / 10);
    }
    return sum;
}

// Armstrong number check: sum of cubes of digits equals the number.
function isArmstrong(n) {
    let sum = 0;
    let temp = Math.abs(n);
    while (temp > 0) {
        const digit = temp % 10;
        sum += digit * digit * digit;
        temp = Math.floor(temp / 10);
    }
    return sum === Math.abs(n);
}

// ---------- Process a single number and show every required result ----------

function processNumber(num) {
    const lines = [];
    const log = (message) => {
        console.log(message);
        lines.push(message);
    };

    log(`\n========== Processing number: ${num} ==========`);
    log(`Ex-Number:-${num}`);
    log(`Sum of first ${num} numbers: ${sumOfFirstN(num)}`);

    const tableLines = tableOfN(num);
    tableLines.forEach(log);

    log(`Sum of its digits:${sumOfDigits(num)}`);
    log(`Is it an Armstrong number? ${isArmstrong(num) ? "Yes" : "No"}`);
    log(`Is it a prime number? ${isPrime(num) ? "Yes" : "No"}`);
    log(`Factors:${getFactors(num).join(",")}`);

    return lines;
}

// ---------- Test variables (at least 5 different numbers) ----------

const num1 = 153;
const num2 = 5;
const num3 = 7;
const num4 = 12;
const num5 = 370;
const num6 = 9;
const num7 = 28;

const numbersToCheck = [num1, num2, num3, num4, num5, num6, num7];

function sampleOutputFor(num) {
    return [
        `Ex-Number:-${num}`,
        `Sum of its digits:${sumOfDigits(num)}`,
        `Is it an Armstrong number? ${isArmstrong(num) ? "Yes" : "No"}`,
        `Is it a prime number? ${isPrime(num) ? "Yes" : "No"}`,
        `Factors:${getFactors(num).join(",")}`
    ];
}

function runProgram() {
    const output = document.getElementById("output");
    if (output) output.textContent = "";

    numbersToCheck.forEach(processNumber); // full results go to the browser console

    if (output) {
        output.textContent = sampleOutputFor(numbersToCheck[0]).join("\n");
    }
}

// Make the program available to the button and to the browser console.
window.runProgram = runProgram;

document.addEventListener("DOMContentLoaded", () => {
    runProgram();
});