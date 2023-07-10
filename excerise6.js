let prompt = require('prompt-sync')();

let number = Number(prompt("enter a grade number of student or enter press -> 0 to exist :"));

let sum = 0;
let count = 1
while(number != 0){
    number = Number(prompt("enter a grade number of student or enter press -> 0 to exist : "));
    sum+=number;
 count++;
}

console.log(`the total number of number of  ${sum}`);