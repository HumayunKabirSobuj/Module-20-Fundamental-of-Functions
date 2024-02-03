function sumOfNumbers(numbers) {
    let sum = 0;
    for (const number of numbers) {
        console.log(number);
        sum = sum + number;
    }
    return sum;
}
const num = [10, 20, 30, 40];
const sum = sumOfNumbers(num);
console.log("sum of the array is :", sum);