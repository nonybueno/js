// let num1=5.5
// console.log(typeof num1)
// let num2=10
// console.log(typeof num2)

// let str="Somchai"  //single quote, double quote, backticks
// console.log(typeof str)
// let aLetter="\u0041"   //unicode
// console.log(aLetter)
// console.log(typeof aLetter)

// let absent=true
// console.log(typeof absent)

// let value=100n
// console.log(typeof value)

// let stdId=Symbol("64130500101")
// console.log(typeof stdId)

// let unknownObj=null
// console.log(typeof unknownObj)

// let unknownValue
// console.log(typeof unknownValue)

// let myObj={course : "INT201", lecturer: "Aj.Umaporn"}
// console.log(typeof myObj)

// let val
// console.log(typeof val)
// console.log(val)

// let nullVal = null
// console.log(typeof nullVal)
// console.log(nullVal)

// let sentence = 'Hello World'
// sentence.toUpperCase()
// console.log(sentence)
// console.log(sentence.toUpperCase())

// let i
// for(i=1;i<10;i++){
//     console.log(i)
// }
// console.log('----------')
// console.log(i)

// let emojiIcon = String.fromCodePoint('0x1F603')
// console.log(emojiIcon)
// let msg = "Today is Present"
// console.log(msg.length)
// console.log(msg.charAt(0))
// console.log(msg.charAt(msg.length - 1))

// let msg2=`hello, ${msg}, bye bye ${emojiIcon}`
// console.log(msg2)

// let arr=[] //array type
// //implicit type conversion==> arr becomes true
// if(arr) console.log('empty')
// else console.log('not empty')

// let arr2=['64130500101']
// if(arr2) console.log('empty')
// else console.log('not empty')

// if(arr2.length === 0)
// console.log('empty array')
// else console.log ('not empty array')

// if(Boolean(0)) console.log('0 is false')
// const result=Number('4')*5
// const result2=String(10)+'room'

// --- Expression ---
// let num=1
// let result=num // variable = expression //assignment statement
// expression: literal, variable, combination of variable,literal and operators
// let randNum=Math.floor(Math.random()* (10 - 1) + 1); //range 1(min)-10(max)
// // Math.floor(Math.random() * (max-min+1) +min)

// // Math.random() 0-0.99999
// // *9 = 0-9.99999
// // *1-10.9999
// // * Math.floor(10.999) = 10
// const isEqual='2'==2
// console.log(isEqual);

// const isEqual2='2'===2
// console.log(isEqual2);

// console.log(5/2)
// console.log(5%2)

// let num2=num2+1
// num2+=1

// (boolean expression)? expression (true): expression (fasle)
// let x=(11%2===0?1:10)
// console.log(x)

// ?. called optional chaining
// // 1.array is null
// let items=['Helloworld','hey']
// console.log(items?.[0])
// // 2.array is undefined
// let x
// console.log(x?.[0])
// // 3.object is null
// let y=null
// console.log(y?.id)
// // 4.object is undefined
// let z
// console.log(z?.firstname)

// ?? nullish coalescing
// const obj={a:10, b:999}
// console.log(obj.b)
// const b= obj.b ?? 0
// console.log(b)
// array
// let arr
// console.log(arr)
// arr=arr ?? [5,10]
// console.log(arr.length)

// console.log('Hello' < 'hello') //เปรียบเทียบด้วย ascii code ตัวอักษรแต่ละตัวค่าไม่เท่ากัน
// console.log('Hello' === 'hello')
// console.log('Hello' > 'hello')

// let str1='hey'
// let str2='Hey'
// console.log(str1===str2)

// function getTitle(sex){
// //code here
//     if(sex==='male'){
//         return 'MR'
//     }else if(sex==='female'){
//         return 'MS'
//     }else if(sex === undefined){
//         return 'N/A'
//     }
// }

// // function getTitle(sex){
// // //code here
// //     return sex==='female'?'MS':sex==='male'?'MR':'N/A'
// // }
// console.log(getTitle('male'))
// console.log(getTitle('female'))
// console.log(getTitle())

// let arr1=[5,4,3]
// let arr2=[5,4,3]
// console.log(typeof arr1)
// console.log(typeof arr2)
// console.log(arr1===arr2)

// //sharing array object
// let arr3=arr1
// console.log(arr1===arr3)

// //one object changes array element will effect to another sharing object
// arr3[0]=111
// console.log(arr1[0])

// const letter='a'
// let str
// switch (letter) {
//     case 'A':
//     case 'a': str='letter A'
//         break;
//     case 'B':
//     case 'b':str='letter B'
//         break;
// }
// console.log(str)

// const arr1=[5,10,2, ['blue','red'],true, 'ok']
// console.log(arr1[0])
// console.log(arr1[arr1.length-1])
// for( const a of arr1)
// console.log(a)
// console.log(arr1[arr1.length-1])
// let x = []
// let y = null
// let z
// console.log(x.length)
// console.log(typeof(z))
// console.log(z.length)

// let displayIt=function(msg){
//     // console.log(msg)
//     return msg
// }
// displayIt('Hello,Js')
// console.log(typeof displayIt)
// let doSomething1=displayIt
// let doSomething2=displayIt('Hello')
// console.log(typeof doSomething1)
// console.log(typeof doSomething2)

// console.log(doSomething1)
// console.log(doSomething2)




