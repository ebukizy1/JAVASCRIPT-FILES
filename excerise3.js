let prompt = require('prompt-sync')()

let number = Number(prompt("enter the number of the times table "));


for (let counter =  1; counter <= 12; counter++){
console.log(`${number} x ${counter} = ${counter * number}`)

}