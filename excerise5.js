let prompt = require('prompt-sync')();

let number = Number(prompt("enter a number "));

let sum = 0;
let count = 1
while(count <=number){
    sum+=count;
 count++;
}
console.log(` the sum of the number enter is : ${sum}`);