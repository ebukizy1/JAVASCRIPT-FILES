let prompt = require('prompt-sync')()

let ID = prompt("enter your ID  ");
let AVAILABLE = prompt("enter if it is available  ");
let COUNT = prompt("enter the numbers of count  ");
let NAME = prompt("enter your name  ");
let AUTHOR = prompt("enter the author  ");

let myObject = {
 ID:Number(ID),
 AVAILABLE: Boolean(AVAILABLE),
 COUNT:Number(COUNT),
 NAME: NAME,
 AUTHOR: AUTHOR
}

console.log(myObject)



