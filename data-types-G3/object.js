// 1.object literal
// let profile = {id: 123,
//                 interests: [ 'music', 'skiing']
//             }
// console.log(profile)
// console.log(profile.id)
// console.log(profile.interests[0])
// console.log(profile.interests[1])

// let book= { isbn:123456789,
//             title:'JavaScript',
//             author: {firstname:'Umaporn',
//             lastname:'Sup'}
//         }
// console.log(book.author.firstname)
// book.author.firstname='Somchai'
// book.author['lastname']='Sukjai'
// console.log(book.author)

// 2.new operator
// class Point {constructor(x = 0, y = 0) {
//     this.x= x
//     this.y= y
// }
// distance(anotherPoint) {
//     return `this.x = ${this.x}, anotherPoint.x = ${anotherPoint.x}`
//     // return Math.sqrt((this.x- anotherPoint.x) ** 2 +(this.y- anotherPoint.y) ** 2)
//         //Exponentiation operator (**)
//     }
// }
// let p1 = new Point(2,3)
// console.log(p1)
// const p2 = new Point(4,5)
// console.log(p2)
// console.log(p1.distance(p2))

// p2.x=10
// p2.y=20
// console.log(p2.distance(p1))

// let square ={
//     side:5,
//     area:function(){
//         return this.side*this.side
//     }
// }
// console.log(square.side)
// console.log(square.area())

// const point1 = {
//     x:2,
//     y:3,
//     distance:function(anotherPoint){
//         console.log('distance function of point1 is working')
//         return `this.x = ${this.x}, anotherPoint.y = ${this.y}`
//         // return Math.sqrt((this.x- anotherPoint.x) ** 2 +(this.y- anotherPoint.y) ** 2)
//     }
// }
// const point2 = {
//     x:4,
//     y:5,
//     distance:function(anotherPoint){
//         console.log('distance function of point2 is working')
//         console.log(`this.x = ${this.x}, anotherPoint.y = ${this.y}`)
//         return Math.sqrt((this.x- anotherPoint.x) ** 2 +(this.y- anotherPoint.y) ** 2)
//     }
// }
// console.log(point1.distance(point2))
// console.log('-----------------')
// console.log(point2.distance(point1))

// function distance(anotherPoint){
//     return Math.sqrt((this.x - anotherPoint.x) ** 2 +(this.y - anotherPoint.y) ** 2)
// }
// const point1={
//     x : 2,
//     y : 3,
// }
// const point2={
//     x : 4,
//     y : 5,
// }
// point1['getDistance']=distance
// point2['getDistance']=distance
// console.log(point1.getDistance(point2))
// console.log(point2.getDistance(point1))

//create separately constructor function
// without class
// function Point(x,y){
//     this.x =x
//     this.y =y
// }
//  let pp1=new Point(2,3)
//  let pp2=new Point(4,5)
//  console.log(pp1)
//  console.log(pp2)


// existing object
// const o = Object.create({x: 1, y: 2})
// const p = Object.create(o)
// p.z=10
// console.log(p.x) //  1
// console.log(p.y) //  2
// console.log(p)

// class Subject{
//     constructor(title='untitled'){
//         this.title=title
//     }
// }
// const int201 = new Subject('Client Side I')
// console.log(int201)

// const int203 = Object.create(int201)
// console.log(int203.title)
// int203['lect']='2hrs'
// int203['lab']='2hrs'
// console.log(int203)
// //prototype based
// console.log(Subject.prototype.isPrototypeOf(int201))
// console.log(Object.prototype.isPrototypeOf(int201))
// console.log(Subject.prototype.isPrototypeOf(int203))

// const book = {isbn:1234567,title:'Basic JS',type:'Paper'}
// const author={
//     author:{firstName:'John',lastName:'Su'}
// }

// const eBook1={...book}
// const eBook2={...book,...author}
// const eBook3={...book,type:'Electronic'}

// console.log(eBook1)
// console.log(eBook2)
// console.log(eBook3)

const eBook={
    isbn:123456789,
    title:'Basic JS',
    type:'Paper',
    author: {
        fullName:{
            firstName:'John',
            lastName:'Su'
        }
    }
}

// destructuring obeject properties
// const {type,isbn}=eBook
// console.log(type)
// console.log(isbn)

// // destructuring with rest operator
// const {title,...detail}=eBook
// console.log(title)
// console.log(detail)

// const {author:{fullName:{firstName}}} = eBook
// console.log(firstName)

// const ebooks=[{
//     isbn: 1,
//     title: 'Basic JS',
//     type:'Paper'
// },
// {
//     isbn: 2,
//     title:'Node JS',
//     type:'electronic'
// }]

// // destructuring array
// const [{isbn}] = ebooks
// console.log(isbn)

// // destructuring that combine array and object
// const [,{isbn,type}] = ebooks
// console.log(isbn)
// console.log(type)