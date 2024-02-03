/*
function squre(number){
    console.log(number);
}
squre(4);

*/

// বর্গ বের করার ফর্মুলা

function squre(number) {
    console.log("value of the parameter is : ", number);
    const borgo = number * number;
    console.log("Squre of given number is : ", borgo);

}
squre(10); //squre( এর মধ্যে ইচ্ছেমত মান ব্যবহার করা যাবে )

// যোগ করার ফর্মুলা

function add(num1, num2) {
    const sum = num1 + num2;
    console.log(sum);
}
const first=5;
const second=15;
add(first, second);
