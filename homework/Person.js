class Person{
    constructor(firstName = 'N/A',lastName = 'N/A',dateOfBirth = new Date(Date.now())){
    this.firstName = firstName
    this.lastName = lastName
    this.dateOfBirth = dateOfBirth
    }
    getFullname(){
        return `${this.lastName}, ${this.firstName}`
    }
    getAge(){
        
    let ageInMilliseconds = new Date(Date.now() - new Date(this.dateOfBirth));
        return Math.floor(ageInMilliseconds/1000/60/60/24/365); // convert to years
    }
    // getAge(){
    //     const diff_time_ms=Date.now()-this.dateOfBirth.getTime()
    //     const diff_time_date=new Date(diff_time_ms)
    //     const age=diff_time_date.getFullYear()-1970        
    //     return age    
    // }
    isEqual(anotherPerson){
        if(this.firstName.toLocaleLowerCase() === anotherPerson.firstName.toLocaleLowerCase() && this.lastName.toLocaleLowerCase() === anotherPerson.lastName.toLocaleLowerCase()){
            return true
        }else{
                return false
            }
    }
    toString(){
        return `Firstname: ${this.firstName} , Age: ${this.getAge()}`
    }
}

let person = new Person('thaninpong','panthawong','2003-01-29')

console.log('----1 function-----')
console.log(person.getFullname(person))

let anotherPerson = {
    firstName:'Thaninpong',
    lastName:'Panthawong',
    dateOfBirth: '1970-02-21'
}

console.log('----2 function-----')
console.log(person.getAge())

console.log('----3 function-----')
console.log(person.isEqual(anotherPerson))

console.log('----4 function-----')
console.log(person.toString())
