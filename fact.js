let number = 5;
let fact = 1;

if (isNaN(number) == 0) {
    if (number < 0) {
        console.log("Please enter a valid number!");
    } else if (number == 0) {
        console.log("Factoriel of the number: " + 1);
    } else {
        for (let i = 1; i <= number; i++) {
            fact = fact * i;
        }
        console.log("Factoriel of the number: " + fact);
    }
} else {
    console.log("Please enter a valid number!");
}
