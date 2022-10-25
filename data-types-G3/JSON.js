const obj1={id:1,type:'unknown'}
const obj2={}

// Check empty object (compare whether is empty {} or not)
// 1.using JSON stringify
console.log(JSON.stringify(obj2) === '{}')
// 2.using Oject.keys
console.log(Object.keys(obj2).length === 0)

const obj2keys=Object.keys(obj2)
console.log(obj2keys.length === 0)