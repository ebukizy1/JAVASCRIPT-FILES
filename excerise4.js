let prompt = require('prompt-sync')()

let count = Number(prompt("enter the start of the number to count from "));
let countEnd = Number(prompt("enter the end of the number to count from"));



let sum = 0;
for(count ; count <= countEnd ; count++){
    if( count % 2 == 0){
        sum+= count;
    }
console.log(` The sum of the even numbers enter is ${sum}`)
}