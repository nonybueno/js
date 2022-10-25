// // Arrow Function
// // 1.
// function add(a,b){
//     let sum=a+b
//     return sum
// }
// const afadd = (a,b) => {
//     let sum=a+b
//     return sum
// }
// console.log(afadd(1,2))
// // 2.
// function add2(a,b){
//     return a+b
// }
// const afadd2 = (a,b) => a+b
// console.log(afadd2(2,3))
// // 3.
// function getValue(msg){
//     return msg.charAt(0)
// }
// const afgetValue = msg => msg.charAt(0)
// console.log(afgetValue('INT201'))
// // 4.
// function randomNumber(){
//     return Math.random()
// }
// const afrandomNumber = () => Math.random()
// console.log(afrandomNumber())


// // anonymous function (function นิรนาม ไม่กำหนดชื่อ function(function เป็น นิพจน์))
// const value=12+100*2
// console.log(value)
// const greetingFn=function (name){
//    return `hello, ${name}`}
// console.log(greetingFn('Somchai'))
// const greetingFn2=name=> `hello, ${name}`
// console.log(greetingFn2('Suda'))

// const author = 'Thaninpong'
// // outern function
// function average(nums){
//     let total = 0

//     // inner (nested) function
//     function sum(){
//         for(const num of nums){
//             total+=num
//         }
//         return total
//     }
//     console.log(`length: ${nums.length}`)
//     return sum()/nums.length
// }

// console.log(`average = ${average([1,2,3,4,5])}`)

function sum2(nums){
    let total=0    
    for(const num of nums){
        total+=num        
        console.log(total)
    }
    return total
}

function average2(nums){
   return sum2(nums)/nums.length
}

console.log(average2([1,2,3,4,5]))

function x(a,b,c){
    for(const num of arguments){
        total+=num
    }
    return total
}