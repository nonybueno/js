// TodoList Management
const Todo=require('./toDo.js')
function toDoList(){
    let todos=[]
    
    function addTodo(desc){
        return todos.push(new Todo (desc))
    }
    
    function removeTodo(removeId){
        todos = todos.filter(todo => todo.id !== removeId)
    }
    
    function findTodo(searchId){
        return todos.find(todo => todo.id === searchId)
    }
    
    function getTodos(){
        return todos
    }
    
    return {addTodo,removeTodo,findTodo,getTodos}
}
const {addTodo,removeTodo,findTodo,getTodos}=toDoList()
console.log(addTodo('Shopping'))
console.log(addTodo('ninin'))
console.log(addTodo('hoohoo'))
console.log(getTodos())
console.log(removeTodo(2))
console.log(findTodo(1))
console.log(getTodos())