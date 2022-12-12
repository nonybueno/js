import { students } from "./students.js";
import { lecturers } from "./lecturers.js";

// 1.query button node
const studentButton = document.getElementById('1')
const lectureButton = document.getElementById('2')

// 2.add event listener to button
// 2.1 create event handler function
function loopStudent(){
    const ulParent = document.querySelector('ul')
    ulParent.textContent=''
    for (const student of students) {
    const liElement=document.createElement('li')
    liElement.textContent=`ID:${student.id},NAME: ${student.name}`
    ulParent.append(liElement)
}}
studentButton.addEventListener('click',loopStudent)

function loopLecture(){
    const ulParent = document.querySelector('ul')
    ulParent.textContent=''
    for (const lecture of lecturers) {
    const liElement=document.createElement('li')
    liElement.textContent=`ID:${lecture.id},NAME: ${lecture.name}`
    ulParent.append(liElement)
}}
lectureButton.addEventListener('click',loopLecture)



// const buttonElements = document.querySelectorAll('button')
// console.log(buttonElements)
// const studentButton = buttonElements[0]
// console.log(studentButton)
// const lectureButton = buttonElements[1]
// console.log(lectureButton)

// // register (add) event handler(event listener) to student button

// //using anonymous function
// studentButton.addEventListener('click',() => {alert('hello, students')},true)

// studentButton.addEventListener('click',() => {alert('Good, bye')})

// //using function
// const lectureButtonHandler = () => {
//     alert ('hi, lecturers')
// }

// lectureButton.addEventListener('click',lectureButtonHandler,true)

// const removeButton = buttonElements[2]

// removeButton.addEventListener('click',() => {
//     lectureButton.removeEventListener('click',lectureButtonHandler)},true)

// //div
// const divButton = document.getElementById('buttonPanel')
// divButton.addEventListener('click',() => {alert("Div working!")},true)


