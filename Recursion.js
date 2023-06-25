

function isEven(number){
 if (number % 2 === 0){
    return true
 }else if( number % 2 == 1){
    return false
 }else if(number < 0){
    return isEven(-number)
 }else {
    return isEven(number -2)
 }

}

let value = isEven(-4)
console.log(value)