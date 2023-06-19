let prompt = require('prompt-sync')()

function calculation(leftOperand, rightOperand, operator){
if (operator === "+"){
    console.log(Number(leftOperand) + Number(rightOperand))
}else if (operator === "-"){
    console.log(Number(leftOperand) - Number(rightOperand))
}
else if ( operator === "/"){
    console.log(Number(leftOperand) / Number(rightOperand))
}else if(operator === "*"){
    console.log(Number(leftOperand) * Number(rightOperand))
}
}

let leftOperand = prompt("Enter The Left operand  ")
 let rightOperand = prompt("Enter The Left operand  ")
let operator = prompt(" enter The operator  ")

calculation(leftOperand, rightOperand, operator)