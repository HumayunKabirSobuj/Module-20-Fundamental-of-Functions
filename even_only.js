function evenNumbersOnly(numbers) {
    let evens = [];
    for (const number of numbers) {
        if (number % 2 === 0) {
            console.log(number);
            evens.push(number);
        }
    }
    return evens;
}

const num = [2, 3, 9, 4, 5, 6, 7];
const evens = evenNumbersOnly(num);
console.log("even numbers are : ", evens);