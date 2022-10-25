// function add(n1, n2){
//     return n1+n2
// }

// function subtract(n1, n2){
//     return n1-n2
// }

// //first class citizens
// // 1. assign function to variable
// let sum = add //assign add function to sum
// console.log(typeof sum)
// console.log(sum(10,5))
// console.log(add(10,5))

// let minus = subtract
// console.log(typeof minus)
// console.log(subtract(10,5))
// console.log(minus(10,5))

// // 2. passed function as parameter
// function calculator(n1,n2,func){
//     return func(n1,n2)
// }

// console.log(calculator(20,10,minus))
// console.log(calculator(20,10,sum))

// // 3. return function as value of another function
// function sayGoodBye(){
//     return "Good bye"
// }

// function doSomething(){
//     return sayGoodBye
// }

// let doIt = doSomething()  //let doIt=sayGoodBye
// console.log(doIt())

console.log(`Hello`)
let num=0
// setTimeout (function, millisecond) is asynchonous function
// await
setTimeout(function(){
    num++
    console.log(`${num} (in setTimeout function)`)  //`${variableName}` //backticks``
}, 8000)
console.log(`${num} (Ending)`)

