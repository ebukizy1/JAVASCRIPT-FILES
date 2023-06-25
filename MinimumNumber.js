
function minimumNumber(firstNumber, secondNumber){
    if(firstNumber < secondNumber){
        return firstNumber;
    }else {
        return secondNumber;
    }
}

let value = minimumNumber(23, 56)
console.log(value)